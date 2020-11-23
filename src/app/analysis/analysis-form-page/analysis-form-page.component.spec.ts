import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisFormPageComponent } from './analysis-form-page.component';

describe('AnalysisFormPageComponent', () => {
  let component: AnalysisFormPageComponent;
  let fixture: ComponentFixture<AnalysisFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
