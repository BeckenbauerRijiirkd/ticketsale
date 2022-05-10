import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ticketsale';

  constructor() {}

  ngOnInit(): void {
    console.log('ONINIT');
    var menu_btn = document.querySelector('#menu-btn');
    var sidebar = document.querySelector('#sidebar');
    var container = document.querySelector('.my-container');
    sidebar?.classList.toggle('active-nav');
    container?.classList.toggle('active-cont');
    console.log(menu_btn);
    console.log('menu_btn');
    menu_btn?.addEventListener('click', () => {
      sidebar?.classList.toggle('active-nav');
      container?.classList.toggle('active-cont');
    });
  }
}
