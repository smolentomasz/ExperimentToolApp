import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompressionComponent } from './add-compression.component';

describe('AddCompressionComponent', () => {
  let component: AddCompressionComponent;
  let fixture: ComponentFixture<AddCompressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
