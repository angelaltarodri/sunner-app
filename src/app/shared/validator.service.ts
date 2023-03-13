import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  camposIguales ( campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value
      const pass2 = formGroup.get(campo2)?.value

      if(pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales: true});
        return { noIguales: true }
      }

      // hay que tener cuidado porque de tener otra validación el campo de password2, el setErrors(null) también lo va a eliminar
      formGroup.get(campo2)?.setErrors(null);

      return null;
    }
  }
}
