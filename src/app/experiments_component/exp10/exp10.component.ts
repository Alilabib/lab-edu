import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
declare var $: any;
import gsap from './../../../../node_modules/gsap/dist/gsap';
import Power1 from './../../../../node_modules/gsap/dist/EasePack';
import Draggable from './../../../../node_modules/gsap/Draggable';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp10',
  templateUrl: './exp10.component.html',
  styleUrls: ['./exp10.component.scss']
})
export class Exp10Component implements OnInit, AfterViewInit {
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

  title = 'تأثير كمية المذيب في الذوبان';
  exp_Id = '10';

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
    // let thes = this;

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

    this.tools.map(t => {
      reset_tools.push(t.nativeElement);
      Draggable.create(t.nativeElement, {
        type: 'x , y',
        bounds: this.con.nativeElement,
        edgeResistance: 0.65,
        inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
          $('#' + this.target.id).children().tooltip('disable');
        },
        onDragEnd: function () {
          //  const water = $("#wat");
          //  gsap.from(water,1, {y: 180});

          if (this.hitTest('#workSpace')) {
            let bott150 = document.getElementById('bottle-150');
            let bott300 = document.getElementById('bottle-300');

            if (this.hitTest('#tap') && this.target.id != 'tap') {
              switch (this.target.id) {
                case 'bottle-150':
                  bott150.removeChild(bott150.firstChild);
                  // tslint:disable-next-line:max-line-length
                  bott150.insertAdjacentHTML('afterbegin', '<img  style="opacity: 0.5;" src="assets/exp10/water-150.png">');
                  break;
                case 'bottle-300':
                  bott300.removeChild(bott300.firstChild);
                  // tslint:disable-next-line:max-line-length
                  bott300.insertAdjacentHTML('afterbegin', '<img style="opacity: 0.5;" src="assets/exp10/water-300.png">');
                  break;
              }
            }

            let boot1 = document.getElementById('bottle-150').getElementsByTagName('img')[0].src;
            let scrNew1 = boot1.split('exp10/')[1];
            let boot2 = document.getElementById('bottle-300').getElementsByTagName('img')[0].src;
            let scrNew2 = boot2.split('exp10/')[1];

            if (this.hitTest('#bottle-150') && this.target.id != 'bottle-150' && scrNew1 == 'water-150.png') {
              switch (this.target.id) {
                case 'sugar1':
                  let bott1 = document.getElementById('bottle-150');
                  bott1.getElementsByTagName('img')[1].style.opacity = '1';
                  // gsap.to(this.target, { opacity: 0 });
                  gsap.to(this.target, { y: 0, x: 0 });

                  break;
                case 'bottle-300':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
                case 'sugar2':
                  let bottle3 = document.getElementById('bottle-150');
                  bottle3.getElementsByTagName('img')[1].style.opacity = '1';
                  // gsap.to(this.target, { opacity: 0 });
                  gsap.to(this.target, { y: 0, x: 0 });
                  break;
                case 'tube2':
                  let bottl1 = document.getElementById('bottle-150');
                  if (this.hitTest('#spoonhit') && bottl1.getElementsByTagName('img')[1].style.opacity == '1') {
                    gsap.fromTo(
                      this.target, 1,
                      { y: this.y, x: this.x, rotation: 0 },
                      {
                        y: this.y, x: this.x, rotation: 20, ease: Power1.easeInOut,
                        repeat: 7, yoyo: true,
                      });
                    let sugar = document.getElementById('bottle-150').getElementsByTagName('img')[1];
                    (function () {
                      var seconds: any = document.getElementById('countdown').textContent = '0';
                      document.getElementById('timer1').style.opacity = '1';
                      var countdown = setInterval(function () {
                        seconds++;
                        document.getElementById('countdown').textContent = seconds;
                        if (seconds == 6) {
                          clearInterval(countdown);
                          gsap.to(sugar, { opacity: 0 });
                        }
                      }, 1000);
                      setTimeout(() => {
                        bott150.removeChild(bott150.firstChild);
                        // tslint:disable-next-line:max-line-length
                        bott150.insertAdjacentHTML('afterbegin', '<img style="opacity: 0.5;" src="assets/exp10/waterSugar-150.png">');
                        let boot150 = document.getElementById('bottle-150').getElementsByTagName('img')[0].src;
                        let sug150 = boot150.split('exp10/')[1];
                        let boot300 = document.getElementById('bottle-300').getElementsByTagName('img')[0].src;
                        let sug300 = boot300.split('exp10/')[1];
                        if (sug150 == 'waterSugar-150.png' && sug300 == 'waterSugar-300.png') {

                          reset_tools.map(t => gsap.to(t, { 'z-index': 0, duration: 1 }));

                          $('#exampleModalCenter').modal('show');
                          // video.play();
                        }
                      }, 6000);
                    })();
                  } else {
                    gsap.to(this.target, 1, { x: 0, y: 0 });
                  }
                  break;
                case 'tube1':
                  let bottl12 = document.getElementById('bottle-150');
                  if (this.hitTest('#spoonhit') && bottl12.getElementsByTagName('img')[1].style.opacity == '1') {
                    gsap.fromTo(
                      this.target, 1,
                      { y: this.y, x: this.x, rotation: 0 },
                      {
                        y: this.y, x: this.x, rotation: 20, ease: Power1.easeInOut,
                        repeat: 7, yoyo: true,
                      });
                    let sugar = document.getElementById('bottle-150').getElementsByTagName('img')[1];
                    (function () {
                      var seconds: any = document.getElementById('countdown').textContent = '0';
                      document.getElementById('timer1').style.opacity = '1';
                      var countdown = setInterval(function () {
                        seconds++;
                        document.getElementById('countdown').textContent = seconds;
                        if (seconds == 6) {
                          clearInterval(countdown);
                          gsap.to(sugar, { opacity: 0 });
                        }
                      }, 1000);
                      setTimeout(() => {
                        bott150.removeChild(bott150.firstChild);
                        // tslint:disable-next-line:max-line-length
                        bott150.insertAdjacentHTML('afterbegin', '<img style="opacity: 0.5;" src="assets/exp10/waterSugar-150.png">');
                        let boot150 = document.getElementById('bottle-150').getElementsByTagName('img')[0].src;
                        let sug150 = boot150.split('exp10/')[1];
                        let boot300 = document.getElementById('bottle-300').getElementsByTagName('img')[0].src;
                        let sug300 = boot300.split('exp10/')[1];
                        if (sug150 == 'waterSugar-150.png' && sug300 == 'waterSugar-300.png') {
                          reset_tools.map(t => gsap.to(t, { 'z-index': 0, duration: 1 }));

                          $('#exampleModalCenter').modal('show');
                          // video.play();
                        }
                      }, 6000);
                    })();
                  } else {
                    gsap.to(this.target, 1, { x: 0, y: 0 });
                  }
                  break;
              }
            } else if (this.hitTest('#bottle-300') && this.target.id != 'bottle-300' && scrNew2 == 'water-300.png') {
              switch (this.target.id) {
                case 'sugar2':
                  let botle3 = document.getElementById('bottle-300');
                  botle3.getElementsByTagName('img')[1].style.opacity = '1';
                  // gsap.to(this.target, { opacity: 0 });
                  gsap.to(this.target, { y: 0, x: 0 });
                  break;
                case 'bottle-150':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
                case 'sugar1':
                  let bott3 = document.getElementById('bottle-300');
                  bott3.getElementsByTagName('img')[1].style.opacity = '1';
                  // gsap.to(this.target, { opacity: 0 });
                  gsap.to(this.target, { y: 0, x: 0 });
                  break;
                case 'tube1':
                  let bottle1 = document.getElementById('bottle-300');
                  if (this.hitTest('#spoonhit1') && bottle1.getElementsByTagName('img')[1].style.opacity == '1') {
                    gsap.fromTo(
                      this.target, 1,
                      { y: this.y, x: this.x, rotation: 0 },
                      {
                        y: this.y, x: this.x, rotation: 20, ease: Power1.easeInOut,
                        repeat: 7, yoyo: true,
                      });
                    let sugar = document.getElementById('bottle-300').getElementsByTagName('img')[1];
                    // let sugar = <HTMLElement>document.getElementById('sugar1');

                    (function () {
                      var seconds: any = document.getElementById('countdown1').textContent = '0';
                      document.getElementById('timer2').style.opacity = '1';
                      var countdown1 = setInterval(function () {
                        seconds++;
                        document.getElementById('countdown1').textContent = seconds;
                        if (seconds == 3) {
                          clearInterval(countdown1);
                          gsap.to(sugar, { opacity: 0 });
                        }
                      }, 1000);
                      setTimeout(() => {
                        bott300.removeChild(bott300.firstChild);
                        // tslint:disable-next-line:max-line-length
                        bott300.insertAdjacentHTML('afterbegin', '<img style="opacity: 0.5;" src="assets/exp10/waterSugar-300.png">');
                        let boot150 = document.getElementById('bottle-150').getElementsByTagName('img')[0].src;
                        let sug150 = boot150.split('exp10/')[1];
                        let boot300 = document.getElementById('bottle-300').getElementsByTagName('img')[0].src;
                        let sug300 = boot300.split('exp10/')[1];
                        if (sug150 == 'waterSugar-150.png' && sug300 == 'waterSugar-300.png') {
                        reset_tools.map(t => gsap.to(t, { 'z-index': 0, duration: 1 }));

                          $('#exampleModalCenter').modal('show');
                          // video.play();
                        }
                      }, 3000);
                    })();
                  } else {
                    gsap.to(this.target, 1, { x: 0, y: 0 });
                  }
                  break;
                case 'tube2':
                  let bottl1_0 = document.getElementById('bottle-300');
                  if (this.hitTest('#spoonhit1') && bottl1_0.getElementsByTagName('img')[1].style.opacity == '1') {
                    gsap.fromTo(
                      this.target, 1,
                      { y: this.y, x: this.x, rotation: 0 },
                      {
                        y: this.y, x: this.x, rotation: 20, ease: Power1.easeInOut,
                        repeat: 3, yoyo: true,
                      });
                    let sugar = document.getElementById('bottle-300').getElementsByTagName('img')[1];

                    (function () {
                      var seconds: any = document.getElementById('countdown1').textContent = '0';
                      document.getElementById('timer2').style.opacity = '1';

                      var countdown1 = setInterval(function () {
                        seconds++;
                        document.getElementById('countdown1').textContent = seconds;
                        if (seconds == 3) {
                          clearInterval(countdown1);
                          gsap.to(sugar, { opacity: 0 });
                        }
                      }, 1000);
                    setTimeout(() => {
                      bott300.removeChild(bott300.firstChild);
                      // tslint:disable-next-line:max-line-length
                      bott300.insertAdjacentHTML('afterbegin', '<img data-toggle="tooltip" style="opacity: 0.5;" src="assets/exp10/waterSugar-300.png">');
                      let boot150 = document.getElementById('bottle-150').getElementsByTagName('img')[0].src;
                      let sug150 = boot150.split('exp10/')[1];
                      let boot300 = document.getElementById('bottle-300').getElementsByTagName('img')[0].src;
                      let sug300 = boot300.split('exp10/')[1];
                      if (sug150 == 'waterSugar-150.png' && sug300 == 'waterSugar-300.png') {
                        reset_tools.map(t => gsap.to(t, { 'z-index': 0, duration: 1 }));

                        $('#exampleModalCenter').modal('show');
                        // video.play();
                      }
                    }, 3000);
                  })();
                  } else {
                    gsap.to(this.target, 1, { x: 0, y: 0 });
                  }
                  break;
              }
            } else {
              switch (this.target.id) {
                case 'sugar1':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
                case 'sugar2':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
                case 'tube1':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
                case 'tube2':
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  break;
              }
            }
          }
          else {
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

  BackToSteps() {
    this.location.back();
  }

  stop() {
    // let video = this.video.nativeElement;
    // video.pause();
  }
  GoNext() {
    // $('#next').tooltip('hide');
    this.route.navigate(['experiment/11']);
  }
}
