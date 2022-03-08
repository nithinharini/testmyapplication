import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl,} from '@angular/forms';
import {ContactusService} from '../../services/contactus.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  contactform: FormGroup;
  resumeform: FormGroup;
  contactData = [];
  resumeData = [];
  constructor(private fb: FormBuilder,private user: ContactusService, private http:HttpClient) { }

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

    updateClass();
    var x = 1;

    function updateClass() {
      let a = (<any>$(".boxhover.hover"));
      a.removeClass("hover");
      a = a.parent().next(".home_section5");
      if (a.length == 0)
        a = $(".home_section5").first();
      a.find(".boxhover").addClass("hover");
    }
      setInterval(function() {
        updateClass();
      }, x * 2000);

  }


  initForm(){
      this.contactform = this.fb.group({
          Name: [''],
          Email: [''],
          Subject:[''],
          Message:['']
      });
      this.resumeform = this.fb.group({
        FullName:[''],
        Email: [''],
        JobType: [''],
        TotalWorkExperience: [''],
        RelaventExperience:[''],
        ExpectedSalary:[''],
        CurrentSalary:[''],
        NoticePeriod:[''],
        CurrentLocation:[''],
        FilePath:[''],
    });
    }

  submitForm(){
    console.log(this.contactform.value);
    var formData: any = new FormData();
  formData.append("Name", this.contactform.get('Name').value);
  formData.append("Email", this.contactform.get('Email').value);
  formData.append("Subject", this.contactform.get('Subject').value);
  formData.append("Message", this.contactform.get('Message').value);
  this.http.post<any>('http://18.222.194.156:97/api/user/savecontactdata', formData).subscribe(
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

  submitFormresume(){
    console.log(this.resumeform.value);
    var formData: any = new FormData();
  formData.append("FullName", this.resumeform.get('FullName').value);
  formData.append("Email", this.resumeform.get('Email').value);
  formData.append("JobType", this.resumeform.get('JobType').value);
  formData.append("TotalWorkExperience", this.resumeform.get('TotalWorkExperience').value);
  formData.append("RelaventExperience", this.resumeform.get('RelaventExperience').value);
  formData.append("ExpectedSalary", this.resumeform.get('ExpectedSalary').value);
  formData.append("CurrentSalary", this.resumeform.get('CurrentSalary').value);
  formData.append("NoticePeriod", this.resumeform.get('NoticePeriod').value);
  formData.append("CurrentLocation", this.resumeform.get('CurrentLocation').value);
  formData.append("FilePath", this.resumeform.get('FilePath').value);

  this.http.post<any>('http://18.222.194.156:97/api/user/savecareerdata', formData).subscribe(
    (res: any) => {
        if (res.statusCode=== 1){
          window.alert('Thankyou for submitting your resume, We will contact you soon.');
          console.log(res);
        }
        else{
          if (res.statusCode!==1){
            window.alert('Something went wrong, Please try agian :-(');
        }
      }

    }
  );

  this.resumeform.reset();
  }
}


 // this.user
    // .AllcontactData(this.contactform.value)
    // .pipe(take(1))
    // .subscribe((res: any) => {
    //   if (res.statusCode=== 1){
    //     window.alert('Thankyou for you valueable time, We will contact you soon.');
    //     console.log(res);
    //   }
    //   else{
    //     if (res.statusCode!==1){
    //       window.alert('Something went wrong, Please try agian :-(');
    //   }
    // }
    // });

    // this.contactform.get('message').clearValidators();
