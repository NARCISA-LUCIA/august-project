import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEditDialogComponent } from './feature-edit-dialog.component';

describe('FeatureEditDialogComponent', () => {
  let component: FeatureEditDialogComponent;
  let fixture: ComponentFixture<FeatureEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
