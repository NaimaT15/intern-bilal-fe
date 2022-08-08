import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesfFormComponent } from './categoriesf-form.component';

describe('CategoriesfFormComponent', () => {
  let component: CategoriesfFormComponent;
  let fixture: ComponentFixture<CategoriesfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesfFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
