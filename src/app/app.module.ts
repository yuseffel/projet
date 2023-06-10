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
import { EspaceaComponent } from './components/espacea/espacea.component';









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
    EspaceaComponent,
  
   






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
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

