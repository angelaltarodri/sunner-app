import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GoogleFormService } from 'src/app/shared/googleForm/google-form.service';
import { ValidatorService } from 'src/app/shared/validator.service';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';
import { EmailJSService } from 'src/services/email-js.service';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss'],
})
export class FaqFormComponent {
  idSelected: number = 10;
  number: number = 2018.70;
  optionsPagoActual: { id: number; text: string;  amount: number}[] = [
    {
      id: 1,
      text: "No tengo luz",
      amount: 6454.38
    },
    {
      id: 2,
      text: "S/0 a S/300",
      amount: 2298.22
    },
    {
      id: 3,
      text: "S/300 a s/650",
      amount: 2298.22
    },
    {
      id: 4,
      text: "S/650 a S/1000",
      amount: 3244.62
    },
    {
      id: 5,
      text: "S/1000 a S/1350",
      amount: 4376.3
    },
    {
      id: 6,
      text: "S/1350 a S/1700",
      amount: 5415.34
    },
    {
      id: 7,
      text: "S/1700 a más",
      amount: 6454.38
    },
  ]

  isCheckedMap: { [key: string]: boolean } = {};

  closeRadio(event: any, id: string) {
    this.isCheckedMap[id] = !this.isCheckedMap[id];
  }

  dialogForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    whatsapp: ['', [Validators.required, Validators.minLength(9)]],
    pagoActual: ['S/300 a s/650', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private googleFormService: GoogleFormService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
    private emailJSService: EmailJSService
  ) {
    this.dialogForm.get('pagoActual')?.valueChanges.subscribe({
      next: (value) => {
        this.number = this.optionsPagoActual.find((opcion) => opcion.text === value)?.amount!;
        this.idSelected = this.optionsPagoActual.find((opcion) => opcion.text === value)?.id!;
      }
    })
  }

  campoNoValido(campo: string) {
    return (
      this.dialogForm.get(campo)?.invalid && this.dialogForm.get(campo)?.touched
    );
  }

  submitDialogForm() {
    // si el form es invalido se ejecuta el siguiente proceso:
    if (this.dialogForm.invalid) {
      // se asegura que todos los campos se pongan como "tocados" por el usuario
      this.dialogForm.markAllAsTouched();
      for (let propiedad in this.dialogForm.value) {
        // si la propiedad no es valida, se ejecuta la adición de la clase que permite la animación de "shake"
        if (!this.dialogForm.controls[propiedad].valid) {
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

    const loading = this.dialog.open(LoadingDialogComponent, {
      maxWidth: '360px',
      panelClass: 'main-landing',
      width: '90vw',
      disableClose: true,
    });

    const data = new FormData();
    data.append('Time', new Date().toString());
    data.append('Name', this.dialogForm.value.nombre);
    data.append('Email', this.dialogForm.value.email);
    data.append('Whatsapp', this.dialogForm.value.whatsapp);
    data.append('PagoActual', this.dialogForm.value.pagoActual);
    data.append('URL', 'dialog-form');

    // Invoca al servicio de Google
    this.googleFormService.submitFormDialog(data).subscribe({
      next: (response) => {
        console.log('Success!', response);
        this.router.navigateByUrl('/thanks');
        loading.close();
      },
      error: (error) => {
        console.error('Error!', error.message);
        loading.close();
      },
    });

    // Resetea el form
    // this.dialogForm.reset();
    this.emailJSService.sendFeedback({
      formulario: 'Residencial Form',
      nombres: this.dialogForm.value.nombre,
      correo: this.dialogForm.value.email,
      telefono: this.dialogForm.value.whatsapp,
      detalles: '-',
      pagoActual: this.dialogForm.value.pagoActual
    });
  }

  mostrarSnackBar(mensaje: string, boton: string) {
    this.snackBar.open(mensaje, boton, {
      duration: 2500,
      panelClass: ['energyform-snackbar'],
    });
  }
}
