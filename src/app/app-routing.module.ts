import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {path:'ring', component: RingComponent},
  {path:'auth', component: AuthComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'', component: HomeComponent},
  {path:'bangles', component: BanglesComponent},
  {path:'chain', component: ChainComponent},
  {path:'bracelet', component: BraceletComponent},
  {path:'locket', component: LocketComponent},
  {path:'Necklace', component: NecklaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
