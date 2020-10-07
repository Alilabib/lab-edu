import { Component, OnInit, Input, ViewChildren, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'navbar-experiment',
  templateUrl: './navbar-experiment.component.html',
  styleUrls: ['./navbar-experiment.component.scss']
})
export class NavbarExperimentComponent implements OnInit {

  @Input() exp_name: string;
  @Input() exp_Id: number;
  @ViewChildren('vid') list: ElementRef[];

  // @Output() Stepsbtn=new EventEmitter<number>();

  constructor(private location: Location, private route: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  GetSteps() {
    this.route.navigateByUrl('steps/' + this.exp_Id);
  }

  HowUseLab() {
    this.route.navigateByUrl('UseLab/' + this.exp_Id);
  }

  GetConclusion() {
    this.route.navigateByUrl('conclusion/' + this.exp_Id);
  }

  // Show(url) {

  //   $('.vid5').tooltip(
  //     {
  //       placement: 'bottom',
  //       boundary: 'window',
  //       html: true,
  //       sanitize: false,
  //       trigger: 'hover',
  //       title: '<iframe width="170" sandbox="allow-scripts allow-popups allow-same-origin" src="' + url + '" frameborder="0" allowfullscreen></iframe>'
  //     })

  // }
  // Show1(url) {

  //   $('.vid1').tooltip(
  //     {
  //       placement: 'bottom',
  //       boundary: 'window',
  //       html: true,
  //       sanitize: false,
  //       trigger: 'hover',
  //       title: '<iframe width="170" sandbox="allow-scripts allow-popups allow-same-origin" src="' + url + '" frameborder="0" allowfullscreen></iframe>'
  //     })

  // }
  // Show2(url) {

  //   $('.vid2').tooltip(
  //     {
  //       placement: 'bottom',
  //       boundary: 'window',
  //       html: true,
  //       sanitize: false,
  //       trigger: 'hover',
  //       title: '<iframe width="170" sandbox="allow-scripts allow-popups allow-same-origin" src="' + url + '" frameborder="0" allowfullscreen></iframe>'
  //     })

  // }
  // Show3(url) {

  //   $('.vid3').tooltip(
  //     {
  //       placement: 'bottom',
  //       boundary: 'window',
  //       html: true,
  //       sanitize: false,
  //       trigger: 'hover',
  //       title: '<iframe width="170" sandbox="allow-scripts allow-popups allow-same-origin" src="' + url + '" frameborder="0" allowfullscreen></iframe>'
  //     })

  // }
  // Show4(url) {

  //   $('.vid4').tooltip(
  //     {
  //       placement: 'bottom',
  //       boundary: 'window',
  //       html: true,
  //       sanitize: false,
  //       trigger: 'hover',
  //       title: '<iframe width="170" sandbox="allow-scripts allow-popups allow-same-origin" src="' + url + '" frameborder="0" allowfullscreen></iframe>'
  //     })

  // }

  ngAfterViewInit() {

  }
  GoHome() {
    this.route.navigateByUrl('/home');
  }

}
