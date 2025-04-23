import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingConfirmPage } from './booking-confirm.page';

describe('BookingConfirmPage', () => {
  let component: BookingConfirmPage;
  let fixture: ComponentFixture<BookingConfirmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
