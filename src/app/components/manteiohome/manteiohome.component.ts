import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as bootstrap from "bootstrap";
import {FormBuilder,FormGroup,Validators,FormControl, RequiredValidator,} from '@angular/forms';
import {ContactusService} from '../../services/contactus.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manteiohome',
  templateUrl: './manteiohome.component.html',
  styleUrls: ['./manteiohome.component.css']
})
export class ManteiohomeComponent implements OnInit {
  enrollform: FormGroup;
  contactData = [];
  mini = true;
  constructor(private router: Router,private fb: FormBuilder,private user: ContactusService, private http:HttpClient, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    document.getElementById("manteio_logo_main1").style.opacity = "0";
    document.getElementById("mySidebar").style.width = "78px";
    document.getElementById("main").style.marginLeft = "78px";

        $('.navbar-nav>li>a').on('click', function(){
          $('.navbar-collapse').collapse('hide');

          // $('.navbar-collapse').collapse('hide');
      });
      (<any>$(document)).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });

      this.initForm();

  }

  toggleSidebar() {
    document.getElementById("manteio_logo_main1").style.opacity = "0";
    if (this.mini) {
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "230px";
        document.getElementById("main").style.marginLeft = "230px";
        document.getElementById("manteio_logo_main").style.display = "none";
        document.getElementById("manteio_logo_main1").style.opacity = "2";
        this.mini = false;

    } else {
console.log("closing sidebar");
document.getElementById("mySidebar").style.width = "78px";
        document.getElementById("main").style.marginLeft = "78px";
        document.getElementById("manteio_logo_main").style.display = "block";
        document.getElementById("manteio_logo_main1").style.opacity = "0";
        this.mini = true;
    }
}


initForm(){
  this.enrollform = this.fb.group({
      Name: [''],
      Email: [''],
      MobileNo:[''],
      Course:[''],
      Message:['']
  });


}

submitForm(){
console.log(this.enrollform.value);
this.SpinnerService.show();
if (this.enrollform.invalid){
      window.alert('Something went wrong, Please try agian :-(');
}else{
var formData: any = new FormData();
formData.append("Name", this.enrollform.get('Name').value);
formData.append("Email", this.enrollform.get('Email').value);
formData.append("MobileNo", this.enrollform.get('MobileNo').value);
formData.append("Course", this.enrollform.get('Course').value);
formData.append("Message", this.enrollform.get('Message').value);
this.http.post<any>('http://137.59.201.54:88/api/user/savecoursedetails', formData).subscribe(
(res: any) => {
  this.SpinnerService.hide();
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
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        window.alert('Something went wrong, Please try agian :-(');
    }
  }

}
);
}
this.enrollform.reset();
}
}
