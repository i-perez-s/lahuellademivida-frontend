import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffusersComponent } from './diffusers.component';

describe('DiffusersComponent', () => {
  let component: DiffusersComponent;
  let fixture: ComponentFixture<DiffusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
