import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExiptionComponent } from './exiption.component';

describe('ExiptionComponent', () => {
  let component: ExiptionComponent;
  let fixture: ComponentFixture<ExiptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExiptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExiptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
