import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  middle_container:any[]=[
    {
      title:"Settings",
      icon:"fa-solid fa-gear",
    },
    {
      title:"Edit Profile Properties",
      icon:"fa-solid fa-user",
    },
    {
      title:"About",
      icon:"fa-solid fa-circle-info",
    },
    {
      title:"Refresh",
      icon:"fa-solid fa-arrows-rotate",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
