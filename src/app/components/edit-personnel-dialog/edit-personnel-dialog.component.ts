import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personnel } from '../../models/personnel';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-edit-personnel-dialog',
  templateUrl: './edit-personnel-dialog.component.html',
})
export class EditPersonnelDialogComponent implements OnInit {
  roles: Role[] = [];
  selectedRoleId!: number;

  constructor(
    public dialogRef: MatDialogRef<EditPersonnelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.fetchRoles();
    // Check if this.data.person.role is defined before setting selectedRoleId
    if (this.data.person.role && this.data.person.role.id) {
      this.selectedRoleId = this.data.person.role.id;
    }
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
    // Update the selected role ID in the data object
    this.data.person.roleId = this.selectedRoleId.toString(); // Assuming roleName is a string field
    this.dialogRef.close(this.data.person);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
