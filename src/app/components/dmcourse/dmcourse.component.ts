import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmcourse',
  templateUrl: './dmcourse.component.html',
  styleUrls: ['./dmcourse.component.css']
})
export class DMcourseComponent implements OnInit {

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
