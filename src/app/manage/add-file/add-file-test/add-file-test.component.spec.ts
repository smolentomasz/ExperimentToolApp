import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileTestComponent } from './add-file-test.component';

describe('AddFileTestComponent', () => {
  let component: AddFileTestComponent;
  let fixture: ComponentFixture<AddFileTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFileTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFileTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
