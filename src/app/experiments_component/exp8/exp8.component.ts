import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp8',
  templateUrl: './exp8.component.html',
  styleUrls: ['./exp8.component.scss']
})
export class Exp8Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  @ViewChild('glass') glass: ElementRef;
  @ViewChild('glasswater') glassImg: ElementRef;
  @ViewChild('someSand') someSand: ElementRef;
  @ViewChild('someSalt') someSalt: ElementRef;
  @ViewChild('cup') cup: ElementRef;
  @ViewChild('interact') interact: ElementRef;
  @ViewChild('salt_interact') salt_interact: ElementRef;
  @ViewChild('holder') holder: ElementRef;
  @ViewChild('holderCrash') holderCrash:ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = "فصل مخلوط من المواد الصلبة والسائلة";
  id = "8"

  constructor(private location: Location, private router: Router) {
    gsap.registerPlugin(Draggable);
  }




  ngOnInit() {
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  ngAfterViewInit() {
    let space = this.workspace.nativeElement;
    let Con=this.con.nativeElement;
    let glass = this.glass.nativeElement;
    let sand = this.someSand.nativeElement;
    let salt = this.someSalt.nativeElement;
    let glassImg = this.glassImg.nativeElement;
    let Cup = this.cup.nativeElement;
    let interact = this.interact.nativeElement;
    let salt_interact = this.salt_interact.nativeElement;
    let mixFlag = 0
    let filterFlag = false;
    let cupInstance;
    let holder = this.holder.nativeElement;
    let saltIn = false;
    //let mix=this.mixwater.nativeElement;
    let funnul_In_correct_place = false;
    let Cup_In_correct_place = false;
    let paper_In_correct_place = false;
    // let video = this.video.nativeElement;
    let reset_tools=[];
    let step_orders=[0,0,0,0,0];
    let holderCrash=this.holderCrash.nativeElement;


    //Drag Code
    this.tools.map(t => {
      reset_tools.push(t.nativeElement);
      Draggable.create(t.nativeElement, {
        type: "x,y",

        bounds: Con, edgeResistance: 0.65, inertia: true,

        onDragStart: function () {

          $('.toast').toast('hide');
          $("#" + this.target.id).tooltip('disable');

          if (this.target.id == "spoon") {
            //rotate spoon
            gsap.to(this.target, { rotation: -80, duration: 1 });
          }

        },
        onDragEnd: function () {


          if (this.hitTest(space)) {

            //to prevent experiment in tool space
            //new boundary
            this.applyBounds(space);


            //put sugar and salt in water
            if (this.hitTest(glass)) {
              switch (this.target.id) {
                case "sand":
                  gsap.to(this.target, { rotation: -45, duration: 1 })
                  gsap.to(sand, { display: 'inline', y: +55, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 1, delay: 1 });
                  gsap.to(this.target, { x: 0, y: 0, duration: 1, delay: 2 });
                  mixFlag = 2;
                  break;

                case "salt":
                  gsap.to(this.target, { rotation: -45, duration: 1 })
                  gsap.to(salt, { display: 'inline', y: +45, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 1, delay: 1 });
                  gsap.to(this.target, { x: 0, y: 0, duration: 1, delay: 2 });
                  (mixFlag == 0 || mixFlag == 1) ? mixFlag = 1 : mixFlag = 2;
                  saltIn = true;
                  break;

                case "spoon":
                  //rotate spoon
                  let tl = gsap.timeline({ repeat: 1, repeatDelay: 0.2 });
                  tl.to(this.target, { rotation: -100, duration: 1 });
                  tl.to(this.target, { rotation: -70, duration: 1 });
                  gsap.to(salt, { opacity: 0, duration: 2 });

                  if (mixFlag == 2) {
                    gsap.to(sand, { opacity: 0, duration: 2 });
                    gsap.to(glassImg, { attr: { src: "assets/exp8/dirtywater.png" }, delay: 2, duration: 2 });
                    ( saltIn == true)? step_orders[0]=1:step_orders[0]=0;
                  }

                  gsap.to(this.target, { x: 0, y: 0, duration: 1, delay: 4 });
                  break;


              }
            }


            if (this.target.id == "funnul" ) {
              if(step_orders[0]==1)
              {

                gsap.to(this.target, { x: -800, y: -230, duarion: 1 });
                gsap.to(this.target, { opacity: 0, duarion: 1 });

                holder.src = "assets/exp8/tool2.png";
                funnul_In_correct_place = true;
                step_orders[1]=1;
                //gsap.to(this.target,{width:'8%',position:'relative',top:'100px',right:'40px',duarion:1})
              }
              else
              {
                gsap.to(this.target, {x:0,y:0, duarion: 1 });
                this.applyBounds(Con);
              }
            }


            if (this.target.id == "paper" ) {
              if(step_orders[1] == 1)
              {
                  gsap.to(this.target, { css: { zIndex: 2 } })
                  if (funnul_In_correct_place) {
                    holder.src = "assets/exp8/tool3.png";
                    gsap.to(this.target, { opacity: 0, duration: 1 })
                    paper_In_correct_place = true;
                    step_orders[2]=1;
                  }
              }
              else
              {
                gsap.to(this.target, {x:0,y:0, duarion: 1 });
                this.applyBounds(Con);

              }
            }

            if (this.target.id == "cup" && this.hitTest(holderCrash,"30%")) {
              if(step_orders[2]==1)
              {
                Cup_In_correct_place = true;
                this.disable();
                cupInstance = this;
                step_orders[3]=1;
              }
              else
              {
                gsap.to(this.target, {x:0,y:0, duarion: 1 });
                this.applyBounds(Con);

              }
            }

            if (this.target.id == "glass" && this.hitTest(holder) && funnul_In_correct_place && paper_In_correct_place ) {

              if(step_orders[3]==1 )
              {
                  gsap.to(this.target, { rotation: -45, duration: 1 })
                  gsap.to(this.target, { rotation: 0, duration: 1, delay: 1 });
                  gsap.to(this.target, { x: 0, y: 0, duration: 1, delay: 2 });

                  if (Cup_In_correct_place) {

                    Cup.src = "assets/exp8/image-11.png";
                    cupInstance.enable();
                    filterFlag = true;
                    step_orders[4]=1;
                  }
              }
              else
              {
                gsap.to(this.target, {x:0,y:0, duarion: 1 });
                this.applyBounds(Con);

              }
            }


            if (this.target.id == "cup" && filterFlag && this.hitTest("#fire") && saltIn && this.target.id != "fire" ) {
             if(step_orders[4]==1 )
             {

              gsap.to(interact, { opacity: 1, duration: 1 });
              gsap.to(salt_interact, { display: 'inline', duarion: 1, delay: 1 });
              gsap.to(interact, { opacity: 0, duration: 2, delay: 2 });
              Cup.src = "assets/exp8/image-04.png";
              setTimeout(() => {

              reset_tools.map(t =>gsap.to(t,{x:0,y:0,'z-index': 0}));

                $('#exampleModalCenter').modal('show');
                // video.play();
              }, 2000)
             }
             else
             {
              gsap.to(this.target, {x:0,y:0, duarion: 1 });
              this.applyBounds(Con);

             }
              }

          }


        }
      });
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
    this.router.navigate(['experiment/9']);
  }
}
