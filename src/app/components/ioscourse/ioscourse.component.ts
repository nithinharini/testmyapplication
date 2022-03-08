import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ioscourse',
  templateUrl: './ioscourse.component.html',
  styleUrls: ['./ioscourse.component.css']
})
export class IoscourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (<any>$(document)).ready(function() {
   $(this).on("click", ".aclick", function() {
     $(this).parent().find(".koh-faq-answer").toggle();
     $(this).find(".fa").toggleClass('active');
   });
 });
 }
}
