import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextureComponent } from './add-texture.component';

describe('AddTextureComponent', () => {
  let component: AddTextureComponent;
  let fixture: ComponentFixture<AddTextureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTextureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
