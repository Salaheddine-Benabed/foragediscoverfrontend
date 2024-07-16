import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['itemId','itemName' , 'quantity', 'status', 'expiryDate'];
  dataSource = new MatTableDataSource<Stock>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private StockService: StockService) {}

  ngOnInit() {
    this.fetchStock();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchStock() {
    this.StockService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
