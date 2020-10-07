import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp6',
  templateUrl: './exp6.component.html',
  styleUrls: ['./exp6.component.scss']
})
export class Exp6Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('fire') Candel: ElementRef;
  @ViewChild('duk') DUK: ElementRef;
  @ViewChild('tester') Cup: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = 'الكشف عن غاز ثاني أكسيد الكربون';
  exp_Id = '6';

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

    let C = this.Candel.nativeElement;
    let D = this.DUK.nativeElement;
    let Cup = this.Cup.nativeElement;

    let reset_tools = [];

    // let boom = this.boom.nativeElement;
    this.tools.map(t => {
      reset_tools.push(t.nativeElement);
      Draggable.create(t.nativeElement, {
        type: 'x,y',
        bounds: this.con.nativeElement, edgeResistance: 0.65, inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
          $('.toast').toast('hide');
          if (this.target.id == 'candel') {
            gsap.to(this.target, { css: { zIndex: 2 } })
          }
        },
        onDragEnd: function () {
          if (this.hitTest('#workSpace')) {
            let cand = document.getElementById('candel');
            let cover = document.getElementById('cover');
            let cloude = document.getElementById('cloude');
            let openedCandel = document.getElementById('opened');

            if (this.target.id == 'candel' && this.hitTest('#tester')) {
              // gsap.to(C, { attr: { src: 'assets/exp6/candel.png' }, delay: 1 });
              gsap.to(this.target, { opacity: 0 });
              gsap.to(this.target, { x: 0, y: 0, delay: 1 });
              // let openedCandel = document.getElementById('opened');
              gsap.to(openedCandel, { opacity: 1 });
            }
            if (this.target.id == 'cover' && this.hitTest('#testerhit') && openedCandel.style.opacity == '1') {
              let hit=document.getElementById("testerhit")
              gsap.to(hit, { opacity: 1 });
              gsap.to(cover, { opacity: 0 });
              gsap.to(D, { opacity: 1, delay: 2 });
              gsap.to(D, { opacity: 0.5, delay: 4 });
              // gsap.to(cand.getElementsByTagName('img')[0], { attr: { src: 'assets/exp6/candel_off.png' }, delay: 6 });
              gsap.to(cand, { x: 0, y: 0, delay: 2, opacity: 1 });
              gsap.to(openedCandel, { opacity: 0, delay: 2 });
              gsap.to(cover, { x: 0, y: 0, delay: 2 });
              gsap.to(cover, { opacity: 1 , delay : 2 });

              gsap.to(hit, { opacity: 0 , delay:2 });

            } else if (this.target.id == 'cover' && this.hitTest('#tester')) {
              gsap.to(this.target, { x: 0, y: 0 });
            }

            if (this.target.id == 'waterGear' && this.hitTest('#tester') && cloude.style.opacity == '0.5') {
              gsap.to(this.target, { rotation: -45, duration: 1 });
              gsap.to(this.target, { rotation: 0, duration: 1, delay: 1 });
              gsap.to(Cup, { attr: { src: 'assets/exp6/fill_cup.png' }, delay: 2 });
              gsap.to(this.target, { x: 0, y: 0, delay: 2 });
              setTimeout(() => {
                reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                $('#exampleModalCenter').modal('show');
                // video.play();
              }, 3000);
            } else if (this.target.id == 'waterGear' && this.hitTest('#tester')) {
              gsap.to(this.target, { x: 0, y: 0 });
            }
          } else {
            gsap.to(this.target, { y: 0, x: 0, duration: 1 });
          }
        },
      });

    });

  }

  Fire() {
    let C = this.Candel.nativeElement;
    C.src = 'assets/exp6/candel.png';
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
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/7']);
  }
}
