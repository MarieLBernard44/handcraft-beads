import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrillePage } from '../grille/grille';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ligne: number;
  public colonne: number;
  public type: string;

  constructor(
    public navCtrl: NavController
    ) { }


    public goToGrille() {
      this.navCtrl.push(GrillePage, 
      {   ligne: this.ligne,
          colonne: this.colonne,
          type: this.type
      });
    }

}
