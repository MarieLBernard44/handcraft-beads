import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickColorProvider } from '../../providers/pick-color/pick-color';
// import { PickColorProvider } from '../../providers/pick-color/pick-color';



/**
 * Generated class for the GrillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grille',
  templateUrl: 'grille.html',
})
export class GrillePage {

  public ref: string = "";
  public colonne: number;
  public ligne: number;
  public i: number;
  public j: number;
  public nouvelleLigne: any;
  public nouvellePerle: any;
  public grille: any;
  public type: string;
  public color: string;
  public couleur: string;
  public perle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pcp:PickColorProvider) {
    // this.color = this.pcp.color;
    // console.log('COULEUR: ', this.color)
  }


  ionViewDidLoad() {
    this.colonne = this.navParams.get('colonne');
    this.ligne = this.navParams.get('ligne');
    this.type = this.navParams.get('type');
    console.log(this.colonne, this.ligne, this.type);
  }

  ionViewWillEnter() {
    this.chargerGrille();
  }

  public chargerGrille() {
    this.grille = document.getElementById('grille');
    for (this.i=0; this.i<this.ligne; this.i++) {
      this.nouvelleLigne = document.createElement("div");
      this.nouvelleLigne.className="ligne row";
      console.log(this.nouvelleLigne);
      if (this.type === "Brickstitch / Peyote"){
        console.log("C'est un modèle Brickstitch !!!");
      } else {
        console.log("C'est tellement classique... zzzzzzz")
      }
      this.grille.appendChild(this.nouvelleLigne);
      for (this.j=0; this.j<this.colonne; this.j++) {
        this.nouvellePerle = document.createElement("div");
        this.nouvellePerle.className="perle";
        this.colorize();
        this.nouvelleLigne.appendChild(this.nouvellePerle);
      } 
    }
  }

  /* Je récupère la couleur sélectionnée dans le select-option */
  public pickColor(ref){
    this.color = ref;
    localStorage.setItem('Couleur', this.color);
    console.log('COULEUR: ', this.color);
  }
  
  // public getColorSelected(ref) {
  //   this.color = this.pcp.pickColor(ref);
  //   console.log('Ici j\'attrape la couleur...', this.color);
  // }

  /* Je colore la perle avec la couleur séléctionnée */
  public colorize() {
    this.couleur = localStorage.getItem('Couleur');
    console.log('COULEUR A UTILISER : ', this.couleur);
    this.nouvellePerle.addEventListener("click", function (e) {
      e.target.style.backgroundColor = this.couleur;
      console.log("J'ai coloré en rose", this.couleur);
    });
  }

  //   // this.nouvellePerle.onclick = function(e) {
  //   //   e.target.style.backgroundColor = this.color;
  //   // }
  // }

  public effacerPerle() {
    console.log("Perle(s) supprimée(s) !!");
  }

  public retourArriere() {
    console.log("Retour arrière !!");
  }

  public retourAvant() {
    console.log("Retour avant !!");
  }

  public download() {
    console.log("Téléchargement en pdf !!");
  }

}
