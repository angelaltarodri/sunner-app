import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailJSService {
  sendFeedback({
    formulario,
    nombres,
    correo,
    telefono,
    detalles,
  }: {
    formulario: string;
    nombres: string;
    correo: string;
    telefono: string;
    detalles: string;
  }) {
    emailjs
      .send(
        'service_z5k82z8',
        'template_uht34cd',
        {
          formulario,
          nombre: nombres,
          email: correo,
          whatsapp: telefono,
          detalles,
        },
        {
          publicKey: 'Z7BEvM6ZQwVmnXHX2',
        }
      )
      .then((res) => {
        console.log('Email successfully sent!');
      })
      .catch((err) =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }
}
