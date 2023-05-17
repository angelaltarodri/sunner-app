import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMesesComponent } from './grafico-meses.component';

describe('GraficoMesesComponent', () => {
  let component: GraficoMesesComponent;
  let fixture: ComponentFixture<GraficoMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoMesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
