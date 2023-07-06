import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GoogleFormService } from 'src/app/shared/googleForm/google-form.service';
import { ValidatorService } from 'src/app/shared/validator.service';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss'],
})
export class DialogFormComponent {
  dialogForm: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    email: [
      ,
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
    whatsapp: [, [Validators.required, Validators.minLength(9)]],
  });

  constructor(
    private validatorService: ValidatorService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private googleFormService: GoogleFormService,
    private snackBar: MatSnackBar
  ) {}

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

    const data = new FormData();
    data.append('Time', new Date().toString());
    data.append('Name', this.dialogForm.value.nombre);
    data.append('Email', this.dialogForm.value.email);
    data.append('Whatsapp', this.dialogForm.value.whatsapp);
    data.append('URL', 'dialog-form');

    // Invoca al servicio de Google
    this.googleFormService.submitFormDialog(data).subscribe(
      (response) => console.log('Success!', response),
      (error) => console.error('Error!', error.message)
    );

    // Resetea el form
    this.dialogForm.reset();
  }

  mostrarSnackBar(mensaje: string, boton: string) {
    this.snackBar.open(mensaje, boton, {
      duration: 2500,
      panelClass: ['energyform-snackbar'],
    });
  }
}
