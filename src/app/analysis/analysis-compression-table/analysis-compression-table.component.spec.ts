import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCompressionTableComponent } from './analysis-compression-table.component';

describe('AnalysisCompressionTableComponent', () => {
  let component: AnalysisCompressionTableComponent;
  let fixture: ComponentFixture<AnalysisCompressionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisCompressionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisCompressionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
