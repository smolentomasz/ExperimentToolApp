import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisChartComponent } from './analysis-chart.component';

describe('AnalysisChartComponent', () => {
  let component: AnalysisChartComponent;
  let fixture: ComponentFixture<AnalysisChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
