/**
 * Created by mengzhiyao on 2016/8/2.
 */
import {provideRouter,RouterConfig} from '@angular/router';
import {heroesRoutes} from './heroes/heroes.routes';

export const routes:RouterConfig=[
  ...heroesRoutes
];
export const appRouterProviders=[
  provideRouter(routes)
]
