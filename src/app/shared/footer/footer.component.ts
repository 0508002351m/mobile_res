import { Component, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    var foot_element = document.querySelectorAll(".foot_element")
    for (let i = 0; i < foot_element.length; i++) {
      foot_element[i].addEventListener('click',()=>{
        $('.foot_element').removeClass("footer_after_clicking")
        $('.foot_element')[i].classList.add("footer_after_clicking")
      })

    }
  }

}
