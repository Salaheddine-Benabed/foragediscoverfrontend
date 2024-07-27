import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactureDialogComponent } from './add-facture-dialog.component';

describe('AddFactureDialogComponent', () => {
  let component: AddFactureDialogComponent;
  let fixture: ComponentFixture<AddFactureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFactureDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFactureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
