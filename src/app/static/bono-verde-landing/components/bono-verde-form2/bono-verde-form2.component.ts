import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GoogleFormService } from 'src/app/shared/googleForm/google-form.service';
import { ValidatorService } from 'src/app/shared/validator.service';
import { LoadingDialogComponent } from 'src/app/static/residencial-landing/components/loading-dialog/loading-dialog.component';
import { RangoPagoMensual } from 'src/app/static/save-energy-landing/interfaces/rango-pago-mensual.interface';
import { EmailJSService } from 'src/services/email-js.service';

@Component({
  selector: 'app-bono-verde-form2',
  templateUrl: './bono-verde-form2.component.html',
  styleUrls: ['./bono-verde-form2.component.scss'],
})
export class BonoVerdeForm2Component {
  bonoVerdeForm: FormGroup = this.fb.group({
    nombres: [, [Validators.required, Validators.minLength(3)]],
    correo: [
      ,
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    telefono: [, [Validators.required, Validators.minLength(7)]],
    cargo: ['-', [Validators.required]],
    constructora: ['-', [Validators.required]],
    proyectoInmobiliario: ['-', [Validators.required]],
    potenciaNecesaria: ['-'],
    detalles: [''],
    aceptaInfo: [],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private googleFormService: GoogleFormService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private emailJSService: EmailJSService
  ) {}

  campoNoValido(campo: string) {
    return (
      this.bonoVerdeForm.get(campo)?.invalid &&
      this.bonoVerdeForm.get(campo)?.touched
    );
  }

  submitBonoVerdeForm() {
    // si el form es invalido se ejecuta el siguiente proceso:
    if (this.bonoVerdeForm.invalid) {
      // se asegura que todos los campos se pongan como "tocados" por el usuario
      this.bonoVerdeForm.markAllAsTouched();
      for (let propiedad in this.bonoVerdeForm.value) {
        // si la propiedad no es valida, se ejecuta la adición de la clase que permite la animación de "shake"
        if (!this.bonoVerdeForm.controls[propiedad].valid) {
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
    data.append('Name', this.bonoVerdeForm.value.nombres);
    data.append('Email', this.bonoVerdeForm.value.correo);
    data.append('Phone', this.bonoVerdeForm.value.telefono);
    data.append('Detalles', this.bonoVerdeForm.value.detalles);
    data.append('URL', window.location.href);
    data.append('Form', 'form_lead');
    data.append('Cargo', this.bonoVerdeForm.value.cargo);
    data.append('Constructora', this.bonoVerdeForm.value.constructora);
    data.append(
      'Proyecto Inmobiliario',
      this.bonoVerdeForm.value.proyectoInmobiliario
    );

    // TODO: DEMAS CAMPOS

    data.append(
      'Potencia Necesaria',
      this.bonoVerdeForm.value.potenciaNecesaria
    );
    data.append(
      '¿Acepta info a su correo?',
      this.bonoVerdeForm.value.aceptaInfo ? 'SI' : 'NO'
    );

    const loading = this.dialog.open(LoadingDialogComponent, {
      maxWidth: '360px',
      panelClass: 'main-landing',
      width: '90vw',
      disableClose: true,
    });

    // Invoca al servicio de Google
    this.googleFormService.submitFormVivienda(data).subscribe({
      next: (response) => {
        console.log('Success!', response);
        this.router.navigateByUrl('/bono-verde/thanks');
        loading.close();
      },
      error: (error) => {
        console.error('Error!', error.message);
        loading.close();
      },
    });

    // Resetea el form
    // this.bonoVerdeForm.reset();

    this.emailJSService.sendFeedback({
      formulario: 'Vivienda Form',
      nombres: this.bonoVerdeForm.value.nombres,
      correo: this.bonoVerdeForm.value.correo,
      telefono: this.bonoVerdeForm.value.telefono,
      detalles: this.bonoVerdeForm.value.detalles,
      pagoActual: '-'
    });
  }

  mostrarSnackBar(mensaje: string, boton: string) {
    this.snackBar.open(mensaje, boton, {
      duration: 2500,
      panelClass: ['energyform-snackbar'],
    });
  }
}
