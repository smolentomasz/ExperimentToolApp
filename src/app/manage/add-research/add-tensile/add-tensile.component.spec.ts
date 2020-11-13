import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTensileComponent } from './add-tensile.component';

describe('AddTensileComponent', () => {
  let component: AddTensileComponent;
  let fixture: ComponentFixture<AddTensileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTensileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTensileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
