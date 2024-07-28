import { Component, Inject } from '@angular/core';
import { ProjetsService } from '../../services/projets.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Projets } from '../../models/projets';

@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
  styleUrl: './edit-project-dialog.component.css'
})
export class EditProjectDialogComponent {

  project:Projets;
  constructor(
    private dialogRef: MatDialogRef<EditProjectDialogComponent>, 
    private projectService: ProjetsService,
    @Inject(MAT_DIALOG_DATA) public data: { project: Projets }
  ) {
    this.project = { ...data.project };
  }

  ngOnInit(): void {
  }

  onSaveClick(): void {
    this.dialogRef.close(this.project);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
