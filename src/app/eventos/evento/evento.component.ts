import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:8080';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  private urlOriginal = '';

  @Input() nome = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url():string {
    return this.urlOriginal;
  }

  constructor() {}

  ngOnInit(): void {}
}
