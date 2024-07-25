import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-add-stock-dialog',
  templateUrl: './add-stock-dialog.component.html',
})
export class AddStockDialogComponent implements OnInit {
  newStock: Stock = {
    itemId: 0,
    itemName: '',
    quantity: 0,
    status: '',
    expiryDate: new Date()
  };

  constructor(
    public dialogRef: MatDialogRef<AddStockDialogComponent>
  ) {}

  ngOnInit(): void {}

  onSaveClick(): void {
    this.dialogRef.close(this.newStock);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
