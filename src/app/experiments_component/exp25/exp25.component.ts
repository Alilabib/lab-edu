import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exp25',
  templateUrl: './exp25.component.html',
  styleUrls: ['./exp25.component.scss']
})
export class Exp25Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = "لاحظ تفاعلاً يكون راسب ";
  id = "25";

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }


  ngAfterViewInit() {
    // let video = this.video.nativeElement;
    let reset_tools = [];
    // let boom = this.boom.nativeElement;

    this.tools.map(t => {
      // gsap.set('#wet', { opacity: 0 });
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: 'x,y',

        // bounds: this.con.nativeElement, edgeResistance: 0.65, inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {

          $('.toast').toast('hide');

          //first
          if (this.hitTest('#glass1') && this.target.id != 'glass1') {
            switch (this.target.id) {
              case 'mgso4':
                let glass = document.getElementById('glass1');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="mgso4Glass" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp25/mgso4Glass.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 2000);
                break;
            }
          }

          let glass1Src = document.getElementById('glass1').getElementsByTagName('img')[0].src;
          let glass1Img = glass1Src.split('exp25/')[1];
          if (this.hitTest('#glass1') && glass1Img == 'mgso4Glass.png') {
            switch (this.target.id) {
              case 'water1':
                let glass = document.getElementById('glass1');

                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="mgso4Water" data-toggle="tooltip"  data-placement="left" src="assets/exp25/mgso4Water.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 2000);
                break;
            }
          }

          if (this.hitTest('#glass1') && glass1Img == 'mgso4Water.png') {
            switch (this.target.id) {
              case 'leg':
                let tl = gsap.timeline({ repeat: 1, repeatDelay: 0.2 });
                tl.to(this.target, { rotation: -100, duration: 1 });
                tl.to(this.target, { rotation: -100, duration: 1 });
                let glass = document.getElementById('glass1');

                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="mgso4Water1" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp25/mgso4Water1.png">');
                  // gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 3000);
                break;
            }
          }


          //second
          if (this.hitTest('#glass2') && this.target.id != 'glass2') {
            switch (this.target.id) {
              case 'naoh':
                let glass = document.getElementById('glass2');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="mgso4Glass" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp25/naohGlass.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 , opacity: 0});
                }, 2000);
                break;
            }
          }

          let glass2Src = document.getElementById('glass2').getElementsByTagName('img')[0].src;
          let glass2Img = glass2Src.split('exp25/')[1];
          if (this.hitTest('#glass2') && glass2Img == 'naohGlass.png') {
            switch (this.target.id) {
              case 'water2':
                let glass = document.getElementById('glass2');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="mgso4Glass" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp25/naohWater.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 , opacity: 0});
                }, 2000);
                break;
            }
          }

          if (this.hitTest('#glass2') && glass2Img == 'naohWater.png') {
            switch (this.target.id) {
              case 'leg':
                let tl = gsap.timeline({ repeat: 1, repeatDelay: 0.2 });
                tl.to(this.target, { rotation: -100, duration: 1 });
                tl.to(this.target, { rotation: -70, duration: 1 });
                let glass = document.getElementById('glass2');

                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="mgso4Water1" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp25/naohWater1.png">');
                  // gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 4000);
                break;
            }
          }


          //final
          if (this.hitTest('#glass1') && glass2Img == 'naohWater1.png') {
            switch (this.target.id) {
              case 'glass2':
                let glass = document.getElementById('glass1');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="mgso4Glass" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp25/final.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 , opacity: 0});
                }, 2000);
                setTimeout(() => {
                  reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                  $('#exampleModalCenter').modal('show');
                  // video.play();
                }, 5000);
                break;
            }
          }

        },
      });
    });

  }

  BackToSteps() {
    this.location.back();
  }

  Close() {
    $('.toast').toast('hide');
  }

  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/1']);
  }



}
