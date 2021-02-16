import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  nombreLower = 'fernando';
  nombreUpper = 'FERNANDO';
  nombreCompleto = 'fErNando herRera';

  fecha: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
