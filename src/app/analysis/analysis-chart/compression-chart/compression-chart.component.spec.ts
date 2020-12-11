import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressionChartComponent } from './compression-chart.component';

describe('CompressionChartComponent', () => {
  let component: CompressionChartComponent;
  let fixture: ComponentFixture<CompressionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
