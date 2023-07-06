import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MclComponent } from './mcl.component'

describe('LocationsComponent', () => {
  let component: MclComponent
  let fixture: ComponentFixture<MclComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MclComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MclComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
