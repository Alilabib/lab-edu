
import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
// this line will allow you to use jQuery
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exp4',
  templateUrl: './exp4.component.html',
  styleUrls: ['./exp4.component.scss']
})
export class Exp4Component implements OnInit {


  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  @ViewChildren('head') heads:ElementRef[];
  @ViewChild('crash') Crash:ElementRef;
  title = "تجربة اختلاف المواد في توصيلها للحرارة"
  id = "4"
  // @ViewChild('hotWater') hotWater: ElementRef;
  @ViewChild('water') heater: ElementRef;
  @ViewChild('Altube') almanyum: ElementRef;
  @ViewChild('irontube') Iron: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  constructor(private location: Location, private router: Router) {

    gsap.registerPlugin(Draggable);
  }

  ngAfterViewInit() {

    let space = this.workspace.nativeElement;
    let waterIsheat = false;
    let iron = this.Iron.nativeElement;
    let al = this.almanyum.nativeElement;
    let Heater = this.heater.nativeElement;
    // let video = this.video.nativeElement;
    let exp_steps = 0;
    let reset_tools=[];
    let crash=this.Crash.nativeElement;
    let headsOftube=[];
    this.heads.map(h=>headsOftube.push(h.nativeElement));

    this.tools.map(t => {
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: "x,y",
        bounds: this.con.nativeElement, edgeResistance: 1, inertia: true,
        onDragStart() {
          $('.toast').toast('hide');
          $("#" + this.target.id).tooltip('disable');
        },
        onDragEnd: function (e) {


          if (this.hitTest(space)) {
            //to prevent experiment in tool space
            //new boundary
            this.applyBounds(space);

            if (this.hitTest('#fire') && this.target.id == "water") {
              gsap.to("#fire", { opacity: 0, display: 'none', duration: 0.5 });
              gsap.to(Heater, { attr: { src: "assets/exp4/Mixheater.png" }, duration: 1 });
              this.disable();
              waterIsheat = true;
            }


            if (this.hitTest(crash,"50%") && this.target.id != "water") {

              gsap.to(this.target, { css: { zIndex: 2 } });

              if (waterIsheat) {
                switch (this.target.id) {
                  case "al":
                    this.disable();
                    gsap.to(al, { attr: { src: "assets/exp4/AlTube_heat.png" }, delay: 2, duration: 1 });
                    gsap.to(this.target, { x: 0, y: 0, delay: 5, duration: 1 });
                    exp_steps += 1;
                    break;
                  case "iron":

                    this.disable();
                    gsap.to(iron, { attr: { src: "assets/exp4/ironTube_heat.png" }, delay: 2, duration: 1 });
                    gsap.to(this.target, { x: 0, y: 0, delay: 5, duration: 1 });
                    exp_steps += 1;
                    break;

                  case "wood":
                  case "plastic":
                    this.disable();
                    gsap.to(this.target, { x: 0, y: 0, delay: 5, duration: 1 });
                    exp_steps += 1;
                    break;
                }


                if (exp_steps == 4) {
                  setTimeout(() => {
                    reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                    $('#exampleModalCenter').modal('show');
                    // video.play();
                  }, 2300);
                  exp_steps = 0;


                }

              }
            }


          }
        },


      });

    });

  }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
    console.log(this.heater.nativeElement)
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  Close() {
    $('.toast').toast('hide');
  }

  BackToSteps() {
    this.location.back();
  }

  stop() {
    // let video = this.video.nativeElement;
    // video.pause();
  }
  GoNext() {
    $('#next').tooltip('hide');
    this.router.navigate(['experiment/5']);
  }
}
