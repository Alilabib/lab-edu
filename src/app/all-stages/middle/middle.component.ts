import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Chemistry() {
    localStorage.setItem('material', "4")
    this.router.navigateByUrl('/home')
  }

  physics() {
    localStorage.setItem('material', "5")
    this.router.navigateByUrl('/home')
  }

  biology() {
    localStorage.setItem('material', "6")
    this.router.navigateByUrl('/home')
  }

}
