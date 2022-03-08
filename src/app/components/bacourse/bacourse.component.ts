import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bacourse',
  templateUrl: './bacourse.component.html',
  styleUrls: ['./bacourse.component.css']
})
export class BAcourseComponent implements OnInit {

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
