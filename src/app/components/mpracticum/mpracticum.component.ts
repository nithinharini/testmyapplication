import { Component, OnInit } from '@angular/core';
import ConfettiGenerator from "confetti-js";
@Component({
  selector: 'app-mpracticum',
  templateUrl: './mpracticum.component.html',
  styleUrls: ['./mpracticum.component.css']
})
export class MpracticumComponent implements OnInit {
  constructor() {
    
   }

  ngOnInit(): void {
  this.celebration();
  }

  celebration(){
    var confettiElement = document.getElementById('confetti-holder');
    var confettiSettings = { target: confettiElement };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
   
  confetti(){

  }
}


