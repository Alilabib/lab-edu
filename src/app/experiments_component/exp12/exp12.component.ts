import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
declare var $: any;
import gsap from './../../../../node_modules/gsap/dist/gsap';
import Draggable from './../../../../node_modules/gsap/Draggable';
import Power1 from './../../../../node_modules/gsap/dist/EasePack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp12',
  templateUrl: './exp12.component.html',
  styleUrls: ['./exp12.component.scss']
})
export class Exp12Component implements OnInit {

  title = 'اكتشاف الخواص الكيميائية للافلزات';

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('tubes') tube;
  @ViewChild('water') water: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  // Default Place
  bottle150_x = 0;
  bottle150_y = 0;
  bottle300_x = 0;
  bottle300_y = 0;
  exp_Id = '12';

  constructor(private route: Router) {
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

            // water
            let ImgSrc = document.getElementById('oxygen').getElementsByTagName('img')[0].src;
            let imgBurn = ImgSrc.split('exp12/')[1];

            let srcCoal2 = document.getElementById('coal2').getElementsByTagName('img')[0].src;
            let imgCoal2 = srcCoal2.split('exp12/')[1];

            let srcbottle_300 = document.getElementById('bottle-300').getElementsByTagName('img')[0].src;
            let imgbottle_300 = srcbottle_300.split('exp12/')[1];

            let srcbottle_200 = document.getElementById('bottle-200').getElementsByTagName('img')[0].src;
            let imgbottle_200 = srcbottle_200.split('exp12/')[1];


            let srcSpoon = document.getElementById('spoon').getElementsByTagName('img')[0].src;
            let imgSpoon = srcSpoon.split('exp12/')[1];

            if (this.hitTest('#bottle-300') && this.target.id != 'bottle-300') {
              switch (this.target.id) {
                case 'coal1':
                  if (imgbottle_300 != 'botMatch.png' && imgbottle_300 != 'botCoal.png') {
                    let coal1 = <HTMLElement>document.getElementById('coal1');
                    let bottle_300 = <HTMLElement>document.getElementById('bottle-300').getElementsByTagName('img')[0];
                    gsap.to(bottle_300, { attr: { src: 'assets/exp12/botCoal.png' }, width: '65%' });
                    gsap.to(coal1, { opacity: 0 });
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'match':
                  if (imgbottle_300 != 'botCoal.png' && imgbottle_300 != 'botMatch.png') {
                    let match = <HTMLElement>document.getElementById('match');
                    let bottl_300 = <HTMLElement>document.getElementById('bottle-300').getElementsByTagName('img')[0];
                    gsap.to(bottl_300, { attr: { src: 'assets/exp12/botMatch.png' }, width: '65%' });
                    gsap.to(match, { opacity: 0 });
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'coal2':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                case 'liquid':
                  gsap.to(this.target, { rotation: -45, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, delay: 2 });
                  break;
                default:
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            } else if (this.hitTest('#bottle-200') && this.target.id != 'bottle-200') {
              switch (this.target.id) {
                case 'coal1':
                  if (imgbottle_200 != 'botMatch.png' && imgbottle_200 != 'botCoal.png') {
                    let coal1 = <HTMLElement>document.getElementById('coal1');
                    let bottle_200 = <HTMLElement>document.getElementById('bottle-200').getElementsByTagName('img')[0];
                    gsap.to(bottle_200, { attr: { src: 'assets/exp12/botCoal.png' }, width: '65%' });
                    gsap.to(coal1, { opacity: 0 });
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'match':
                  if (imgbottle_200 != 'botCoal.png' && imgbottle_200 != 'botMatch.png') {
                    let match = <HTMLElement>document.getElementById('match');
                    let bottl_200 = <HTMLElement>document.getElementById('bottle-200').getElementsByTagName('img')[0];
                    gsap.to(bottl_200, { attr: { src: 'assets/exp12/botMatch.png' }, width: '65%' });
                    gsap.to(match, { opacity: 0 });
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'coal2':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;

                case 'liquid':
                  gsap.to(this.target, { rotation: -45, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, delay: 2 });
                  break;
                default:
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            } else if (this.hitTest('#spoon') && this.target.id == 'coal2') {
              switch (this.target.id) {
                case 'coal2':
                  gsap.to(this.target, { opacity: 0 });
                  let coal2 = <HTMLElement>document.getElementById('spoon').getElementsByTagName('img')[0];
                  gsap.to(coal2, { attr: { src: 'assets/exp12/spoonCoal.png' } });
                  break;

                case 'spoon':
                  break;

                default:
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            }
            else if (this.hitTest('#fire') && this.target.id != 'fire') {
              switch (this.target.id) {
                case 'coal2':
                  // let coal2 = <HTMLElement>document.getElementById('coal2').getElementsByTagName('img')[0];
                  // gsap.to(coal2, { attr: { src: 'assets/exp12/spoonBurn.png' }, delay: 1 });
                  break;

                case 'spoon':
               
                if(imgSpoon == 'spoonCoal.png'){
                  let spoon = <HTMLElement>document.getElementById('spoon').getElementsByTagName('img')[0];
                  gsap.to(spoon, { attr: { src: 'assets/exp12/spoonBurn.png' }, delay: 1 });
                }
                  break;

                default:
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            } else if (this.hitTest('#oxygen') && this.target.id != 'oxygen' && imgSpoon == 'spoonBurn.png') {

              switch (this.target.id) {
                // oxCoal
                case 'spoon':
                  let oxygen = <HTMLElement>document.getElementById('oxygen').getElementsByTagName('img')[0];
                  gsap.to(oxygen, { attr: { src: 'assets/exp12/oxCoal.png' } });
                  gsap.to(this.target, { opacity: 0 , display: 'none'});
                  break;

                case 'flower':
                  if (imgBurn == 'lastRes.png' && this.target.id == 'flower') {
                    gsap.to(this.target, { css: { zIndex: 2 } });
                    let flower = <HTMLElement>document.getElementById('flower').getElementsByTagName('img')[0];
                    gsap.to(flower, { attr: { src: 'assets/exp12/redFlower.png' }, delay: 2 });

                    // reset_tools.map(t =>gsap.to(t,{x:0,y:0,duration:1}));
                    setTimeout(() => {
                      reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                      $('#exampleModalCenter').modal('show');
                      // video.play();
                    }, 3000);
                  }
                  break;
                default:
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            } else if (this.hitTest('#hitplace') && imgBurn == 'oxCoal.png') {
              let water = <HTMLElement>document.getElementById('water');
              let bool = <HTMLElement>document.getElementById('bool');
              gsap.to(water, { opacity: 1, duration: 2 });
              gsap.to(bool, { display: 'inline', duration: 2, delay: 2 });
              gsap.to(water, { opacity: 0, duration: 2, delay: 1 });
              let oxygen = <HTMLElement>document.getElementById('oxygen').getElementsByTagName('img')[0];
              gsap.to(oxygen, { attr: { src: 'assets/exp12/waterCoal.png' }, delay: 1 });
              gsap.fromTo(
                document.getElementById('oxygen'), 1,
                { y: this.y, x: this.x, rotation: 0 },
                {
                  y: this.y, x: this.x, rotation: 20, ease: Power1.easeInOut,
                  repeat: 5, yoyo: true,
                });
              gsap.to(oxygen, { attr: { src: 'assets/exp12/lastRes.png' }, delay: 6 });
            }
          } else {
            gsap.to(this.target, { y: 0, x: 0, duration: 1 });
          }
        }
      });
    });

  }

  // FillWater() {
  //   let t = $('#current').find('#fill_glass');
  //   // console.log(this.water.nativeElement);
  //   gsap.to(this.water.nativeElement, { opacity: 1, duration: 2 });
  //   gsap.to(t, { display: 'inline', duration: 2, delay: 1 });
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
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/13']);
  }
}
