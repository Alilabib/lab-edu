import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Chemistry() {
    localStorage.setItem('material', "1")
    this.router.navigateByUrl('/home')
  }

  physics() {
    localStorage.setItem('material', "2")
    this.router.navigateByUrl('/home')
  }

  biology() {
    localStorage.setItem('material', "3")
    this.router.navigateByUrl('/home')
  }

}
