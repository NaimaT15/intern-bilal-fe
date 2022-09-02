import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDonationComponent } from './detail-donation.component';

describe('DetailDonationComponent', () => {
  let component: DetailDonationComponent;
  let fixture: ComponentFixture<DetailDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
