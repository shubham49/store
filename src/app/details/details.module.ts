import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedModule } from '../shared/shared.module';

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
        component: DetailsComponent
      }
    ])
  ],
  declarations: [DetailsComponent],
  providers: []
})
export class DetailsModule {}
