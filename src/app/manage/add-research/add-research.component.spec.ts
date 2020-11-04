import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResearchComponent } from './add-research.component';

describe('AddResearchComponent', () => {
  let component: AddResearchComponent;
  let fixture: ComponentFixture<AddResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
