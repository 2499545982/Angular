import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementComponentComponent } from './management-component.component';

describe('ManagementComponentComponent', () => {
  let component: ManagementComponentComponent;
  let fixture: ComponentFixture<ManagementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
