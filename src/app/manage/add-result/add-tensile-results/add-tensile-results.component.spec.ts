import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTensileResultsComponent } from './add-tensile-results.component';

describe('AddTensileResultsComponent', () => {
  let component: AddTensileResultsComponent;
  let fixture: ComponentFixture<AddTensileResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTensileResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTensileResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
