import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Personnel } from '../../models/personnel';
import { PersonnelService } from '../../services/personnel.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['employeeId', 'name', 'department', 'jobTitle', 'email', 'phoneNumber', 'role'];
  dataSource = new MatTableDataSource<Personnel>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private personnelService: PersonnelService) {}

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
}
