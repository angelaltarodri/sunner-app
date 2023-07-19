import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleFormService {
  private scriptURLAhorra =
    'https://script.google.com/macros/s/AKfycbzT6h24i37UikCt3fVJ5HI-lsnooyaA-yAaYr4zF1fDAjXEij6tWTKqzHp-TWnD1A/exec';
  private scriptURLDialog =
    'https://script.google.com/macros/s/AKfycby24-kVZGsGxNVQOdTqGXyTAEsMd7cRIApyt2rzk6pde_PPd_4yv0I6C8qzWy-3-UU8/exec';

  private scriptURLVivienda =
    'https://script.google.com/macros/s/AKfycbxqh1zCSqkwalU2fzQaQ2CP9CEszoPsgHLAb6Q3AQcAmAFRnZeUhOehRIN8ZMhwpI5S/exec';

  submitFormAhorra(data: FormData): Observable<AxiosResponse> {
    return from(
      axios
        .post(this.scriptURLAhorra, data)
        .then((response) => response)
        .catch((error) => {
          console.error('Error!', error.message);
          return error;
        })
    );
  }

  submitFormDialog(data: FormData): Observable<AxiosResponse> {
    return from(
      axios
        .post(this.scriptURLDialog, data)
        .then((response) => response)
        .catch((error) => {
          console.error('Error!', error.message);
          return error;
        })
    );
  }

  submitFormVivienda(data: FormData): Observable<AxiosResponse> {
    return from(
      axios
        .post(this.scriptURLVivienda, data)
        .then((response) => response)
        .catch((error) => {
          console.error('Error!', error.message);
          return error;
        })
    );
  }
}
