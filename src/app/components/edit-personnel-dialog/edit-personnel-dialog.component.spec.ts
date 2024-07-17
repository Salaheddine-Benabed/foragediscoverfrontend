import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonnelDialogComponent } from './edit-personnel-dialog.component';

describe('EditPersonnelDialogComponent', () => {
  let component: EditPersonnelDialogComponent;
  let fixture: ComponentFixture<EditPersonnelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPersonnelDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPersonnelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
