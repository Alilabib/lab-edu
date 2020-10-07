import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import gsap from './../../../../node_modules/gsap/dist/gsap';
import Draggable from './../../../../node_modules/gsap/Draggable';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-exp14',
  templateUrl: './exp14.component.html',
  styleUrls: ['./exp14.component.scss']
})
export class Exp14Component implements OnInit, AfterViewInit {
  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = 'تجربة قياس الضغط الجوي';
  exp_Id = '14';

  constructor(private route: Router) {
    gsap.registerPlugin(Draggable);
  }


  ngAfterViewInit() {
    // let video = this.video.nativeElement;
    let reset_tools = [];

    this.tools.map(t => {
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: 'x , y',
        bounds: this.con.nativeElement,
        edgeResistance: 0.65,
        inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {
          if (this.hitTest('#workSpace')) {
            $('.toast').toast('hide');

            if (this.hitTest('#tube') && this.target.id != 'tube') {
              switch (this.target.id) {
                case 'Mercury':
                  gsap.to(this.target, { rotation: -45, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                  setTimeout(() => {
                    let tube = document.getElementById('tube');
                    tube.removeChild(tube.firstChild);
                    // tslint:disable-next-line:max-line-length
                    tube.insertAdjacentHTML('beforeend', '<img  data-toggle="tooltip" style="width: 40%;opacity: 0.6;" data-placement="left" src="assets/exp14/tubeMercury.png">');
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }, 2000);
                  break;

                case 'basin':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                case 'cover':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                // case 'ruler':
                //   gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                //   break;

                case 'funnel':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            }
            if (this.hitTest('#basin') && this.target.id != 'basin') {
              switch (this.target.id) {
                case 'Mercury':
                  gsap.to(this.target, { rotation: -45, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                  setTimeout(() => {
                    let basin = document.getElementById('basin');
                    basin.removeChild(basin.firstChild);
                    // tslint:disable-next-line:max-line-length
                    basin.insertAdjacentHTML('beforeend', '<img  data-toggle="tooltip" style="width: 100%;opacity: 0.6;" data-placement="left" src="assets/exp14/basinMercury.png">');
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }, 2000);
                  break;

                case 'basin':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                // case 'tube':
                //   gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                //   break;

                case 'cover':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                // case 'ruler':
                //   gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                //   break;

                case 'funnel':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            }

            let img = document.getElementById('tube').getElementsByTagName('img')[0].src;
            let scrNew = img.split('exp14/')[1];
            let imgbasin = document.getElementById('basin').getElementsByTagName('img')[0].src;
            let scrNewB = imgbasin.split('exp14/')[1];

            if (scrNew == 'tubeMercury.png' && this.hitTest('#tube') && this.target.id != 'tube') {
              switch (this.target.id) {
                case 'Mercury':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                case 'basin':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                case 'cover':
                  let tube = document.getElementById('tube');
                  tube.removeChild(tube.firstChild);
                  // tslint:disable-next-line:max-line-length
                  tube.insertAdjacentHTML('beforeend', '<img  data-toggle="tooltip" style="width: 40%;opacity: 0.6;" data-placement="left" src="assets/exp14/tubeCover.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: '0' });

                  break;

                case 'funnel':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
                // case 'ruler':
                //   gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                //   break;
              }
            }
            setTimeout(() => {
              if (scrNew == 'tubeCover.png' && this.hitTest('#basin') && this.target.id == 'tube' && scrNewB == 'basinMercury.png') {
                let tube = document.getElementById('tube');
                tube.removeChild(tube.firstChild);
                // tslint:disable-next-line:max-line-length
                gsap.to(this.target, { css: { zIndex: 2 } });
                tube.insertAdjacentHTML('beforeend', '<img  data-toggle="tooltip" style="width: 40%;opacity: 0.6;" data-placement="left" src="assets/exp14/tubeMercury1.png">');
                // document.getElementById('tube').style.transform += 'rotate(180deg)';
                (function () {
                  setTimeout(() => {
                    let tube = document.getElementById('tube');
                    tube.removeChild(tube.firstChild);
                    // tslint:disable-next-line:max-line-length
                    tube.insertAdjacentHTML('beforeend', '<img  data-toggle="tooltip" style="width: 40%;opacity: 0.6;" data-placement="left" src="assets/exp14/tubeMercury.png">');
                  }, 2000);
                })();
              }
            }, 100);
            if (this.target.id == 'ruler' && scrNew == 'tubeMercury.png' && this.hitTest('#basin') && scrNewB == 'basinMercury.png') {
              let tim = document.getElementById("timer1");
              gsap.to(tim, { opacity:1, delay: 1 });
              setTimeout(() => {
                reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                $('#exampleModalCenter').modal('show');
                // video.play();
              }, 3000);
            }
          } else {
            gsap.to(this.target, { y: 0, x: 0, duration: 1 });
          }
        }
      });
    });

  }
  ngOnInit() {
    $('.toast').toast('show');
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  backVideo() {
    this.route.navigateByUrl('experiment/' + this.exp_Id);
  }
  stop() {
    // let video = this.video.nativeElement;
    // video.pause();
  }

  GoNext() {
    this.route.navigate(['experiment/15']);
  }
}
