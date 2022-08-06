import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBasedFormComponent } from './photo-based-form.component';

describe('PhotoBasedFormComponent', () => {
  let component: PhotoBasedFormComponent;
  let fixture: ComponentFixture<PhotoBasedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBasedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBasedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
