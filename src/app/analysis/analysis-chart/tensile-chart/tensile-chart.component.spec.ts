import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensileChartComponent } from './tensile-chart.component';

describe('TensileChartComponent', () => {
  let component: TensileChartComponent;
  let fixture: ComponentFixture<TensileChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensileChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TensileChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
