import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffuserComponent } from './diffuser.component';

describe('DiffuserComponent', () => {
  let component: DiffuserComponent;
  let fixture: ComponentFixture<DiffuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
