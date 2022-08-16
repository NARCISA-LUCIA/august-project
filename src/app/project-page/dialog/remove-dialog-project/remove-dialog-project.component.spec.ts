import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDialogProjectComponent } from './remove-dialog-project.component';

describe('RemoveDialogComponent', () => {
  let component: RemoveDialogProjectComponent;
  let fixture: ComponentFixture<RemoveDialogProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDialogProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDialogProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
