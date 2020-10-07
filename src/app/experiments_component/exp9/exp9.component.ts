import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp9',
  templateUrl: './exp9.component.html',
  styleUrls: ['./exp9.component.scss']
})
export class Exp9Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  // @ViewChild('Boom') boom: ElementRef;
  title = "تجربة المغناطيسيه باستخدام الكهرباء";
  exp_Id = '9';

  constructor(private route: Router, private location: Location) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });


  }

  nailX: any
  nailY: any
  paperX: any
  paperY: any
  subX: any
  subY: any

  ngAfterViewInit() {
    // let video = this.video.nativeElement;
    let reset_tools = [];

    this.tools.map(t => {
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: "x,y",

        bounds: this.con.nativeElement, edgeResistance: 0.65, inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {
          if (this.hitTest('#workSpace')) {
            $('.toast').toast('hide');

            if (this.hitTest('#nail') && this.target.id != 'nail') {
              switch (this.target.id) {
                case 'wire':
                  let nail = document.getElementById('nail');
                  nail.removeChild(nail.firstChild);
                  // tslint:disable-next-line:max-line-length
                  nail.insertAdjacentHTML('afterbegin', '<img id="wiredNail" data-toggle="tooltip" style="width: 70%;" data-placement="left" src="assets/exp9/3.png"><span id="nailX" style="margin:0; position:absolute; bottom:82%; left: 4%; font-size: 15%;">x</span><span id="nailY" style="margin:0; position:absolute; bottom:11%; left: 4%; font-size: 20%;">x</span>');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                  break;
              }
            }


            let imgNail = document.getElementById('nail').getElementsByTagName('img')[0].src;
            let NameNail = imgNail.split('exp9/')[1];

            if (this.target.id == 'battery' && NameNail == '3.png') {
              if (this.hitTest('#nailX') && this.hitTest('#nailY')) {
                let battery = document.getElementById('battery');
                battery.classList.remove('DarkBatt');
                battery.classList.add('lightBatt');
                // let paper = document.querySelectorAll('#paper');
                // gsap.to(paper[0], { opacity: 0 });
                // gsap.to(paper[1], { opacity: 0 });
                // gsap.to(paper[2], { opacity: 0 });
                let paper = document.getElementById('paper');
                gsap.to(paper, { opacity: 0 });
                let paper1 = document.getElementById('paper1');
                gsap.to(paper1, { opacity: 1 });
                // let paper2 = document.getElementById('paper2');
                // gsap.to(paper2, { opacity: 1 });
                // let paper3 = document.getElementById('paper3');
                // gsap.to(paper3, { opacity: 1 });
              }
              else {
                let battery = document.getElementById('battery');
                if (battery.classList[1] == 'lightBatt') {
                  setTimeout(() => {
                    reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                    $('#exampleModalCenter').modal('show');
                    // video.play();
                  }, 1000);
                }
                battery.classList.add('DarkBatt');
                battery.classList.remove('lightBatt');
                // let paper = document.querySelectorAll('#paper');
                // gsap.to(paper[0], { duration: 1, opacity: 1 });
                // gsap.to(paper[1], { duration: 1, opacity: 1 });
                // gsap.to(paper[2], { duration: 1, opacity: 1 });
                // let paper1 = document.getElementById('paper1');
                // gsap.to(paper1, { opacity: 0 });
                // let paper2 = document.getElementById('paper2');
                // gsap.to(paper2, { opacity: 0 });
                // let paper3 = document.getElementById('paper3');
                // gsap.to(paper3, { opacity: 0 });
                let paper = document.getElementById('paper');
                gsap.to(paper, { duration: 1, opacity: 1 });
                let paper1 = document.getElementById('paper1');
                gsap.to(paper1, { opacity: 0 });
              }
            }

            if (this.target.id == 'nail' && NameNail == '3.png') {
              if (this.hitTest('#batteryhit') && this.hitTest('#batteryhit1')) {
                let battery = document.getElementById('battery');
                battery.classList.remove('DarkBatt');
                battery.classList.add('lightBatt');
                // let paper = document.querySelectorAll('#paper');
                // gsap.to(paper[0], { opacity: 0 });
                // gsap.to(paper[1], { opacity: 0 });
                // gsap.to(paper[2], { opacity: 0 });
                // let paper1 = document.getElementById('paper1');
                // gsap.to(paper1, { opacity: 1 });
                // let paper2 = document.getElementById('paper2');
                // gsap.to(paper2, { opacity: 1 });
                // let paper3 = document.getElementById('paper3');
                // gsap.to(paper3, { opacity: 1 });
                let paper = document.getElementById('paper');
                gsap.to(paper, { opacity: 0 });
                let paper1 = document.getElementById('paper1');
                gsap.to(paper1, { opacity: 1 });
              }
              else {
                let battery = document.getElementById('battery');
                if (battery.classList[1] == 'lightBatt') {
                  setTimeout(() => {
                    reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                    $('#exampleModalCenter').modal('show');
                    // video.play();
                  }, 1000);
                }
                battery.classList.add('DarkBatt');
                battery.classList.remove('lightBatt');
                let paper = document.getElementById('paper');
                gsap.to(paper, { duration: 1, opacity: 1 });
                let paper1 = document.getElementById('paper1');
                gsap.to(paper1, { opacity: 0 });
                // let paper = document.querySelectorAll('#paper');
                // gsap.to(paper[0], { duration: 1, opacity: 1 });
                // gsap.to(paper[1], { duration: 1, opacity: 1 });
                // gsap.to(paper[2], { duration: 1, opacity: 1 });
                // let paper1 = document.getElementById('paper1');
                // gsap.to(paper1, { opacity: 0 });
                // let paper2 = document.getElementById('paper2');
                // gsap.to(paper2, { opacity: 0 });
                // let paper3 = document.getElementById('paper3');
                // gsap.to(paper3, { opacity: 0 });
              }
            }
          }
          else {
            gsap.to(this.target, { y: 0, x: 0, duration: 1 });
          }
        }
      })
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
  BackToSteps() {
    this.location.back();
  }
  GoNext() {
    // $('#next').tooltip('hide');
    this.route.navigate(['experiment/10']);
  }
}
