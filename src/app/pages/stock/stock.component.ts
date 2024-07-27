import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/stock.service';
import { AddStockDialogComponent } from '../../components/add-stock-dialog/add-stock-dialog.component';
import { EditStockDialogComponent } from '../../components/edit-stock-dialog/edit-stock-dialog.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['itemId', 'itemName', 'quantity', 'status', 'expiryDate', 'actions'];
  dataSource = new MatTableDataSource<Stock>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private stockService: StockService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchStock();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchStock() {
    this.stockService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  addStock() {
    const dialogRef = this.dialog.open(AddStockDialogComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createStock(result);
      }
    });
  }

  createStock(stock: Stock) {
    this.stockService.save(stock).subscribe(() => {
      this.fetchStock();
    });
  }

  editStock(stock: Stock) {
    const dialogRef = this.dialog.open(EditStockDialogComponent, {
      width: '250px',
      data: { stock }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateStock(result);
      }
    });
  }

  updateStock(stock: Stock) {
    this.stockService.save(stock).subscribe(() => {
      this.fetchStock();
    });
  }

  deleteStock(itemId: number) {
    console.log("deleting : ", itemId);
    this.stockService.delete(itemId).subscribe(() => {
      this.fetchStock();
    }
    );
  }
}
