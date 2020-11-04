import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexturePageComponent } from './texture-page.component';

describe('TexturePageComponent', () => {
  let component: TexturePageComponent;
  let fixture: ComponentFixture<TexturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexturePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
