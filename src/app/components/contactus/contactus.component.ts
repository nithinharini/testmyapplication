import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl, RequiredValidator,} from '@angular/forms';
import {ContactusService} from '../../services/contactus.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactform: FormGroup;
  contactData = [];
  constructor(private fb: FormBuilder,private user: ContactusService, private http:HttpClient,private SpinnerService: NgxSpinnerService) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){

    this.contactform = this.fb.group({
        Name: ['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
        Email: ['',Validators.compose([Validators.required,Validators.email])],
        MobileNo:['',Validators.compose([Validators.required,Validators.minLength(10)])],
        Subject:['',Validators.required],
        Message:['',Validators.required]
    });
  }

submitForm(){
  this.SpinnerService.show();
  console.log(this.contactform.value);
  if (this.contactform.invalid){
        window.alert('Something went wrong, Please try agian :-(');
        this.SpinnerService.hide();
  }else{
  var formData: any = new FormData();
formData.append("Name", this.contactform.get('Name').value);
formData.append("Email", this.contactform.get('Email').value);
formData.append("MobileNo", this.contactform.get('MobileNo').value);
formData.append("Subject", this.contactform.get('Subject').value);
formData.append("Message", this.contactform.get('Message').value);

this.http.post<any>('https://api.manteio.in/api/user/savecontactdata', formData).subscribe(
// this.http.post<any>('http://137.59.201.54:88/api/user/savecontactdata', formData).subscribe(
  (res: any) => {
    this.SpinnerService.hide();
    console.log(formData);
      if (res.statusCode=== 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thankyou for you valueable time, We will contact you soon.',
          showConfirmButton: false,
          timer: 2500
        })
        // window.alert('Thankyou for you valueable time, We will contact you soon.');
        console.log(res);
      }
      else{
        if (res.statusCode!==1){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong, Please try agian.',
            showConfirmButton: false,
            timer: 2500
          })
      }
    }

  }
);
}
this.contactform.reset();
    }
}
