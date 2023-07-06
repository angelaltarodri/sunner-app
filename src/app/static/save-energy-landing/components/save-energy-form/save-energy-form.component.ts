import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GoogleFormService } from 'src/app/shared/googleForm/google-form.service';
import { ValidatorService } from 'src/app/shared/validator.service';
import { RangoPagoMensual } from '../../interfaces/rango-pago-mensual.interface';

@Component({
  selector: 'app-save-energy-form',
  templateUrl: './save-energy-form.component.html',
  styleUrls: ['./save-energy-form.component.scss'],
})
export class SaveEnergyFormComponent {
  @Output() energyForm = new EventEmitter();
  @Input() datosRangoPagoMensual: RangoPagoMensual[] = [];

  saveEnergyForm: FormGroup = this.fb.group({
    nombres: [, [Validators.required, Validators.minLength(3)]],
    email: [
      ,
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    celular: [, [Validators.required, Validators.minLength(9)]],
    tipoVivienda: [, [Validators.required]],
    rangoPagoMensual: [, [Validators.required]],
    aceptaInfo: [],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private googleFormService: GoogleFormService,
    private snackBar: MatSnackBar
  ) {}

  campoNoValido(campo: string) {
    return (
      this.saveEnergyForm.get(campo)?.invalid &&
      this.saveEnergyForm.get(campo)?.touched
    );
  }

  submitSaveEnergyForm() {
    // si el form es invalido se ejecuta el siguiente proceso:
    if (this.saveEnergyForm.invalid) {
      // se asegura que todos los campos se pongan como "tocados" por el usuario
      this.saveEnergyForm.markAllAsTouched();
      for (let propiedad in this.saveEnergyForm.value) {
        // si la propiedad no es valida, se ejecuta la adición de la clase que permite la animación de "shake"
        if (!this.saveEnergyForm.controls[propiedad].valid) {
          const elem = document.getElementsByClassName(`${propiedad}`)[0];
          elem.classList.add('no-valid-shake');
          // luego de medio segundo, que es lo que dura la animación, se quita la clase
          setTimeout(() => {
            elem.classList.remove('no-valid-shake');
          }, 500);
        }
      }
      // muestra el snackbar avisando al usuario que debe ingresar los datos correctos
      this.mostrarSnackBar(
        `Alguno de los datos ingresados es inválido.`,
        `Volver`
      );
      return;
    }

    // Lo que irá al forms en Google Sheets
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
    data.append(
      '¿Acepta info a su correo?',
      this.saveEnergyForm.value.aceptaInfo ? 'SI' : 'NO'
    );

    // Invoca al servicio de Google
    this.googleFormService.submitFormAhorra(data).subscribe(
      (response) => console.log('Success!', response),
      (error) => console.error('Error!', error.message)
    );

    // Envia la información al componente padre para su posterior uso.
    this.energyForm.emit(this.saveEnergyForm.value.rangoPagoMensual);

    // Resetea el form
    this.saveEnergyForm.reset();
  }

  mostrarSnackBar(mensaje: string, boton: string) {
    this.snackBar.open(mensaje, boton, {
      duration: 2500,
      panelClass: ['energyform-snackbar'],
    });
  }
}
