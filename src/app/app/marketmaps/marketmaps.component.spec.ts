import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketmapsComponent } from './marketmaps.component';

describe('MarketmapsComponent', () => {
  let component: MarketmapsComponent;
  let fixture: ComponentFixture<MarketmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
