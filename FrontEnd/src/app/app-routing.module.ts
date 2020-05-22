import { NotFoundComponent } from './not-found/not-found.component';
import { BioComponent } from './bio/bio.component';
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
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'donate', pathMatch: 'full', component: DonateComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'help', pathMatch: 'full', component: HelpComponent },
  { path: 'leadership', pathMatch: 'full', component: LeadershipComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
  { path: 'bio', pathMatch: 'full', component: BioComponent },
  { path: '404', pathMatch: 'full', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
