import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrillePage } from './grille';

@NgModule({
  declarations: [
    GrillePage,
  ],
  imports: [
    IonicPageModule.forChild(GrillePage),
  ],
})
export class GrillePageModule {}
