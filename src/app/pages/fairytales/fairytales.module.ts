import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairytalesPageRoutingModule } from './fairytales-routing.module';

import { FairytalesPage } from './fairytales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FairytalesPageRoutingModule
  ],
  declarations: [FairytalesPage]
})
export class FairytalesPageModule {}
