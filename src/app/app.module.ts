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
import { FormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';






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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   CommonModule,
   BrowserAnimationsModule, 
   ToastrModule.forRoot(),

   

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

