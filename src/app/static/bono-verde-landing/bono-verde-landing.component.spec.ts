import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoVerdeLandingComponent } from './bono-verde-landing.component';

describe('BonoVerdeLandingComponent', () => {
  let component: BonoVerdeLandingComponent;
  let fixture: ComponentFixture<BonoVerdeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonoVerdeLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonoVerdeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
