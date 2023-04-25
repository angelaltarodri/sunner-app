import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator.service';

@Component({
  selector: 'app-save-energy-form',
  templateUrl: './save-energy-form.component.html',
  styleUrls: ['./save-energy-form.component.scss'],
})
export class SaveEnergyFormComponent {
  saveEnergyForm: FormGroup = this.fb.group({
    nombres: [, [Validators.required, Validators.minLength(3)]],
    email: [
      ,
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    celular: [, [Validators.required]],
    tipoVivienda: [, [Validators.required]],
    rangoPagoMensual: [, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  campoNoValido(campo: string) {
    return (
      this.saveEnergyForm.get(campo)?.invalid &&
      this.saveEnergyForm.get(campo)?.touched
    );
  }

  submitSaveEnergyForm() {
    console.log(this.saveEnergyForm.value);
    this.saveEnergyForm.markAllAsTouched();
  }
}
