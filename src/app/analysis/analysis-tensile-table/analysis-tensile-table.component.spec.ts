import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTensileTableComponent } from './analysis-tensile-table.component';

describe('AnalysisTensileTableComponent', () => {
  let component: AnalysisTensileTableComponent;
  let fixture: ComponentFixture<AnalysisTensileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisTensileTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTensileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
