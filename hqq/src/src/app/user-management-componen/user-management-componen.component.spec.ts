import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementComponenComponent } from './user-management-componen.component';

describe('UserManagementComponenComponent', () => {
  let component: UserManagementComponenComponent;
  let fixture: ComponentFixture<UserManagementComponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementComponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
