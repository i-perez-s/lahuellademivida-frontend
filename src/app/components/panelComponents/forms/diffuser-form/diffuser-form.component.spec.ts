import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffuserFormComponent } from './diffuser-form.component';

describe('DiffuserFormComponent', () => {
  let component: DiffuserFormComponent;
  let fixture: ComponentFixture<DiffuserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffuserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffuserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
