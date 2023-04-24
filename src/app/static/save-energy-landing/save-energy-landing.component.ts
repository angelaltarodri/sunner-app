import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-energy-landing',
  templateUrl: './save-energy-landing.component.html',
  styleUrls: ['./save-energy-landing.component.scss'],
})
export class SaveEnergyLandingComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    if (document.referrer) console.log(document.referrer);
  }
}
