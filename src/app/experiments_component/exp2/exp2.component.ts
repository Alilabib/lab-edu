import { Component, OnInit, ElementRef, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
// this line will allow you to use jQuery
declare var $: any;
declare var jsPlumb: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp2',
  templateUrl: './exp2.component.html',
  styleUrls: ['./exp2.component.scss']
})
export class Exp2Component implements OnInit, AfterViewInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  @ViewChild('rect1') rect1: ElementRef;
  @ViewChild('switchImg') SwitchImg: ElementRef;
  @ViewChild('lampImg') LampImg: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;
  SwitchFlag = 1;
  title = 'تجربة التوصيل الكهربائي'
  id = "3";

  constructor(private location: Location, private router: Router) {

    gsap.registerPlugin(Draggable);

  }


  ngAfterViewInit() {


    var common = {
      isSource: true,
      isTarget: true,
      endpoint: ["Dot", { radius: 7 }]
      //,
      //connector : "Straight"
    };

    let Con = this.con.nativeElement;
    let space = this.workspace.nativeElement;
    let Lamp_img = this.LampImg.nativeElement;
    let switch_img = this.SwitchImg.nativeElement;
    // let video = this.video.nativeElement;
    let reset_tools = [];
    let tools_instance=[];

    jsPlumb.deleteEveryEndpoint();


    this.tools.map(t => {
      reset_tools.push(t.nativeElement);


      Draggable.create(t.nativeElement, {
        type: " x , y",

        bounds: Con, edgeResistance: 1, inertia: true,
        onDragStart() {


          $('.toast').toast('hide');

          //to hide endpoints
          var eps = jsPlumb.getEndpoints(this.target);

          if (eps != undefined)
            for (var j = 0; j < eps.length; j++) {
              eps[j].setVisible(false);   // Set visibility of endpoint to false
            }



        },
        onDragEnd: function () {


          if (this.hitTest(space)) {

            $("#" + this.target.id).tooltip('disable');
            tools_instance.push(this);
            //to prevent experiment in tool space
            //new boundary
            this.applyBounds(space);

            var check_endPoint = jsPlumb.getEndpoints(this.target);


            if (check_endPoint == undefined) {
              // Add End Points ..
              if (this.target.id == "lamp") {
                jsPlumb.addEndpoint(this.target.id, {
                  anchor: "BottomLeft",

                  hoverPaintStyle: { fillStyle: "grey" }
                }, common);

                jsPlumb.addEndpoint(this.target.id, {
                  anchor: "BottomRight",
                  hoverPaintStyle: { fillStyle: "grey" }
                }, common);
              }
              else {
                jsPlumb.addEndpoint(this.target.id, {
                  anchor: "LeftMiddle",
                  cssClass: "endpointClass",
                  hoverPaintStyle: { fillStyle: "grey" }
                }, common);

                jsPlumb.addEndpoint(this.target.id, {
                  anchor: "RightMiddle",
                  cssClass: "endpointClass",
                  hoverPaintStyle: { fillStyle: "grey" }
                }, common);
              }
            }
            else {

              for (var j = 0; j < check_endPoint.length; j++) {
                check_endPoint[j].setVisible(true);   // Set visibility of endpoint to true


              }

              //to return endpoint to correct position..
              jsPlumb.repaintEverything();

            }





          }




        },

      });



    });


    //Connection
    jsPlumb.bind("connection", function (info) {

      if (!$($("#" + info.sourceId).get(0)).hasClass("on2")) {
        if ($($("#" + info.sourceId).get(0)).hasClass("on1")) {
          $($("#" + info.sourceId).get(0)).addClass("on2");
        }
        else {
          $($("#" + info.sourceId).get(0)).addClass("on1");
        }
      }

      if (!$($("#" + info.targetId).get(0)).hasClass("on2")) {
        if ($($("#" + info.targetId).get(0)).hasClass("on1")) {
          $($("#" + info.targetId).get(0)).addClass("on2");
        }
        else {
          $($("#" + info.targetId).get(0)).addClass("on1");
        }
      }


    });

    //when drag connection .. prevent self connection
    jsPlumb.bind("beforeDrop", function (info) {


      //prevent self connection
      if (info.sourceId === info.targetId) { //source and target ID's are same

        return false;
      }
      else {


        return true; // true for establishing new connection


      }
    });

    // when connection detached ..
    jsPlumb.bind("connectionDetached", function (info) {

      // DetachedConnectors ..

      // remove classes on1 or on2 ..
      if ($($("#" + info.sourceId).get(0)).hasClass("on2")) {
        $($("#" + info.sourceId).get(0)).removeClass("on2");
      }

      else
        if ($($("#" + info.sourceId).get(0)).hasClass("on1")) {
          $($("#" + info.sourceId).get(0)).removeClass("on1");
        }


      if ($($("#" + info.targetId).get(0)).hasClass("on2")) {
        $($("#" + info.targetId).get(0)).removeClass("on2");
      }

      else
        if ($($("#" + info.targetId).get(0)).hasClass("on1")) {
          $($("#" + info.targetId).get(0)).removeClass("on1");
        }


    });


    let switchFlag = 0;

    $("#switch").dblclick(function (e) {



      if ($(this)[0].className.includes("on2", 0)) {
        var Goodcircle = true;


        $(".on2").each(function (i, element) {


          if (element.id == "wood")
            Goodcircle = false;
          else
            if (element.id == "plastic")
              Goodcircle = false;



        });


        if (!$("#battery")[0].className.includes("on2", 0))
          Goodcircle = false;

        if ($(".on1:not(.on2)").length > 0)
          Goodcircle = false;




        if (Goodcircle) {

          if ($("#lamp")[0].className.includes("on2", 0)) {
            Lamp_img.src = "assets/exp2/lamp-on.png";

            setTimeout(() => {

              jsPlumb.deleteEveryEndpoint();
              switch_img.src = "assets/exp2/switch-off.png";
              Lamp_img.src = "assets/exp2/lamp-off.png"

              reset_tools.map(t => gsap.to(t, { x: 0, y: 0, 'z-index': 0}));
              tools_instance.map(t=>{t.applyBounds(Con)});

              $('#exampleModalCenter').modal('show');
              // video.play();
            }, 2500);
          }
        }
        else {

          Lamp_img.src = "assets/exp2/lamp-off.png"
        }


        if (switchFlag == 0) {
          switch_img.src = "assets/exp2/switch-on.png";
          switchFlag = 1;
        }
        else {
          switch_img.src = "assets/exp2/switch-off.png";
          Lamp_img.src = "assets/exp2/lamp-off.png"
          switchFlag = 0;
        }
      }
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

  onResize(event) {
    //to return endpoint to correct position..
    jsPlumb.repaintEverything();

  }

  stop() {
    // let video = this.video.nativeElement;
    // video.pause();
  }
  GoNext() {
    this.router.navigateByUrl("/experiment/4");

  }
}
