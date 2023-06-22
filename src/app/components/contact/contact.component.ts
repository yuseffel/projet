import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  alert: boolean=false
  contactDetails = null as any;
  
  constructor(private contactService: ContactService) {
    this.getContactDetails();
  }

  register(registerForm: NgForm) {
    this.contactService.registerContact(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getContactDetails();
        this.alert=true
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getContactDetails() {
    this.contactService.getContact().subscribe(
      (resp) => {
        console.log(resp);
        this.contactDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteContact(contact: any) {
    this.contactService.deleteContact(contact.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getContactDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }



}
