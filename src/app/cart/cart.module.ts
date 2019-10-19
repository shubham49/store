import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent
      }
    ])
  ],
  declarations: [CartComponent],
  providers: []
})
export class CartModule {}
