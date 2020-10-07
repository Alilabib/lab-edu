import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
declare var $: any;
import gsap from './../../../../node_modules/gsap/dist/gsap';
import Draggable from './../../../../node_modules/gsap/Draggable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp13',
  templateUrl: './exp13.component.html',
  styleUrls: ['./exp13.component.scss']
})
export class Exp13Component implements OnInit, AfterViewInit {
  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  // @ViewChild('tubes') tube;
  //////////
  @ViewChild('water') water: ElementRef;
  @ViewChild('tap') tap: ElementRef;
  @ViewChildren('tuhlub1') Tuhlub1: ElementRef[];
  @ViewChildren('tuhlub2') Tuhlub2: ElementRef[];
  @ViewChildren('tuhlub3') Tuhlub3: ElementRef[];
  @ViewChildren('glass') glasses: ElementRef[];
  // @ViewChild('videoPlayer') video: ElementRef;

  title = 'تجربة تلوث المياه';
  exp_Id = '13';
  // Default Place
  bottle150_x = 0;
  bottle150_y = 0;
  bottle300_x = 0;
  bottle300_y = 0;
  current_glass_index: any;

  constructor(private route: Router) {
    gsap.registerPlugin(Draggable);
  }


  ngAfterViewInit() {
    // let video = this.video.nativeElement;
    let tap = this.tap.nativeElement;
    let glasses = [];
    this.glasses.forEach(item => {
      glasses.push(item.nativeElement);
    });

    let T1 = [];
    this.Tuhlub1.forEach(item => {
      T1.push(item.nativeElement);
    });

    let T2 = [];
    this.Tuhlub2.forEach(item => {
      T2.push(item.nativeElement);
    });

    let T3 = [];
    this.Tuhlub3.forEach(item => {
      T3.push(item.nativeElement);
    });

    let reset_tools=[];

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

            //for water glass to fill them
            if (this.target.className == 'col-3 glass') {
              if (this.hitTest(tap)) {
                this.target.id = 'current';
                let w = $('#current').find('img');
                gsap.to(w[0], { attr: { src: 'assets/exp13/fillWater.png' }, duration: 2 });
                // this.target.removeChild(this.target.firstChild);
                // // tslint:disable-next-line:max-line-length
                // this.target.insertAdjacentHTML('afterbegin', '<img #glass style="opacity: 0.8;width: 120%;" src="assets/exp13/fillWater.png">');
              } else {
                this.target.id = 'glass';
              }
            }

            if (this.target.id == 'greenWater') {
              for (let index = 0; index < 3; index++) {
                console.log(glasses[index].src.split('exp13/')[1])
                if (this.hitTest(glasses[index]) && glasses[index].src.split('exp13/')[1] == 'fillWater.png') {
                  gsap.to(this.target, { rotation: -45, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                  gsap.to(glasses[index], { attr: { src: 'assets/exp13/mixWater.png' }, delay: 2 });
                }
              }
            }


            if (this.target.id == 'fertilizer' || this.target.id == 'scoop') {
              for (let index = 0; index < 3; index++) {
                if (this.hitTest(glasses[index]) && glasses[index].src.split('exp13/')[1] == 'mixWater.png') {

                  let tl = gsap.timeline({ repeat: 1, repeatDelay: 0.2 });
                  tl.to(this.target, { rotation: -45, duration: 1 });
                  tl.to(this.target, { rotation: 0, duration: 1 });


                  switch (this.target.id) {
                    case 'fertilizer':
                      glasses[index].classList.add('highlight');
                      setTimeout(() => {
                        gsap.to(T3[index], { opacity: 1, duration: 2, delay: 2 });
                        gsap.to(this.target, { opacity: 0 });
                      }, 2000);
                      break;
                    case 'scoop':
                      glasses[index].classList.add('highlight');
                      setTimeout(() => {
                        gsap.to(T1[index], { opacity: 1, duration: 2, delay: 2 });
                        gsap.to(this.target, { opacity: 0 });
                      }, 2000);
                      break;
                  }
                }
              }
            }

            const TouchedBott = document.getElementsByClassName('highlight');

            if (TouchedBott.length == 2) {
              for (let i = 0; i < 3; i++) {
                if (document.getElementsByClassName('glass')[i].getElementsByTagName('img')[0].classList[0] != 'highlight' 
                && document.getElementsByClassName('glass')[i].getElementsByTagName('img')[0].src.split('exp13/')[1] == 'mixWater.png') {
                  setTimeout(() => {
                    gsap.to(T2[i], { opacity: 1, duration: 2, delay: 2 });
                  }, 3000);
                  setTimeout(() => {
                    reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                    $('#exampleModalCenter').modal('show');
                    // video.play();
                  }, 6000);
                }
              }
            }
            // } else if (this.hitTest('#toolsDiv')) {
            //   gsap.to(this.target, { y: this.y, x: this.x - 60, duration: 1 });
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


  // FillWater() {
  //   let t = $('#current').find('img');
  //   gsap.to(this.water.nativeElement, { opacity: 1, duration: 2 });
  //   gsap.to(t[0], { attr: { src: 'assets/exp13/fillWater.png' }, duration: 2, delay: 1 });
  //   gsap.to(this.water.nativeElement, { opacity: 0, duration: 2, delay: 1 });

  // }

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
    this.route.navigate(['experiment/14']);
  }
}
