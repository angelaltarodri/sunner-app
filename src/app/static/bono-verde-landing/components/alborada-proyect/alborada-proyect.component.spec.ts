import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlboradaProyectComponent } from './alborada-proyect.component';

describe('AlboradaProyectComponent', () => {
  let component: AlboradaProyectComponent;
  let fixture: ComponentFixture<AlboradaProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlboradaProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlboradaProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
