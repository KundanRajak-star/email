import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to:"",
    subject:"",
    messege:""

  }

  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmitForm(){
    console.log("try to submit form");
    console.log("DATA",this.data)
    if(this.data.to==''||this.data.subject==''||this.data.messege==''){
      this.snak.open("field can not be empty !!","ok")
    }

//     this.email.sendEmail(this.data).subscribe(
//       response=>{
// console.log(response);

//       },
//       error=>{
// console.log(error);

    //   }
    // )
  }

}
