import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent {

  newProject = {
    projectId: '',
    client: '',
    projectName: '',
    startDate: '',
    endDate: '',
    status: '',
    totalCost: ''
  };

  constructor(private dialogRef: MatDialogRef<AddProjectDialogComponent>) {}

  onSaveClick(): void {
    this.dialogRef.close(this.newProject);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
