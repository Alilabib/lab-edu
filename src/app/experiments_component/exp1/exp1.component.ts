import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
// this line will allow you to use jQuery
declare var $;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exp1',
  templateUrl: './exp1.component.html',
  styleUrls: ['./exp1.component.scss']
})
export class Exp1Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') WorkSpace: ElementRef;
  @ViewChild('Boom') boom: ElementRef;
  @ViewChild('iron1') Iron: ElementRef;
  @ViewChild('iron2') IronInKer: ElementRef;
  @ViewChild('sod2') SodInKer: ElementRef;
  @ViewChild('cal2') CalInKer: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  id = '1';
  title = 'تجربة الصـوديوم';

  constructor(private location: Location, private router: Router) {
    gsap.registerPlugin(Draggable);
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

    let boom = this.boom.nativeElement;
    let con = this.con.nativeElement;
    let space = this.WorkSpace.nativeElement;
    let iron = this.Iron.nativeElement;
    let iron2 = this.IronInKer.nativeElement;
    let cal2 = this.CalInKer.nativeElement;
    let Sod2 = this.SodInKer.nativeElement;
    let waterInstance;
    let KerosenInstance;
    // let video = this.video.nativeElement;

    let exp_steps = [0,0,0,0,0,0]; //['ironwater','sodwater','Calwater','ironKerosen','SodKerosen','CalKerosen']
    let reset_tools=[];

    this.tools.map(t => {

      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: 'x,y',

        bounds: con, edgeResistance: 1, inertia: true,
        onDragStart() {

          // hide msg text
          $('.toast').toast('hide');
          $('#' + this.target.id).tooltip('disable');

        },
        onDragEnd: function () {

          if (this.hitTest(space)) {
            // to prevent experiment in tool space
            // new boundary
            this.applyBounds(space);

            switch(this.target.id)
            {
              case 'water': waterInstance = this; break;
              case 'kerosen': KerosenInstance = this; break;
              

            } 

            if (this.target.id != 'water' && this.target.id != 'kerosen') {

              gsap.to(this.target, { css: { zIndex: 2 } });

              if (this.hitTest('#crash') && this.target.id != 'crash') {

                switch (this.target.id) {
                  case 'iron':
                    gsap.to(this.target, { opacity: 0, duration: 1 });
                    gsap.to(iron, { opacity: 1, y: 30, duration: 2 });
                    gsap.to(iron, { opacity: 0, delay: 1, duration: 2 });
                    gsap.to(iron, { y: 0, delay: 3, duration: 1 })
                    exp_steps[0]= 1;
                    break;
                  case 'soduim':
                    // tslint:disable-next-line:max-line-length
                    gsap.fromTo(boom, { display: 'inline', opacity: 1, width: '3rem', top: '-26px', left: '10px' }, { display: 'none', opacity: 0, duration: 4 });
                    waterInstance.disable();
                    exp_steps[1]= 1;
                    break;
                  case 'cal':
                    // tslint:disable-next-line:max-line-length
                    gsap.fromTo(boom, { display: 'inline', opacity: 1, width: '4rem', top: '-43px', left: '10px' }, { display: 'none', opacity: 0, duration: 4 });
                    waterInstance.disable();
                    exp_steps[2]= 1;
                    break;
                }
                gsap.to(this.target, { y: 0, x: 0, opacity: 1, duration: 1, delay: 2 });
                // new boundary 
                this.applyBounds(con);
              } else if (this.hitTest('#kerosen') && this.target.id != 'kerosen') {
                // All Na & Ca * Fe matal have same reaction.
                switch (this.target.id) {
                  case 'iron':
                    gsap.to(this.target, { opacity: 0, duration: 1 });
                    gsap.to(iron2, { opacity: 1, y: 30, duration: 2 });
                    gsap.to(iron2, { opacity: 0, delay: 1, duration: 2 });
                    gsap.to(iron2, { y: 0, delay: 3, duration: 1 })
                    exp_steps[3]= 1;
                    break;
                  case 'cal':
                    gsap.to(this.target, { opacity: 0, duration: 1 });
                    gsap.to(cal2, { opacity: 1, y: 30, duration: 2 });
                    gsap.to(cal2, { opacity: 0, delay: 1, duration: 2 });
                    gsap.to(cal2, { y: 0, delay: 3, duration: 1 })
                    exp_steps[4]= 1;
                    break;
                  case 'soduim':
                    gsap.to(this.target, { opacity: 0, duration: 1 });
                    gsap.to(Sod2, { opacity: 1, y: 30, duration: 2 });
                    gsap.to(Sod2, { opacity: 0, delay: 2, duration: 2 });
                    gsap.to(Sod2, { y: 0, delay: 4, duration: 1 })
                    exp_steps[5]= 1;
                    break;
                }
                // gsap.to(this.target, {y:this.y+40, duration: 1});
                gsap.to(this.target, { opacity: 1, y: 0, x: 0, duration: 1, delay: 3 });
                // new boundary
                this.applyBounds(con);
              }

              if (! exp_steps.includes(0)) {
                setTimeout(() => {
                  reset_tools.map(t =>{
                    
                    gsap.to(t,{x:0,y:0,duration:1});
                    
                    waterInstance.applyBounds(con);
                    KerosenInstance.applyBounds(con);

                  });

                  $('#exampleModalCenter').modal('show');
                  // video.play();
                  waterInstance.enable();
                }, 4000);
                exp_steps.fill(0,0,6);
                console.log(exp_steps);
              }
            }

            if (this.target.id == 'water' && this.hitTest('#kerosen') || this.target.id == 'kerosen' && this.hitTest('#water')) {
              gsap.to(this.target, { y: 0, x: 0, duration: 1 });
              // new boundary
              this.applyBounds(con);
            }
          }
        },
      });
    });

  }


  ngOnInit() {
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
    this.router.navigate(['experiment/2']);
  }
}
