import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourMaintenanceComponent } from './retour-maintenance.component';

describe('RetourMaintenanceComponent', () => {
  let component: RetourMaintenanceComponent;
  let fixture: ComponentFixture<RetourMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetourMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
