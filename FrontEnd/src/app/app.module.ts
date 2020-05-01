import { TelMailPipe } from './footer/tel_mail_pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { LeadershipComponent } from './leadership/leadership.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    HomeComponent,
    HelpComponent,
    AboutComponent,
    DonateComponent,
    FooterComponent,
    LeadershipComponent,
    TelMailPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
