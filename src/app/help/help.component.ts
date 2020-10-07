import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit() {
  }

  back() {
    this.nav.navigateByUrl('/home');
  }

}
