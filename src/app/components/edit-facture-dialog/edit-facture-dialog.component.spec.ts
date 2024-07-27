import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFactureDialogComponent } from './edit-facture-dialog.component';

describe('EditFactureDialogComponent', () => {
  let component: EditFactureDialogComponent;
  let fixture: ComponentFixture<EditFactureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFactureDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFactureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
