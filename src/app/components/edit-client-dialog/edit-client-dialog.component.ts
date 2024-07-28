import { Component, Inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-client-dialog',
  templateUrl: './edit-client-dialog.component.html',
  styleUrl: './edit-client-dialog.component.css'
})
export class EditClientDialogComponent {

  client: Client;

  constructor(
    private clientService: ClientService,
    private dialogRef: MatDialogRef<EditClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { client: Client }
  ) {
    this.client = { ...data.client };
  }

  ngOnInit(): void {
  }

  onSaveClick(): void {
    this.dialogRef.close(this.client);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
