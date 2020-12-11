import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompressionResultsComponent } from './add-compression-results.component';

describe('AddCompressionResultsComponent', () => {
  let component: AddCompressionResultsComponent;
  let fixture: ComponentFixture<AddCompressionResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompressionResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompressionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
