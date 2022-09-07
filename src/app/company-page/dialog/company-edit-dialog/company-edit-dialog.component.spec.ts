import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditDialogComponent } from './company-edit-dialog.component';

describe('CompanyEditDialogComponent', () => {
  let component: CompanyEditDialogComponent;
  let fixture: ComponentFixture<CompanyEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
