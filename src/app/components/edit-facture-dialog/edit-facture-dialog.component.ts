import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../services/client.service';
import { ProjetsService } from '../../services/projets.service';
import { Projets } from '../../models/projets';
import { Factures } from '../../models/factures';

@Component({
  selector: 'app-edit-facture-dialog',
  templateUrl: './edit-facture-dialog.component.html',
  styleUrls: ['./edit-facture-dialog.component.css']
})
export class EditFactureDialogComponent implements OnInit {


  projects: Projets[] = [];

  constructor(
    private dialogRef: MatDialogRef<EditFactureDialogComponent>, 
    private projectService: ProjetsService,
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public facture: Factures
  ) {}

  ngOnInit(): void {
    this.projectService.getAll().subscribe((data: Projets[]) => {
      this.projects = data;
    });

    // Fetch the facture details if needed
    // this.factureService.getFactureById(id).subscribe((data: Factures) => {
    //   this.facture = data;
    // });
  }

  onSaveClick(): void {
    this.dialogRef.close(this.facture);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}