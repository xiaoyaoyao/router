/**
 * Created by mengzhiyao on 2016/8/2.
 */
import {RouterConfig} from "@angular/router";
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
 export const heroesRoutes:RouterConfig=[
   {path:'heroes',component:HeroListComponent},
   {path:'hero/:id',component:HeroDetailComponent}
 ]
