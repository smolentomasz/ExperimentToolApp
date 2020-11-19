import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileMaterialComponent } from './add-file-material.component';

describe('AddFileMaterialComponent', () => {
  let component: AddFileMaterialComponent;
  let fixture: ComponentFixture<AddFileMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFileMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFileMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
