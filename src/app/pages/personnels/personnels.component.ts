import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Personnel } from '../../models/personnel';
import { PersonnelService } from '../../services/personnel.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonnelDialogComponent } from '../../components/edit-personnel-dialog/edit-personnel-dialog.component';
@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'department', 'jobTitle', 'email', 'phoneNumber', 'role', 'actions'];
  dataSource = new MatTableDataSource<Personnel>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private personnelService: PersonnelService, private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchPersonnels();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchPersonnels() {
    this.personnelService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  editPerson(person: Personnel) {
    const dialogRef = this.dialog.open(EditPersonnelDialogComponent, {
      width: '250px',
      data: {person}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updatePersonnel(result);
      }
    });
  }

  updatePersonnel(person: Personnel) {
    console.log('Person data in personnel component: ',person);
    this.personnelService.update(person).subscribe(() => {
      this.fetchPersonnels();
    });
  }

  deletePerson(id: number) {
    this.personnelService.delete(id).subscribe(() => {
      this.fetchPersonnels();
    });
  }
}
