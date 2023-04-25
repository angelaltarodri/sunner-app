import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleFormService {
  private scriptURL =
    'https://script.google.com/macros/s/AKfycbzT6h24i37UikCt3fVJ5HI-lsnooyaA-yAaYr4zF1fDAjXEij6tWTKqzHp-TWnD1A/exec';

  submitForm(data: FormData): Observable<AxiosResponse> {
    return from(
      axios
        .post(this.scriptURL, data)
        .then((response) => response)
        .catch((error) => {
          console.error('Error!', error.message);
          return error;
        })
    );
  }
}
