import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, switchMap } from 'rxjs';
import { GoogleFormService } from 'src/app/shared/googleForm/google-form.service';
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
    private validatorService: ValidatorService,
    private googleFormService: GoogleFormService
  ) {}

  campoNoValido(campo: string) {
    return (
      this.saveEnergyForm.get(campo)?.invalid &&
      this.saveEnergyForm.get(campo)?.touched
    );
  }

  submitSaveEnergyForm() {
    this.saveEnergyForm.markAllAsTouched();

    const data = new FormData();
    data.append('Time', new Date().toString());
    data.append('Name', this.saveEnergyForm.value.nombres);
    data.append('Email', this.saveEnergyForm.value.email);
    data.append('Phone', this.saveEnergyForm.value.celular);
    data.append('URL', window.location.href);
    data.append('Form', 'form_lead');
    data.append(
      'Rango de Pago Mensual',
      this.saveEnergyForm.value.rangoPagoMensual
    );
    data.append('Tipo de Vivienda', this.saveEnergyForm.value.tipoVivienda);
    this.googleFormService
      .submitForm(data)
      .pipe(switchMap((response) => of(response)))
      .subscribe(
        (response) => console.log('Success!', response),
        (error) => console.error('Error!', error.message)
      );
  }
}
