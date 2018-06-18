import { Injectable } from '@angular/core';
import { Perle } from '../../models/perle';
import { PERLES } from '../../mock/perles';

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

  getPerlesRef(): Perle[] {
    return PERLES;
  }


}
