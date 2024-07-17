import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonnelDialogComponent } from './add-personnel-dialog.component';

describe('AddPersonnelDialogComponent', () => {
  let component: AddPersonnelDialogComponent;
  let fixture: ComponentFixture<AddPersonnelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPersonnelDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPersonnelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
