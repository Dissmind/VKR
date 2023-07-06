import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGiftCardComponent } from './main-gift-card.component';

describe('MainGiftCardComponent', () => {
  let component: MainGiftCardComponent;
  let fixture: ComponentFixture<MainGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGiftCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
