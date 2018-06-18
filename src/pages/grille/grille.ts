import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickColorProvider } from '../../providers/pick-color/pick-color';
import { Perle } from '../../models/perle';
import { BeadSelect } from '../../models/beadsSelect';


@IonicPage()
@Component({
  selector: 'page-grille',
  templateUrl: 'grille.html',
})
export class GrillePage {

  public ref: string = "";
  public colonne: number;
  public ligne: number;
  public type: string;
  public color: string;
  public beads: Perle[];
  public beadsSelect: BeadSelect[];
  public select: string[] = [];

  public perles: Array<Array<Perle>>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private pcp : PickColorProvider
  ) { }

  
  ionViewDidLoad() {
    this.colonne = this.navParams.get('colonne');
    this.ligne = this.navParams.get('ligne');
    this.type = this.navParams.get('type');
    console.log(this.type);
    this.getPerlesRef();
    this.createGrille();
  }

  /* Je récupère les références de perles dans le mock */
  getPerlesRef(): void {
    this.beads = this.pcp.getPerlesRef();
    console.log(this.beads);

  }

  /* Je génère la grille à partir des données reçues: colonnes + lignes */
  public createGrille() {
    this.perles = new Array<Array<Perle>>();
    for(let i=0;i<this.colonne;i++){
      let colonne :Array<Perle> = new Array<Perle>();
      for(let j=0;j<this.ligne;j++){
        colonne.push(new Perle());
      }
      this.perles.push(colonne);
    }
  }

  /* Je récupère la couleur sélectionnée dans le select-option */
  public pickColor(this, ref){
    this.color = ref;
  }

  /* Onclick sur la div perle permettant d'appliquer la couleur récupérée grâce à la fonction pickColor() */
  public applyColor(perle: Perle){
    perle.color=this.color;
    this.select.push(this.color);
    console.log(this.select);

    let a = this.select.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      console.log(JSON.stringify(acc));
      return acc;
    }, {});
   
  }

  /* Fonction pour effacer une perle */
  public effacerPerle() {
    console.log("Perle(s) supprimée(s) !!");
    this.color = "0";
  }

  /* Retour sur la précédente action */
  public retourArriere() {
    console.log("Retour arrière !!");
  }

  /* Retour sur l'action suivante */
  public retourAvant() {
    console.log("Retour avant !!");
  }

  /* Téléchargement en format pdf */
  public download() {
    console.log("Téléchargement en pdf !!");
  }

}
