import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl,} from '@angular/forms';
import {ContactusService} from '../../services/contactus.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  submitted = false;
  contactform: FormGroup;
  resumeform: FormGroup;
  contactData = [];
  resumeData = [];
  constructor(private fb: FormBuilder,private user: ContactusService, private http:HttpClient, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    $('.modal-child').on('show.bs.modal', function () {
      var modalParent = $(this).attr('data-modal-parent');
      $(modalParent).css('opacity', 0);
  });

  $('.modal-child').on('hidden.bs.modal', function () {
      var modalParent = $(this).attr('data-modal-parent');
      $(modalParent).css('opacity', 1);
  });
    this.initForm();
    this.popupcolse();
  }

  popupcolse(){
    $('.modal-child').on('show.bs.modal', function () {
      var modalParent = $(this).attr('data-modal-parent');
      $(modalParent).css('opacity', 0);
  });

  $('.modal-child').on('hidden.bs.modal', function () {
      var modalParent = $(this).attr('data-modal-parent');
      $(modalParent).css('opacity', 1);
  });
  }


  initForm(){
    this.contactform = this.fb.group({
        Name: [''],
        Email: [''],
        Subject:[''],
        Message:['']
    });
    this.resumeform = this.fb.group({
      FullName:['', Validators.required],
      Email: ['',Validators.compose([Validators.required,Validators.email])],
      JobType: [''],
      TotalWorkExperienceyear: ['', Validators.required],
      TotalWorkExperiencemonth: ['', Validators.required],
      RelaventExperienceyear:['', Validators.required],
      RelaventExperiencemonth:['', Validators.required],
      ExpectedSalarylakes:[''],
      ExpectedSalarythousands:[''],
      currentsalarylakhs:['', Validators.required],
      currentsalarythousands:['', Validators.required],
      NoticePeriod:['', Validators.required],
      CurrentLocation:['', Validators.required],
      FilePath:['',Validators.required],
  });
  }

submitForm(){
  console.log(this.contactform.value);
  var formData: any = new FormData();
formData.append("Name", this.contactform.get('Name').value);
formData.append("Email", this.contactform.get('Email').value);
formData.append("Subject", this.contactform.get('Subject').value);
formData.append("Message", this.contactform.get('Message').value);
// this.http.post<any>('http://137.59.201.54:88/api/user/savecontactdata', formData).subscribe(
  this.http.post<any>('http://api.manteio.in/api/user/savecontactdata', formData).subscribe(
  (res: any) => {
      if (res.statusCode=== 1){

        window.alert('Thankyou for you valueable time, We will contact you soon.');
        console.log(res);
      }
      else{
        if (res.statusCode!==1){
          window.alert('Something went wrong, Please try agian :-(');
      }
    }

  }
);

this.contactform.reset();

}
// resume form
onFileChange(event) {

  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.resumeform.patchValue({
      FilePath: file
    });
    console.log(file,'nithin file')
  }
}

submitFormresume(){
  this.SpinnerService.show();
  if (this.resumeform.invalid) {
    this.submitted = true;
    this.SpinnerService.hide();
    return;
}else{
  this.submitted = false;
  var formData: any = new FormData();
formData.append("FullName", this.resumeform.get('FullName').value);
formData.append("Email", this.resumeform.get('Email').value);
formData.append("JobType", this.resumeform.get('JobType').value);
formData.append("TotalWorkExperienceyear", this.resumeform.get('TotalWorkExperienceyear').value);
formData.append("TotalWorkExperiencemonth", this.resumeform.get('TotalWorkExperiencemonth').value);
formData.append("RelaventExperienceyear", this.resumeform.get('RelaventExperienceyear').value);
formData.append("RelaventExperiencemonth", this.resumeform.get('RelaventExperiencemonth').value);
formData.append("ExpectedSalarylakes", this.resumeform.get('ExpectedSalarylakes').value);
formData.append("ExpectedSalarythousands", this.resumeform.get('ExpectedSalarythousands').value);
formData.append("currentsalarylakhs", this.resumeform.get('currentsalarylakhs').value);
formData.append("currentsalarythousands", this.resumeform.get('currentsalarythousands').value);
formData.append("NoticePeriod", this.resumeform.get('NoticePeriod').value);
formData.append("CurrentLocation", this.resumeform.get('CurrentLocation').value);
formData.append("FilePath", this.resumeform.get('FilePath').value);
console.log(formData);
console.log(this.resumeform.value);
this.http.post<any>('https://api.manteio.in/api/user/savecareerdata', formData).subscribe(
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
        window.location.reload();
      }
      else{
        if (res.statusCode!==1){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong, Please try agian  :-(',
            showConfirmButton: false,
            timer: 2500
          })
      }
    }

  }

);
}
this.resumeform.reset();
}
}
