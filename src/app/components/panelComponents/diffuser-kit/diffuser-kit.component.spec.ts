import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffuserKitComponent } from './diffuser-kit.component';

describe('DiffuserKitComponent', () => {
  let component: DiffuserKitComponent;
  let fixture: ComponentFixture<DiffuserKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffuserKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffuserKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
