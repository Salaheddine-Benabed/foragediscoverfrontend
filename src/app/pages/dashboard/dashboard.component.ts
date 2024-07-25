import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnel.service';
import { ProjetsService } from '../../services/projets.service';
import { Projets } from '../../models/projets';
import { Personnel } from '../../models/personnel';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  personnelCount: number = 0;
  projectCount: number = 0;
  ongoingProjects: number = 0;
  completedProjects: number = 0;
  totalCost: number = 0;

  constructor(private projetsService: ProjetsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projetsService.getAll().subscribe((projects: Projets[]) => {
      this.projectCount = projects.length;
      this.ongoingProjects = projects.filter(project => project.status === 'Ongoing').length;
      this.completedProjects = projects.filter(project => project.status === 'Completed').length;
      this.totalCost = projects.reduce((sum, project) => sum + project.totalCost, 0);
    });
  }
}
