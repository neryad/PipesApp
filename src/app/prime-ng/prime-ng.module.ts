import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
 ?PrimNg
 */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, CardModule],
  exports: [ButtonModule, CardModule],
})
export class PrimeNgModule {}
