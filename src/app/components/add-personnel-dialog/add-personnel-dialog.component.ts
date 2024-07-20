import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-add-personnel-dialog',
  templateUrl: './add-personnel-dialog.component.html',
})
export class AddPersonnelDialogComponent implements OnInit {
  roles: Role[] = [];
  newPersonnel = {
    id: 0,
    name: '',
    department: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    roleId: null
  };

  constructor(
    public dialogRef: MatDialogRef<AddPersonnelDialogComponent>,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.fetchRoles();
  }

  fetchRoles() {
    this.roleService.getAllRoles().subscribe(
      (roles: Role[]) => {
        this.roles = roles;
      },
      error => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  onSaveClick(): void {
    this.dialogRef.close(this.newPersonnel);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
