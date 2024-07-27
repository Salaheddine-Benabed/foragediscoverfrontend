import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { ProjetsService } from '../../services/projets.service';
import { Projets } from '../../models/projets';

@Component({
  selector: 'app-add-facture-dialog',
  templateUrl: './add-facture-dialog.component.html',
  styleUrls: ['./add-facture-dialog.component.css']
})
export class AddFactureDialogComponent implements OnInit {

  facture = {
    paymentId: '',
    clientId: '',
    paymentDate: new Date(),
    amount: 0,
    paymentStatus: '',
    projectId: ''
  };

  projects: Projets[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddFactureDialogComponent>, 
    private projectService: ProjetsService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.projectService.getAll().subscribe((data: Projets[]) => {
      this.projects = data;
    });
  }

  onSaveClick(): void {
    this.dialogRef.close(this.facture);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}