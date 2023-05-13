import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { FilieresComponent } from './components/filieres/filieres.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { TableauComponent } from './components/tableau/tableau.component';


const routes: Routes = [

  {path:'', component:AcceuilComponent,pathMatch:'full'},
  {path: 'filieres', component: FilieresComponent},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'registrer', component:RegistrerComponent},
  {path:'tableau',component:TableauComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
