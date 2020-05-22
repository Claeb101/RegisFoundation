import { TelMailPipe } from './footer/tel_mail_pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HelpComponent,
    AboutComponent,
    DonateComponent,
    FooterComponent,
    LeadershipComponent,
    TelMailPipe,
    ContactComponent,
    BioComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass:HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
