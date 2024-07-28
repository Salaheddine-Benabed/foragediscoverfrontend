import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnel.service';
import { ProjetsService } from '../../services/projets.service';
import { Projets } from '../../models/projets';
import { Personnel } from '../../models/personnel';
import { StockService } from '../../services/stock.service';



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

  stockCount: number = 0;
  clientCount: number = 0;
  factureCount: number = 0;
  totalFactureAmount: number = 0;

  constructor(
    private projetsService: ProjetsService,
    private personelService:PersonnelService,
    private stockService: StockService,
    private clientService: StockService,
    private factureService: StockService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadStock();
    this.loadClients();
    this.loadFactures();
  }

  loadProjects(): void {
    this.projetsService.getAll().subscribe((projects: Projets[]) => {
      this.projectCount = projects.length;
      this.ongoingProjects = projects.filter(project => project.status === 'ongoing').length;
      this.completedProjects = projects.filter(project => project.status === 'done').length;
      this.totalCost = projects.reduce((sum, project) => sum + project.totalCost, 0);
    });
  
    this.personelService.getAll().subscribe((personels: Personnel[]) => {
      this.personnelCount = personels.length;
    });
  }
  
  loadStock(): void {
    this.stockService.getAll().subscribe((stocks: any[]) => {
      this.stockCount = stocks.length;
    });
  }
  
  loadClients(): void {
    this.clientService.getAll().subscribe((clients: any[]) => {
      this.clientCount = clients.length;
    });
  }
  
  loadFactures(): void {
    this.factureService.getAll().subscribe((factures: any[]) => {
      this.factureCount = factures.length;
      this.totalFactureAmount = factures.reduce((sum, facture) => sum + facture.amount, 0);
    });
  }

}
