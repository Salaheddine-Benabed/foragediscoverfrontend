import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Factures } from '../../models/factures';
import { FacturesService } from '../../services/factures.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['paymentId', 'paymentDate', 'amount', 'paymentStatus'];
  dataSource = new MatTableDataSource<Factures>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private facturesService: FacturesService) {}

  ngOnInit() {
    this.fetchFactures();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchFactures() {
    this.facturesService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
