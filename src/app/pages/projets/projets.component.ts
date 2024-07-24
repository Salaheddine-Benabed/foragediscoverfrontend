import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Projets } from '../../models/projets';
import { ProjetsService } from '../../services/projets.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectDialogComponent } from '../../components/edit-project-dialog/edit-project-dialog.component';
import { AddProjectDialogComponent } from '../../components/add-project-dialog/add-project-dialog.component';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['projectId', 'client', 'projectName', 'startDate', 'endDate', 'status', 'totalCost', 'actions'];
  dataSource = new MatTableDataSource<Projets>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private projetsService: ProjetsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchProjets();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchProjets() {
    this.projetsService.getAll().subscribe(data => {
      // Handle potential null client
      this.dataSource.data = data.map(projet => {
        if (!projet.client) {
          projet.client = 'N/A'; // Default value for client if it's null
        }
        return projet;
      });
    });
  }

  addProject() {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Ensure client is initialized if it wasn't set
        if (!result.client) {
          result.client = '';
        }
        this.createProject(result);
      }
    });
  }

  createProject(project: Projets) {
    this.projetsService.save(project).subscribe(() => {
      console.log(project);
      this.fetchProjets();
    });
  }

  editProject(project: Projets) {
    const dialogRef = this.dialog.open(EditProjectDialogComponent, {
      width: '400px',
      data: { project }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateProject(result);
      }
    });
  }

  updateProject(project: Projets) {
    this.projetsService.update(project).subscribe(() => {
      this.fetchProjets();
    });
  }

  deleteProject(id: number) {
    this.projetsService.delete(id).subscribe(() => {
      this.fetchProjets();
    });
  }
}
