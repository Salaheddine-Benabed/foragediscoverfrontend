import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Projets } from '../../models/projets';
import { ProjetsService } from '../../services/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['projectId', 'client', 'projectName', 'startDate', 'endDate', 'status', 'totalCost'];
  dataSource = new MatTableDataSource<Projets>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private projetsService: ProjetsService) {}

  ngOnInit() {
    this.fetchProjets();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchProjets() {
    this.projetsService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
