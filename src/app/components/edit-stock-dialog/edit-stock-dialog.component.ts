import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-edit-stock-dialog',
  templateUrl: './edit-stock-dialog.component.html',
})
export class EditStockDialogComponent implements OnInit {
  stock: Stock;

  constructor(
    public dialogRef: MatDialogRef<EditStockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { stock: Stock }
  ) {
    this.stock = { ...data.stock };
  }

  ngOnInit(): void {}

  onSaveClick(): void {
    this.dialogRef.close(this.stock);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
