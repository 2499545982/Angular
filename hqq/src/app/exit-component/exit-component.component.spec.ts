import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitComponentComponent } from './exit-component.component';

describe('ExitComponentComponent', () => {
  let component: ExitComponentComponent;
  let fixture: ComponentFixture<ExitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
