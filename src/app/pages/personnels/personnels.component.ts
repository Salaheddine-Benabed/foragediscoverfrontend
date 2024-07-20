import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PersonnelService } from '../../services/personnel.service';
import { RoleService } from '../../services/role.service';
import { EditPersonnelDialogComponent } from '../../components/edit-personnel-dialog/edit-personnel-dialog.component';
import { AddPersonnelDialogComponent } from '../../components/add-personnel-dialog/add-personnel-dialog.component';
import { Personnel } from '../../models/personnel';
import { Role } from '../../models/role';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'department', 'jobTitle', 'email', 'phoneNumber', 'role', 'actions'];
  dataSource = new MatTableDataSource<Personnel>();
  roles: Role[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private personnelService: PersonnelService,
    private roleService: RoleService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchRoles();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchRoles() {
    this.roleService.getAllRoles().subscribe((roles: Role[]) => {
      this.roles = roles;
      this.fetchPersonnels();
    });
  }

  fetchPersonnels() {
    this.personnelService.getAll().subscribe(data => {
      this.dataSource.data = data.map(person => {
        const role = this.roles.find(r => r.id === person.roleId);
        return { ...person, roleName: role ? role.name : 'Unknown Role' };
      });
    });
  }

  addPerson() {
    const dialogRef = this.dialog.open(AddPersonnelDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createPersonnel(result);
      }
    });
  }

  createPersonnel(person: Personnel) {
    this.personnelService.add(person).subscribe(() => {
      this.fetchPersonnels();
    });
  }

  editPerson(person: Personnel) {
    const dialogRef = this.dialog.open(EditPersonnelDialogComponent, {
      width: '250px',
      data: { person }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updatePersonnel(result);
      }
    });
  }

  updatePersonnel(person: Personnel) {
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
