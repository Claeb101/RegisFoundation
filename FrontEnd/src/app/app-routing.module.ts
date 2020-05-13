import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { LeadershipComponent } from './leadership/leadership.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'about', component: AboutComponent},
  { path: 'help', component: HelpComponent},
  { path: 'leadership', component: LeadershipComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
