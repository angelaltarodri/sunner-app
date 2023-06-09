import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ValidatorService } from 'src/app/shared/validator.service';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioInvalido: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    username  : ['', [ Validators.required, Validators.minLength(7)]],
    password  : ['', [ Validators.required, Validators.minLength(7)]],
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      username: '1626659',
      password: '1626659',
      password2: '1626659',
    })
    this.miFormulario.get('username')?.valueChanges
        .subscribe( (res) => {
          this.usuarioInvalido = false;
        })

    this.miFormulario.get('password')?.valueChanges
        .subscribe( (res) => {
          this.usuarioInvalido = false;
        })
  }

  login() {
    // ir al backend
    // reemplazar por una BD real (puede ser firebase)
    const { username, password } = this.miFormulario.value;
    const userData: Auth = {
      id: username,
      username: username,
      password: password
    }
    this.miFormulario.markAllAsTouched();

    this.authService.login(userData)
      .subscribe( res => {
        if(res.length){
          this.router.navigate(['./dashboard'])
        } else {
          this.usuarioInvalido = true;
        }
      })
  }

  campoNoValido( campo : string) {
    return this.miFormulario.get( campo )?.invalid && this.miFormulario.get( campo )?.touched;
  }
}
