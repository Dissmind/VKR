import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNutritionComponent } from './main-nutrition.component';

describe('MainNutritionComponent', () => {
  let component: MainNutritionComponent;
  let fixture: ComponentFixture<MainNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
