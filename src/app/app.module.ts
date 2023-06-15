import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilieresComponent } from './components/filieres/filieres.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { CFilieresComponent } from './components/cfilieres/cfilieres.component';
import { LoginpComponent } from './components/loginp/loginp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableauPComponent } from './components/tableau-p/tableau-p.component';
import { MPOublierComponent } from './components/mpoublier/mpoublier.component';
import { LoginaComponent } from './components/logina/logina.component';
import { C1filliersComponent } from './components/c1filliers/c1filliers.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { TableauContaComponent } from './components/tableau-conta/tableau-conta.component';
import { Navbar3Component } from './components/navbar3/navbar3.component';
import { SemestreComponent } from './components/semestre/semestre.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SemestreproComponent } from './components/semestrepro/semestrepro.component';
import { FichierComponent } from './components/fichier/fichier.component';
import { AllFichierComponent } from './components/all-fichier/all-fichier.component';
import { ArchicourComponent } from './components/archicour/archicour.component';
import { ArchitdpComponent } from './components/architdp/architdp.component';
import { ArchiexamenComponent } from './components/archiexamen/archiexamen.component';
import { Navbar4Component } from './components/navbar4/navbar4.component';
import { ArchiexamenpComponent } from './components/archiexamenp/archiexamenp.component';
import { ArchitdppComponent } from './components/architdpp/architdpp.component';
import { ArchicourpComponent } from './components/archicourp/archicourp.component';
import { Navbar5Component } from './components/navbar5/navbar5.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilieresComponent,
    ContactComponent,
    LoginComponent,
    AcceuilComponent,
    RegistrerComponent,
    TableauComponent,
    CFilieresComponent,
    LoginpComponent,
    TableauPComponent,
    MPOublierComponent,
    LoginaComponent,
    C1filliersComponent,
    Navbar2Component,
    TableauContaComponent,
    Navbar3Component,
    SemestreComponent,
    SemestreproComponent,
    FichierComponent,
    AllFichierComponent,
    ArchicourComponent,
    ArchitdpComponent,
    ArchiexamenComponent,
    Navbar4Component,
    ArchiexamenpComponent,
    ArchitdppComponent,
    ArchicourpComponent,
    Navbar5Component,
 


  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    NgbModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

    
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


