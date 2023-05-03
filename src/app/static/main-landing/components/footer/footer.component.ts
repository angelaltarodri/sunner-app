import { Component } from '@angular/core';

type RRSSKeys = 'facebook' | 'instagram' | 'linkedin' | 'youtube';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  RRSS: Record<RRSSKeys, string> = {
    facebook: 'https://www.facebook.com/sunnerperu',
    instagram: 'https://www.instagram.com/sunnerperu/',
    linkedin: 'https://www.linkedin.com/company/sunnerperu/',
    youtube: '',
  };

  openRRSS(rrss: RRSSKeys) {
    window.open(this.RRSS[rrss]);
  }
}
