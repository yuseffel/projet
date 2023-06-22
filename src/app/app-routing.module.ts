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
import { LoginaComponent } from './components/logina/logina.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { TableauContaComponent } from './components/tableau-conta/tableau-conta.component';
import { SemestreComponent } from './components/semestre/semestre.component';
import { SemestreproComponent } from './components/semestrepro/semestrepro.component';
import { FichierComponent } from './components/fichier/fichier.component';
import { AllFichierComponent } from './components/all-fichier/all-fichier.component';
import { ArchicourComponent } from './components/archicour/archicour.component';
import { ArchitdpComponent } from './components/architdp/architdp.component';
import { ArchiexamenComponent } from './components/archiexamen/archiexamen.component';
import { ArchicourpComponent } from './components/archicourp/archicourp.component';
import { ArchitdppComponent } from './components/architdpp/architdpp.component';
import { ArchiexamenpComponent } from './components/archiexamenp/archiexamenp.component';





const routes: Routes = [

  {path:'', component:AcceuilComponent,pathMatch:'full'},
  {path: 'filieres', component: FilieresComponent},
  {path:'connexionEtudiant', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'registrerEtudiant', component:RegistrerComponent},
  {path:'listeEtudiant',component:TableauComponent},
  {path:'choixFilieres',component:CFilieresComponent},
  {path:'connexionProf',component:LoginpComponent},
  {path:'listeProf',component:TableauPComponent},
  {path:'motDePasseOublier',component:MPOublierComponent},
  {path:'choixdesFilieres',component:C1filliersComponent},
  {path:'connexionAdmin', component:LoginaComponent},
  {path:'listeMessage', component:TableauContaComponent},
  {path:'semestre', component:SemestreComponent},
  {path:'semestres',component:SemestreproComponent},
  {path:'ajouterdocs',component:FichierComponent},
  {path:'tousdocs',component:AllFichierComponent},
  {path:'archicour',component:ArchicourComponent},
  {path:'architdp',component:ArchitdpComponent},
  {path:'archiexam',component:ArchiexamenComponent},
  {path:'archicourp',component:ArchicourpComponent},
  {path:'architdpp',component:ArchitdppComponent},
  {path:'archiexamp',component:ArchiexamenpComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }