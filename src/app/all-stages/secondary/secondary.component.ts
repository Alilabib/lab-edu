import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  Chemistry() {
    localStorage.setItem('material', "7")
    this.router.navigateByUrl('/home')
  }

  physics() {
    localStorage.setItem('material', "8")
    this.router.navigateByUrl('/home')
  }

  biology() {
    localStorage.setItem('material', "9")
    this.router.navigateByUrl('/home')
  }

}
