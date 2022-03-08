import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from "bootstrap";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  closeResult: string;
  @ViewChild('primaryModal') primaryModal;
  @ViewChild('primaryModalone') primaryModalone;

  showtimer:boolean = false;
  interval;
  constructor(private modalService: NgbModal,private route: Router,private router: ActivatedRoute) { }

  ngAfterViewInit() {
    this.openModal();
  }
  
  openModal(){
    this.modalService.open(this.primaryModal, { centered: true });
  }

  loginClickmpraticum(primaryModalone){
    this.modalService.dismissAll(this.primaryModal);
    this.modalService.open(primaryModalone, { centered: true,  size : 'xl',  });
    this.interval = setInterval(() => {
      this.modalService.dismissAll();
      this.route.navigate(['/mpracticum'])
  }, 10000);
    // setInterval(() => {
    //   this.modalService.dismissAll();
    //   this.route.navigate(['/mpracticum'])
    // }, 10000);
  }

  ngOnInit(): void {
  
    updateClass();
    var x = 1;

    function updateClass() {
      let a = (<any>$(".menu-btn.active")).trigger('click');
      $('.menu').on('click', '.menu-btn', function (e) {
        showContent(e.currentTarget.hash.slice(1));
        e.preventDefault();
      });
      a.removeClass("active");
      a = a.parent().next(".home_section4");
      if (a.length == 0)
        a = $(".home_section4").first();
      a.find(".menu-btn").addClass("active");
    }

      setInterval(function() {
        updateClass();
      }, x * 4000);

    $(document).ready(function () {
      $('#Isometrictext').show();
  });
var $content = $('.menu-content');

function showContent(type) {
    $content.hide().filter('.' + type).show();
}
// show 'about' content only on page load (if you want)
showContent('#isometric');
  }

  Mpraticumlaunch(){
    $('#myModallaunch').modal('show');
  }

}


