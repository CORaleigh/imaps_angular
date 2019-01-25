import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaasureToolComponent } from './meaasure-tool.component';

describe('MeaasureToolComponent', () => {
  let component: MeaasureToolComponent;
  let fixture: ComponentFixture<MeaasureToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaasureToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaasureToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
