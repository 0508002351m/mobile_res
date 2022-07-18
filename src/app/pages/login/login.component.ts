import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
var icon:any = document.getElementById("Icon")
var send:any = document.getElementById("send")
var iconmini:any = document.getElementById("iconmin")
let fly = ()=>{
    icon.className=("fa fa-paper-plane animate__animated animate__fadeOutTopRight firstIcon")
    setTimeout(()=>{
        send.className=("send animate__animated animate__fadeInUp")},1000)
    setTimeout(()=>{
        send.className=("send animate__animated animate__pulse animate__repeat-2")},2500)
    setTimeout(()=>{
        iconmini.className=("fa fa-paper-plane animate__animated animate__fadeInBottomLeft ")},1800)
    setTimeout(()=>{
        iconmini.style.visibility=("visible")},1800)
    setTimeout(()=>{
        send.style.display=("inline-block")},1000)
}
icon.onclick = fly
  }

}
