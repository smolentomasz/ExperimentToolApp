import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisResultsPageComponent } from './analysis-results-page.component';

describe('AnalysisResultsPageComponent', () => {
  let component: AnalysisResultsPageComponent;
  let fixture: ComponentFixture<AnalysisResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisResultsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
