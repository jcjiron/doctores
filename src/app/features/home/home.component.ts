import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  premiumDoctors:any[] = [1,2,3,4]

  constructor() { }

  ngOnInit() {
  }

}
