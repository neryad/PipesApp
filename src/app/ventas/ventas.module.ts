import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdernarComponent } from './pages/ordernar/ordernar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdernarComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdernarComponent,
  ],
})
export class VentasModule {}
