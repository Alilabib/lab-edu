
import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
// this line will allow you to use jQuery
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exp7',
  templateUrl: './exp7.component.html',
  styleUrls: ['./exp7.component.scss']
})
export class Exp7Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') worspace: ElementRef;
  @ViewChild('ironBottle') ironBottle: ElementRef;
  @ViewChild('sandBottle') sandBottle: ElementRef;
  @ViewChild('magneticBottle') magneticBottle: ElementRef;
  @ViewChild('paleta') paleta: ElementRef;
  @ViewChild('magneticTool') magneticTool: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;
  @ViewChild('plateCon') plateCon:ElementRef;

  title = "فصل مخلوط من مواد صلبة"
  id = "7";
  interaction = "assets/exp7/powderIron.png";

  constructor(private location: Location, private router: Router) {

    gsap.registerPlugin(Draggable);
  }

  ngAfterViewInit() {

    let Paleta = this.paleta.nativeElement;
    let magneticTool = this.magneticTool.nativeElement;
    let moveMag_flag = 0;
    let allpowder = false;
    let con = this.con.nativeElement;
    let space = this.worspace.nativeElement;
    // let video = this.video.nativeElement;
    let plateCon=this.plateCon.nativeElement;
    let reset_tools=[];

    this.tools.map(t => {
      reset_tools.push(t.nativeElement);
      
      var myDraggable = Draggable.create(t.nativeElement, {
        type: "x,y",

        bounds: con, edgeResistance: 1, inertia: true,
        onDragStart() {

          //close toast 
          $('.toast').toast('hide');
          $("#" + this.target.id).tooltip('disable');

        },
        onDragEnd: function () {


          if (this.hitTest(space)) {
            //to prevent experiment in tool space
            //new boundary 
            this.applyBounds(space);

            //to create mix between ironbowder and sand
            if (this.hitTest(Paleta) && this.target.id == "sand") {
              
              gsap.to(this.target,{display:'none',opacity:0,duration:0.3});
               Paleta.src = "assets/exp7/mixInP.png";
                moveMag_flag = 1;
            }

            //to create mix between ironbowder and sand
           /* if (this.hitTest("#plate") && this.target.id == "ironBowder") {
              allpowder = true;
            }*/

            if (this.target.id == "magnet")
            {

              if (moveMag_flag == 1  && this.hitTest(plateCon)) {
                magneticTool.src = "assets/exp7/magnetictool2.png";
                moveMag_flag = 2;
              }
              else if (moveMag_flag == 2 || (allpowder && moveMag_flag == 0)) {
                magneticTool.src = "assets/exp7/tool-04.png";
                Paleta.src = "assets/exp7/sand.png";
        //        gsap.to(ironMagnetic, { opacity: 0, duration: 2 });

                //End Experiment
                setTimeout(() => {
                  reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                  $('#exampleModalCenter').modal('show');
                  // video.play();

                  moveMag_flag=0;
                }, 2000);
              }
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
    $('#next').tooltip('hide');
    this.router.navigate(['experiment/8']);
  }
}
