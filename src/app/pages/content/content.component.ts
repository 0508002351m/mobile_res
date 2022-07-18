import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content_top:any[]=[
    {
      title:"Form with profile and session properties",
      icon:"fa-solid fa-list"
    },
    {
      title:"Conditional Visibility",
      icon:"fa-solid fa-thumbtack"
    },
    {
      title:"Dynamic dependent dropdowns",
      icon:"fa-solid fa-magnifying-glass text-primary"
    },
  ]
  content_mid:any[]=[
    {
      title:"First Dashboard",
    },
    {
      title:"Second Dashboard",
    },
    {
      title:"Third Dashboard",
    },
    {
      title:"Fourth Dashboard",
    },
  ]
  content_last:any[]=[
    {
      title:"Noninputs-NoAutoinvocable",
    },
    {
      title:"Form Field Attribute",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
