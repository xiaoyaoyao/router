/**
 * Created by mengzhiyao on 2016/8/2.
 */
import {Injectable} from '@angular/core';
export class Hero{
  constructor(public id:number,public name:string){}
}
let HEROES=[
  new Hero(11,"Mr.Nice1"),
  new Hero(12,"Mr.Nice2"),
  new Hero(13,"Mr.Nice3"),
  new Hero(14,"Mr.Nice4"),
  new Hero(15,"Mr.Nice5"),
  new Hero(16,"Mr.Nice6")
]

let heroesPromise=Promise.resolve(HEROES);

@Injectable()
export class HeroService{
  getHeroes(){return heroesPromise;}

  getHero(id:number|string){
    return heroesPromise
      .then(heroes=>heroes.find(hero=>hero.id===+id));
  }
}
