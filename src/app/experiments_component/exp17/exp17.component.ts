import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp17',
  templateUrl: './exp17.component.html',
  styleUrls: ['./exp17.component.scss']
})
export class Exp17Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة تكوين ملح الطعام";

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


          if (this.hitTest('#water') && this.target.id != 'water') {
            switch (this.target.id) {
              case 'pepper':
                let waterpepper = document.getElementById('water');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  waterpepper.removeChild(waterpepper.firstChild);
                  waterpepper.insertAdjacentHTML('afterbegin', '<img id="waterpepper" data-toggle="tooltip"  data-placement="left" src="assets/exp17/waterpepper1.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }


          if (this.hitTest('#soap')) {
            switch (this.target.id) {
              case 'tester':
                gsap.to(this.target, { css: { zIndex: 2 } });
                let tester = document.getElementById('tester').getElementsByTagName('img')[0];

                gsap.to(tester, { attr: { src: 'assets/exp17/tester2.png' }, delay: 1 });

                break;

            }
          }



          let ImgSrc = document.getElementById('water').getElementsByTagName('img')[0].src;
          let imgWater = ImgSrc.split('exp17/')[1];
          let Imgtester = document.getElementById('tester').getElementsByTagName('img')[0].src;
          let testerimg = Imgtester.split('exp17/')[1];

          if (this.hitTest('#water') && imgWater == 'waterpepper1.png' && testerimg == 'tester2.png') {
            switch (this.target.id) {
              case 'tester':
                console.log('xxxxxxxxxxxxxxx')
                let waterpepper1 = document.getElementById('water');
                setTimeout(() => {
                  waterpepper1.removeChild(waterpepper1.firstChild);
                  waterpepper1.insertAdjacentHTML('afterbegin', '<img id="waterpepper" data-toggle="tooltip"  data-placement="left" src="assets/exp17/waterpepper2.png">');
                }, 1000);

                break;
            }
          }


          if (this.hitTest('#milk') && this.target.id != 'milk') {
            switch (this.target.id) {
              case 'red':
                let redmilk = document.getElementById('milk');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  redmilk.removeChild(redmilk.firstChild);
                  redmilk.insertAdjacentHTML('afterbegin', '<img id="redmilk" data-toggle="tooltip"  data-placement="left" src="assets/exp17/milk1.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }

          let liquidsrc = document.getElementById('milk').getElementsByTagName('img')[0].src;
          let liquidimg = liquidsrc.split('exp17/')[1];
          // let Imgtester = document.getElementById('tester').getElementsByTagName('img')[0].src;
          // let testerimg = Imgtester.split('exp17/')[1];
          if (this.hitTest('#milk') && liquidimg == 'milk1.png' && testerimg == 'tester2.png') {
            switch (this.target.id) {
              case 'tester':
                console.log('xxxxxxxxxxxxxxx')
                let liquidmilk = document.getElementById('milk');
                setTimeout(() => {
                  liquidmilk.removeChild(liquidmilk.firstChild);
                  liquidmilk.insertAdjacentHTML('afterbegin', '<img id="waterpepper" data-toggle="tooltip"  data-placement="left" src="assets/exp17/milk2.png">');
                }, 1000);
                setTimeout(() => {
                  reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                  $('#exampleModalCenter').modal('show');
                  // video.play();
                }, 4000);

                break;
            }
          }

        },
      });
    });

  }

  Close() {
    $('.toast').toast('hide');
  }

  over(id, videourl) {

    $("#" + id).tooltip(
      {
        placement: 'left',
        boundary: 'window',
        html: true,
        sanitize: false,
        trigger: 'hover',
        title: '<iframe width="170" sandbox="allow-scripts allow-popups allow-same-origin" src="' + videourl + '" frameborder="0" allowfullscreen></iframe>'
      })
  }

  BackToSteps() {
    this.location.back();
  }


  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/1']);
  }

}
