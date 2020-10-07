import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp11',
  templateUrl: './exp11.component.html',
  styleUrls: ['./exp11.component.scss']
})
export class Exp11Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = 'تجربة تكوين كلوريد الامونيوم (السحب البيضاء)';
  exp_Id = '11';

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    // let video = this.video.nativeElement;
    let reset_tools=[];
    // let boom = this.boom.nativeElement;

    this.tools.map(t => {
      gsap.set('#wet', { opacity: 0 });
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: 'x,y',

        // bounds: this.con.nativeElement, edgeResistance: 0.65, inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {
          if (this.hitTest('#workSpace')) {
            // gsap.set("#boot150" , 0.00001, {opacity: 0})
            $('.toast').toast('hide');

            let amoniumSrc = document.getElementById('amonium').getElementsByTagName('img')[1].src;
            let amoniumImg = amoniumSrc.split('exp11/')[1];

            if (this.hitTest('#hitSpace') && this.target.id != 'tester') {
              switch (this.target.id) {
                case 'amonium':
                  if (amoniumImg == 'amonia.png') {
                    gsap.to(this.target, { rotation: -45, duration: 2 });
                    gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                    let glasses = document.getElementById('amonium').getElementsByTagName('img')[1];
                    let tester = document.getElementById('tester');
                    gsap.to(glasses, { attr: { src: 'assets/exp11/testerAmonium.png' }, delay: 2 });
                    gsap.to(tester, { y: this.y, x: this.x, duration: 1, opacity: 0, delay: 2 });
                  }
                  break;

                default:
                  // gsap.to(this.target, { x : 0 , y : 0 });
                  break;
              }
            }

            let ImgSrc = document.getElementById('amonium').getElementsByTagName('img')[1].src;
            let imgAmonia = ImgSrc.split('exp11/')[1];

            let ImgLeg = document.getElementById('leg').getElementsByTagName('img')[0].src;
            let imgleg = ImgLeg.split('exp11/')[1];

            // legAmonia

            if (this.hitTest('#liquid')) {
              switch (this.target.id) {
                case 'leg':
                  gsap.to(this.target, { css: { zIndex: 2 } });
                  let leg = document.getElementById('leg').getElementsByTagName('img')[0];

                  gsap.to(leg, { attr: { src: 'assets/exp11/legAmonia.png' }, delay: 1 });
                  // let wetLeg = <HTMLElement>document.getElementById('wet');
                  // console.log(wetLeg.style.opacity);
                  // gsap.to(wetLeg, { opacity: 1, duration: 4 });
                  break;
                default:
                  // gsap.to(this.target, { x : 0 , y : 0 });
                  break;
              }
            }

            // let wetLeg = <HTMLElement>document.getElementById('wet');
            if (this.hitTest('#hitSpace2') && imgAmonia == 'testerAmonium.png' && imgleg == 'legAmonia.png') {
              switch (this.target.id) {
                case 'leg':
                  gsap.to(this.target, { css: { zIndex: 2 } });
                  let cloud = <HTMLElement>document.getElementById('cloude');
                  gsap.fromTo(cloud, { opacity: 1, delay: 5 }, { opacity: 0, duration: 15 });
                  setTimeout(() => {
                    reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                    $('#exampleModalCenter').modal('show');
                    // video.play();
                  }, 3000);
                  break;
                default:
                  // gsap.to(this.target, { x : 0 , y : 0 });
                  break;
              }
            }
          }
          else {
            gsap.to(this.target, { y: 0, x: 0, duration: 1 });
          }
        },
      });
    });

  }
  Close() {
    $('.toast').toast('hide');
  }

  backVideo() {
    this.route.navigateByUrl('experiment/' + this.exp_Id);
  }

  stop() {
    // let video = this.video.nativeElement;
    // video.pause();
  }
  GoNext() {
    // $('#next').tooltip('hide');
    this.route.navigate(['experiment/12']);
  }

  BackToSteps() {
    this.location.back();
  }

  test() {
    let amoniumSrc = document.getElementById('amonium').getElementsByTagName('img')[1].src;
    let amoniumImg = amoniumSrc.split('exp11/')[1];
    console.log(amoniumImg)
  }
}
