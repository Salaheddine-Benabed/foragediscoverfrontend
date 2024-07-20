import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-edit-personnel-dialog',
  templateUrl: './edit-personnel-dialog.component.html',
})
export class EditPersonnelDialogComponent implements OnInit {
  roles: Role[] = [];
  selectedRoleId!: number;
  roleName!: string;

  constructor(
    public dialogRef: MatDialogRef<EditPersonnelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.fetchRoles();
    // Initialize selectedRoleId with the current roleId of the person
    if (this.data.person.roleId) {
      this.selectedRoleId = this.data.person.roleId;
      this.roleName = this.getRoleName(this.data.person.roleId);
      console.log('Selected role ID set to:', this.selectedRoleId); // Debug log
    } else {
      console.warn('No role ID found for the person'); // Debug log
    }
  }

  fetchRoles() {
    this.roleService.getAllRoles().subscribe(
      (roles: Role[]) => {
        this.roles = roles;
        console.log('Roles fetched:', this.roles); // Debug log
      },
      error => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  getRoleName(roleId: number): string {
    const role = this.roles.find(role => role.id === roleId);
    return role ? role.name : 'Unknown Role';
  }

  onSaveClick(): void {
    // Update the selected role ID in the data object
    this.data.person.roleId = this.selectedRoleId;
    console.log('Saving person with role ID:', this.data.person.roleId); // Debug log
    this.dialogRef.close(this.data.person);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
