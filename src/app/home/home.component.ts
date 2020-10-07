import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('videoPlayer') video: ElementRef;
  @ViewChildren('exp') exps: ElementRef[];
  @ViewChildren('help') help: ElementRef[];

  experiments;
  mouseOverLink;

  constructor(private service: DataService, private nav: Router) {
    // this.experiments = this.service.GetAll();
    // this.experiments = this.service.data

  }

  ngOnInit() {
    let material = parseInt(localStorage.getItem('material'))
    switch (material) {
      case 1:
        this.experiments = this.service.data1
        break;
      case 2:
        this.experiments = this.service.data2
        break;
      case 3:
        this.experiments = this.service.data3
        break;
      case 4:
        this.experiments = this.service.data
        console.log(this.experiments)
        break;
      case 5:
        this.experiments = this.service.data5
        console.log(this.experiments)
        break;
      case 6:
        this.experiments = this.service.data6
        console.log(this.experiments)
        break;
      case 7:
        this.experiments = this.service.data7
        console.log(this.experiments)
        break;
      case 8:
        this.experiments = this.service.data8
        console.log(this.experiments)
        break;
      case 9:
        this.experiments = this.service.data9
        console.log(this.experiments)
        break;

      default:
        break;
    }
  }

  ngAfterViewInit() {
  }


  Go(url) {
    $('.exp').tooltip('hide');
    this.nav.navigateByUrl(url);
  }

  open() {
    $('#help').tooltip('hide');
    this.nav.navigateByUrl('/help');
  }

  // open() {
  //   let video = this.video.nativeElement;
  //   $('#exampleModalCenter').modal('show');
  //   video.load();
  //   video.play();
  // }

}
