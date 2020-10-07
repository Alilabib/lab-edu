import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp24',
  templateUrl: './exp24.component.html',
  styleUrls: ['./exp24.component.scss']
})
export class Exp24Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = "كيف نستدل على حدوث تغير كيميائي ";
  id = "24";

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


          if (this.hitTest('#glass') && this.target.id != 'glass') {
            switch (this.target.id) {
              case 'water':
                let glass = document.getElementById('glass');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="water" data-toggle="tooltip"  data-placement="left" src="assets/exp24/water.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }

          let glassSrc = document.getElementById('glass').getElementsByTagName('img')[0].src;
          let glassImg = glassSrc.split('exp24/')[1];
          if (this.hitTest('#glass') && glassImg == 'water.png') {
            switch (this.target.id) {
              case 'Naoh':
                let glass = document.getElementById('glass');

                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  gsap.fromTo(
                    glass, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 45, duration: 3, repeat: 3, yoyo: true, },
                  );
                }, 2000);
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="water1" data-toggle="tooltip"  data-placement="left" src="assets/exp24/water1.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 4000);
                break;
            }
          }

          if (this.hitTest('#glass') && glassImg == 'water1.png') {
            switch (this.target.id) {
              case 'detector':
                let glass = document.getElementById('glass');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  gsap.fromTo(
                    glass, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 45, duration: 3, repeat: 3, yoyo: true, },
                  );
                }, 2000);
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="water2" data-toggle="tooltip"  data-placement="left" src="assets/exp24/water2.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 4000);
                break;
            }
          }

          if (this.hitTest('#glass') && glassImg == 'water2.png') {
            switch (this.target.id) {
              case 'effervescent':
                let glass = document.getElementById('glass');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  gsap.fromTo(
                    glass, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 45, duration: 3, repeat: 3, yoyo: true, },
                  );
                }, 2000);
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="water3" data-toggle="tooltip"  data-placement="left" src="assets/exp24/water3.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 4000);
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
