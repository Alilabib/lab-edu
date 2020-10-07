import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-exp3',
  templateUrl: './exp3.component.html',
  styleUrls: ['./exp3.component.scss']
})

export class Exp3Component implements OnInit {
  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  @ViewChild('water') water: ElementRef;
  @ViewChild('bool') bool: ElementRef;
  @ViewChildren('fill_glass') fill_glass: ElementRef[];
  @ViewChildren('water1') glasses: ElementRef[];
  @ViewChildren('oils') points: ElementRef[];
  @ViewChildren('salts') salt: ElementRef[];
  @ViewChildren('sugercube') sugercube: ElementRef[];
  @ViewChildren('touchSpoon') touchSpoon: ElementRef[];
  // @ViewChild('videoPlayer') video: ElementRef;

  id = "2";
  title = "الماء مذيب قطبي";
  glasses_separate=[];

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
    let bool = this.water.nativeElement;
    let space = this.workspace.nativeElement;
    let Con=this.con.nativeElement;
    // let video = this.video.nativeElement;

    //tools
    let reset_tools = [];

    //oil
    let pointsInglass = [];
    this.points.map((p) => {
      pointsInglass.push(p.nativeElement);
    })

    //salt
    let saltInglass = [];
    this.salt.map((p) => {
      saltInglass.push(p.nativeElement);
    })


    //sugar
    let sugarInglass = [];
    this.sugercube.map((p) => {
      sugarInglass.push(p.nativeElement);
    })

    let glasseswater = [];
    this.glasses.map((g) => {
      glasseswater.push(g.nativeElement);
    })


    let spoonTouch = [];
    this.touchSpoon.map((g) => {
      spoonTouch.push(g.nativeElement);
    })

    let glasses_separate=[];
    let exp_steps = 0;

    //Drag Code
    this.tools.map(t => {

      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: "x,y",

        bounds:Con, edgeResistance: 1, inertia: true,
        onDragStart: function () {

          $('.toast').toast('hide');

          if (this.target.id == "spoon") {
            //rotate spoon
            gsap.to(this.target, { rotation: -80, duration: 1 });
          }

        },
        onDragEnd: function () {



          if (this.hitTest(space)) {

            $("#" + this.target.id).tooltip('disable');
            //to prevent experiment in tool space
            //new boundary
            this.applyBounds(space);


            //for water glass to fill them
            if (this.target.className == "col-3 glass") {

              if (this.hitTest(bool)) {
                this.target.id = "current";
                let t = $('#current').find('#fill_glass');

                // gsap.to(this.water.nativeElement, { opacity: 1, duration: 2 });
                gsap.to(t, { display: 'inline', duration: 1 });
                // gsap.to(this.water.nativeElement, { opacity: 0, duration: 2, delay: 1 });

                $('#current')[0].className = "col-3 full_glass";

                $('#current')[0].id = "glass";
              }
              else {
                this.target.id = "glass";
              }
            }

         /*
            if(glasses_separate.length == 3)
            {

              switch(this.target)
            {
              case glasses_separate[0] :
                    if(this.hitTest(glasses_separate[1]) || this.hitTest(glasses_separate[2]))
                    {
                      gsap.to(this,{x:0,y:0,duration:1});
                      this.applyBounds(Con);
                    }

                break;

              case glasses_separate[1] :
                if(this.hitTest(glasses_separate[0]) || this.hitTest(glasses_separate[2]))
                    {
                      gsap.to(this,{x:0,y:0,duration:1});
                      this.applyBounds(Con);
                    }
                break;

              case glasses_separate[2] :
                if(this.hitTest(glasses_separate[0]) || this.hitTest(glasses_separate[1]))
                    {
                      gsap.to(this,{x:0,y:0,duration:1});
                      this.applyBounds(Con);
                    }
                break;

              }
             }

             */
            //for interaction
            for (let index = 0; index < 3; index++) {

              //salt,sugar and oil in glasses
              if (this.hitTest(glasseswater[index],'50%') && this.target.className != "col-3 glass" && this.target.className != "col-3 full_glass") {
                if (this.target.id == "oil") {
                  //only oil in glass
                  if (glasseswater[index].id == "sugar" || glasseswater[index].id == "salt") {
                    gsap.to(this.target, { x: 0, y: 0, duration: 1 });
                  }
                  else {
                    gsap.to(this.target, { rotation: -45, duration: 1 });
                    gsap.to(pointsInglass[index], { opacity: 1, bottom: '15px', duration: 2 })


                    //to know which glass has salt or sugar or oil
                    glasseswater[index].id = this.target.id


                    gsap.to(this.target, { rotation: 0, duration: 1, delay: 1 });
                    gsap.to(this.target, { x: 0, y: 0, duration: 1, delay: 4 });
                  }
                }

                else if (this.target.id == "sugar") {
                  if (glasseswater[index].id == "oil" || glasseswater[index].id == "salt") {
                    gsap.to(this.target, { x: 0, y: 0, duration: 1 });
                  }
                  else {
                    gsap.to(sugarInglass[index], { opacity: 1, bottom: '15px', duration: 2 })
                    gsap.to(this.target, { opacity: 0, duration: 1 });

                    //to know which glass has salt or sugar or oil
                    glasseswater[index].id = this.target.id
                  }
                }
                else if (this.target.id == "salt") {
                  if (glasseswater[index].id == "sugar" || glasseswater[index].id == "oil") {
                    gsap.to(this.target, { x: 0, y: 0, duration: 1 });
                  }
                  else {
                    gsap.to(this.target, { rotation: -45, duration: 1 });
                    gsap.to(saltInglass[index], { opacity: 1, bottom: '15px', duration: 2 })

                    //to know which glass has salt or sugar or oil
                    glasseswater[index].id = this.target.id

                    gsap.to(this.target, { rotation: 0, duration: 1, delay: 1 });
                    gsap.to(this.target, { x: 0, y: 0, duration: 1, delay: 3 });
                  }
                }

              }


              //to move spoon in glass in soft way
              if (this.target.id == "spoon" && this.hitTest(spoonTouch[index], "50%")) {
                //rotate spoon
                let tl = gsap.timeline({ repeat: 1, repeatDelay: 0.2 });
                tl.to(this.target, { rotation: -100, duration: 1 });
                tl.to(this.target, { rotation: -70, duration: 1 });

                //check if there is water in glass
                let check_water = $('#' + glasseswater[index].id).parent()[0].className;


                if (check_water == "col-3 full_glass") {
                  switch (glasseswater[index].id) {
                    case "sugar":
                      gsap.to(sugarInglass[index], { opacity: 0, duration: 2 })
                      exp_steps += 1;
                      break;
                    case "salt":
                      gsap.to(saltInglass[index], { opacity: 0, duration: 2 })
                      exp_steps += 1;
                      break;
                    case "oil":
                      gsap.to(pointsInglass[index], { opacity: 1, bottom: '40px', duration: 2 })
                      exp_steps += 1;
                      break;
                  }
                }


              }
            }


            //End_experiment
            if (exp_steps == 3) {
              setTimeout(
                () => {

                  reset_tools.map(t => gsap.to(t, { x: 0, y: 0, 'z-index': 0 }));

                  $('#exampleModalCenter').modal('show');
                  // video.play();

                }
                , 4000);
              exp_steps = 0;


            }

          }
        }
      });

    });

  }


  FillWater() {


    let t = $('#current').find('#fill_glass');


    //$('#current').find('.glassOfWater')[0].id ="full_glass";


    gsap.to(this.water.nativeElement, { opacity: 1, duration: 2 });
    // gsap.to(t, { display: 'inline', duration: 2, delay: 1 });
    gsap.to(this.water.nativeElement, { opacity: 0, duration: 2, delay: 1 });


    $('#current')[0].className = "col-3 full_glass";

    $('#current')[0].id = "glass";


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
    this.router.navigateByUrl('/experiment/3');
  }
}
