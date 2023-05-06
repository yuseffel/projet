import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { Register } from 'src/app/registrer';
import { RegistrerServiceService } from 'src/app/registrer-service.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent  implements OnInit{
registrer: Register =new Register();
constructor(private registrerService: RegistrerServiceService){

}
ngOnInit():void{

}
addregisterData(){
  //console.log(this.registrer)
  this.registrerService.addRegister(this.registrer).subscribe(data=>{
    alert("Register Data Insert Successfully");
  },error=>alert("Sorry unable to insert Register Data"));
  
}

}
