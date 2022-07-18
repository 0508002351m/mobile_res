import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var form:any = document.getElementById("form")
    console.log(form)
    form.onclick = ()=>{
      $("#sel").addClass("form")
    }
  }

}
