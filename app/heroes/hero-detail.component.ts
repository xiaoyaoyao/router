/**
 * Created by mengzhiyao on 2016/8/2.
 */
import {Component,OnInit,OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

import {Hero,HeroService} from './hero.service';

@Component({
  template:`
<h2>HEROES</h2>
<div *ngIf="hero">
   <h3>"{{hero.name}}"</h3>
   <div>
    <label>Id:</label>{{hero.id}}</div>
    <div>
      <label>Name:</label>
      <input [(ngModel)]="hero.name" placeholder="name" />
   </div>
   <p>
      <button (click)="gotoHeroes()">Back</button>
</p>
</div>
`})
export class HeroDetailComponent implements OnInit,OnDestroy{
  hero:Hero;
  private sub:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:HeroService){}
    ngOnInit(){
      this.sub=this.route.params.subscribe(params=>{
        let id=+params['id'] //convert string 'id' to a number
        this.service.getHero(id).then(hero=>this.hero=hero);
      });
    }
    ngOnDestroy(){
      this.sub.unsubscribe();
    }
    gotoHeroes(){
      let heroId=this.hero?this.hero.id:null;
      this.router.navigate(['/heroes',{id:heroId,foo:'foo'}])
    }

}
