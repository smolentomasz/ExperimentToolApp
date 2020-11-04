import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalysisPageComponent } from './data-analysis-page.component';

describe('DataAnalysisPageComponent', () => {
  let component: DataAnalysisPageComponent;
  let fixture: ComponentFixture<DataAnalysisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnalysisPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnalysisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
