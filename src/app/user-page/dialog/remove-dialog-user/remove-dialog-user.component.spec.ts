import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDialogUserComponent } from './remove-dialog-user.component';

describe('RemoveDialogUserComponent', () => {
  let component: RemoveDialogUserComponent;
  let fixture: ComponentFixture<RemoveDialogUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDialogUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
