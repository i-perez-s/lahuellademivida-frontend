import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilFormComponent } from './oil-form.component';

describe('OilFormComponent', () => {
  let component: OilFormComponent;
  let fixture: ComponentFixture<OilFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
