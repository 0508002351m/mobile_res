import { Component, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  elements:any[]=[
    {
      title:"Jobs",
      icon:"fa-solid fa-list-check",
      router:"/jobs"
    },
    {
      title:"Activity",
      icon:"fa-solid fa-chart-simple",
      router:"/activity"
    },
    {
      title:"Content",
      icon:"fa-solid fa-folder-closed",
      router:"/content"
    },
    {
      title:"More",
      icon:"fa-solid fa-comment-dots",
      router:"/more"
    },

  ]
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
