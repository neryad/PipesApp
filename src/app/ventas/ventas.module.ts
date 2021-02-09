import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdernarComponent } from './pages/ordernar/ordernar.component';

@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdernarComponent,
  ],
  imports: [CommonModule],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdernarComponent,
  ],
})
export class VentasModule {}
