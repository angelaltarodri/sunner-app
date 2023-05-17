import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss'],
})
export class GraficoComponent implements OnInit {
  timespanForm: FormGroup = this.fb.group({
    metric: ['hour', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {
    this.timespanForm.get('metric')!.valueChanges.subscribe((data) => {});
  }

  ngOnInit(): void {}
}
