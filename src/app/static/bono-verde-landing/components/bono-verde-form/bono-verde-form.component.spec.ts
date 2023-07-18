import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoVerdeFormComponent } from './bono-verde-form.component';

describe('BonoVerdeFormComponent', () => {
  let component: BonoVerdeFormComponent;
  let fixture: ComponentFixture<BonoVerdeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonoVerdeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonoVerdeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
