import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit{

  newProject = {
    projectId: '',
    clientId: '',
    projectName: '',
    startDate: '',
    endDate: '',
    status: '',
    totalCost: ''
  };

  clients : Client[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddProjectDialogComponent>,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.fetchClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }
  onSaveClick(): void {
    this.dialogRef.close(this.newProject);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
