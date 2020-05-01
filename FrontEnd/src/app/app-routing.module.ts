import { LeadershipComponent } from './leadership/leadership.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'about', component: AboutComponent},
  { path: 'help', component: HelpComponent},
  { path: 'leadership', component: LeadershipComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
