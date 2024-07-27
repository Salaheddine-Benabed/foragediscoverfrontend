import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Factures } from '../../models/factures';
import { FacturesService } from '../../services/factures.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFactureDialogComponent } from '../../components/add-facture-dialog/add-facture-dialog.component';
import { EditFactureDialogComponent } from '../../components/edit-facture-dialog/edit-facture-dialog.component';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['paymentId','projectName','paymentDate', 'amount', 'paymentStatus','actions'];
  dataSource = new MatTableDataSource<Factures>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private facturesService: FacturesService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.fetchFactures();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchFactures() {
    this.facturesService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  createFacture(facture: Factures) {
    this.facturesService.save(facture).subscribe(() => {
      this.fetchFactures();
    });
  }

  addFacture() {
    const dialogRef = this.dialog.open(AddFactureDialogComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createFacture(result);
      }
    });
  }

  deleteFacture(paymentId: number) {
    this.facturesService.delete(paymentId).subscribe(() => {
      this.fetchFactures();
    });
  }

  editFacture(facture: Factures) {
    const dialogRef = this.dialog.open(EditFactureDialogComponent, {
      width: '350px',
      data:  facture 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.facturesService.update(result).subscribe(() => {
          this.fetchFactures();
        });
      }
    });
  }


}
