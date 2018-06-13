import { Injectable } from '@angular/core';

/*
  Generated class for the PickColorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PickColorProvider {

  public color: string;

  constructor() {
    console.log('Hello PickColorProvider Provider');
  }

  // public pickColor(ref){
  //   this.color = ref;
  //   console.log('La couleur séléctionnée dans le provider: ', this.color);
  //   return this.color; 
  // }

  // public getColor() {
  //   console.log('Voici le getcolor: ', this.color);
  //   return this.color;
    
  // }



}
