import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePageComponent } from './manage-page.component';

describe('ManageComponent', () => {
  let component: ManagePageComponent;
  let fixture: ComponentFixture<ManagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
