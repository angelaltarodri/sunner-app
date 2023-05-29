import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMasDialogComponent } from './ver-mas-dialog.component';

describe('VerMasDialogComponent', () => {
  let component: VerMasDialogComponent;
  let fixture: ComponentFixture<VerMasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMasDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
