import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewerComponent } from './components/viewer/viewer.component';
import { RouteGuardService } from './services/route-guard.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';

export const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [RouteGuardService] },
  { path: 'viewer', component: ViewerComponent, canActivate: [RouteGuardService] },
  { path: 'charts', component: ChartsComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
