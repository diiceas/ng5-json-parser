import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fti2018Component } from './fti-2018.component';

describe('Fti2018Component', () => {
  let component: Fti2018Component;
  let fixture: ComponentFixture<Fti2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fti2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fti2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
