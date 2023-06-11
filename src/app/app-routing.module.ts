import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { FilieresComponent } from './components/filieres/filieres.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { CFilieresComponent } from './components/cfilieres/cfilieres.component';
import { LoginpComponent } from './components/loginp/loginp.component';
import { TableauPComponent } from './components/tableau-p/tableau-p.component';
import { MPOublierComponent } from './components/mpoublier/mpoublier.component';
import { C1filliersComponent } from './components/c1filliers/c1filliers.component';
import { EspaceaComponent } from './components/espacea/espacea.component';
import { LoginaComponent } from './components/logina/logina.component';
import { TableauContaComponent } from './components/tableau-conta/tableau-conta.component';





const routes: Routes = [

  {path:'', component:AcceuilComponent,pathMatch:'full'},
  {path: 'filieres', component: FilieresComponent},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'registrer', component:RegistrerComponent},
  {path:'tableau',component:TableauComponent},
  {path:'cfilieres',component:CFilieresComponent},
  {path:'loginp',component:LoginpComponent},
  {path:'tableaup',component:TableauPComponent},
  {path:'mpoublier',component:MPOublierComponent},
  {path:'c1filieres',component:C1filliersComponent},
  {path :'espacea',component:EspaceaComponent},
  {path:'logina', component:LoginaComponent},
  {path:'tableaucontac', component:TableauContaComponent},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
