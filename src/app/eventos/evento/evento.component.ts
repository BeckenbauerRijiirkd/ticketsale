import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  private urlOriginal = 'https://ticketsale.vercel.app/assets/img/Trance-Music.jpg';

  @Input() nome = '';

  @Input() set url(url: string) {
    if (API.startsWith('http:')) {
      this.urlOriginal = url;
    } //else {
    //   this.urlOriginal = `${API}/imgs/${url}`;
    // }
  }

  get url():string {
    return this.urlOriginal;
  }

  constructor() {}

  ngOnInit(): void {}
}
