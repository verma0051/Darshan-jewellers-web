import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BanglesComponent } from './bangles/bangles.component';
import { RingComponent } from './ring/ring.component';
import { ChainComponent } from './chain/chain.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { LocketComponent } from './locket/locket.component';
import { NecklaceComponent } from './necklace/necklace.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    BanglesComponent,
    RingComponent,
    ChainComponent,
    BraceletComponent,
    LocketComponent,
    NecklaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
