import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrl: './add-client-dialog.component.css'
})
export class AddClientDialogComponent {


  newClient = {
    name: '',
    address: '',
    phoneNumber: '',
    email: ''
  };

  constructor(
    public dialogRef: MatDialogRef<AddClientDialogComponent>
  ) {}


  onSaveClick() {
    this.dialogRef.close(this.newClient);
  }
  onNoClick() {
    this.dialogRef.close();
  }

}
