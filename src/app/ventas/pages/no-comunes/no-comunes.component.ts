import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  constructor() {}
  nombre: string = 'Fernando';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  ngOnInit(): void {}
}
