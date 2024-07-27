import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/client';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../../services/client.service';
import { MatPaginator } from '@angular/material/paginator';
import { AddClientDialogComponent } from '../../components/add-client-dialog/add-client-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDialogComponent } from '../../components/edit-client-dialog/edit-client-dialog.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['clientId', 'name','contactInfo', 'address', 'phoneNumber', 'email', 'actions'];
  dataSource = new MatTableDataSource<Client>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private clientService:ClientService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllClients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  addClient() {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createPersonnel(result);
      }
    });
  }

  createPersonnel(client: Client) {
    this.clientService.save(client).subscribe(() => {
      this.getAllClients();
    });
  }

  editClient(client: Client) {
    const dialogRef = this.dialog.open(EditClientDialogComponent, {
      width: '300px',
      data: { client }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateClient(result);
      }
    });
  }

  updateClient(client: Client) {
    this.clientService.update(client).subscribe(() => {
      this.getAllClients();
    });
  }

  deleteClient(id: number) {
    this.clientService.delete(id).subscribe(() => {
      this.getAllClients();
    });
  }

  getAllClients() {
    this.clientService.fetchClients().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
