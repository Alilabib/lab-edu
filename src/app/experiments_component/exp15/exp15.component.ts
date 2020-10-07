import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exp15',
  templateUrl: './exp15.component.html',
  styleUrls: ['./exp15.component.scss']
})
export class Exp15Component implements OnInit {


  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = "الضوء يسير في خطوط مستقيمة";
  id = "15";


  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
  }


  ngAfterViewInit() {

    //let location=this.boards_location;
    //let lamp_location;
    let exp_end = 0;
    // let video = this.video.nativeElement;
    let space = this.workspace.nativeElement;
    let Con=this.con.nativeElement;
    let lamphere = false;
    let boards = [];
    let tools_instance=[];
    let trys = [0, 0, 0];

    this.tools.map(t => {
      if (t.nativeElement.id != "lamp") {
        boards.push(t.nativeElement);
      }
    })

    this.tools.map(t => {

      Draggable.create(t.nativeElement, {
        type: "x,y",

        bounds: Con, edgeResistance: 1, inertia: true,
        onDragStart() {

          //hide msg text
          $('.toast').toast('hide');
          $("#" + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {


          if (this.hitTest(space)) {
            //to prevent experiment in tool space
            //new boundary 
            this.applyBounds(space);
            tools_instance.push(this);

            if (this.hitTest("#lamp")) {
              lamphere = true;

            }

            if (lamphere) {

              if (this.target.id == "0") {

                if (this.hitTest(boards[1], "90%") || this.hitTest(boards[2], "90%")) {

                  if (trys[0] == 0) {
                    console.log("Done1");
                    exp_end += 1;
                    trys[0] = 1;
                  }
                }
              }


              if (this.target.id == "1") {
                if (this.hitTest(boards[0], "90%") || this.hitTest(boards[2], "90%")) {

                  if (trys[1] == 0) {
                    console.log("Done2");
                    exp_end += 1;
                    trys[1] = 1;
                  }
                }
              }


              if (this.target.id == "2") {
                if (this.hitTest(boards[0], "90%") || this.hitTest(boards[1], "90%")) {
                  if (trys[2] == 0) {
                    console.log("Done3");
                    exp_end += 1;
                    trys[2] = 1;
                  }
                }
              }


              if (exp_end >= 2) {
                setTimeout(() => {

                  gsap.to("#lamp", { x: 0, y: 0, 'z-index': 0 });

                  for (let i = 0; i < 3; i++)
                    gsap.to(boards[i], { x: 0, y: 0, 'z-index': 0 })

                  tools_instance.map(t=>{
                    t.applyBounds(Con);
                  })

                  $('#exampleModalCenter').modal('show');

                  // video.play();
                }, 2000);
                exp_end = 0;
                trys = [0, 0, 0];

              }

            }
          }
          //store board and lamp location
          /*if(this.target.id == "boardItem")
            {
          
              let x=this.x;
              let y=this.pointerY;
              location[this.target.id]={x,y};
              gsap.to(this.target,{x:this.x,y:-80,duration:1});
              
            }
  
            if(this.target.id == "lamp")
            {
              let x=this.x;
              let y=this.pointerY;
              lamp_location={x,y};
              gsap.to(this.target,{x:-350,y:-80,duration:1});
              Exp15Component.prototype.lampLocation=lamp_location;
             
            }
  */
        }

      });
    });


  }


  ngOnInit() {

    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  BackToSteps() {
    this.location.back();
  }

  stop() {
    // let video = this.video.nativeElement;
    // video.pause();
  }

  /*
    DrawLine()
    {
      
      let dist1=0,dist2=0,dist3=0;
      let done1=false,done2=false;
      this.ctx.fillStyle="yellow"
    
      //to draw light from lamp to boards..
  
      //get lamp location;
        this.lampLocation=Exp15Component.prototype.lampLocation;
        console.log(this.lampLocation);
  
      //convert x to positive value
      for(let i=0;i<3;i++)
      {
        if(this.boards_location[i].x < 0)
           this.boards_location[i].x*=-1;
      }
  
      if(this.lampLocation.x < 0)
          this.lampLocation.x*=-1;
  
      //get nearest board to lamp ..step1: get only moved board
      this.boards_location=this.boards_location.filter((val)=>{return  val.y != 0})
      this.boards_location=this.boards_location.sort((n1,n2) => n1.x - n2.x);
  
      console.log(this.boards_location);
  
        
      
        setTimeout(()=>{
  
          //detect the hole in board .
          let boardlow= (Math.round(this.boards_location[0].y) + 20);
          let boardhigh= (Math.round(this.boards_location[0].y) + 45);
          let lamp= (Math.round(this.lampLocation.y) + 25);
  
          console.log("+20:"+  boardlow);
          console.log("+45:"+ boardhigh);
          console.log("+25:"+ lamp);
  
          if(this.boards_location[0].y != 0)
         {
    
            //calculate the distance between lamp and board
            dist1 =  this.lampLocation.x-this.boards_location[this.index].x;
        
             if( boardlow <= lamp && lamp <= boardhigh)
              {
  
               this.ctx.fillRect(400,0,dist1-10,10);
               done1=true;
                }
             else
            {
              this.ctx.fillRect(400,0,dist1+25,10);
             }
          }
  
            //second board
            let boardlow1= (Math.round(this.boards_location[1].y) + 20);
            let boardhigh1= (Math.round(this.boards_location[1].y) + 40);
            
            
          console.log("board2:"+  boardlow1);
          console.log("board2:"+ boardhigh1);
          console.log("+35:"+ lamp);
          console.log(done1);
  
          if(done1 && this.boards_location[1].y != 0)
          {
           
              //calculate distance between two other boards
              dist2= -1*(this.boards_location[1].x - this.boards_location[0].x);
  
              if( boardlow1 <= lamp && lamp <= boardhigh1  )
          {
            console.log("dist2"+dist2);
           this.ctx.fillRect(400,0,(dist1-10)+dist2,10);
           done2=true;
              }
              else
            {
              this.ctx.fillRect(400,0,dist1+25+dist2,10);
              }
          }
  
            //third board
            let boardlow2= (Math.round(this.boards_location[2].y) + 20);
            let boardhigh2= (Math.round(this.boards_location[2].y) + 40);
            
            
          console.log("board3:"+  boardlow2);
          console.log("board3:"+ boardhigh2);
          console.log("+35:"+ lamp);
  
          if(done2 && done1 && this.boards_location[2].y != 0)
          {
            
            //calculate distance between two other boards
            dist3= (this.boards_location[2].x - this.boards_location[1].x)*-1;
        
            if( boardlow2 <= lamp && lamp <= boardhigh2 )
            {
  
              this.ctx.fillRect(400,0,-400,10);
           
            }
            else
            {
              this.ctx.fillRect(400,0,dist1+25+dist2+dist3,10);
            }
          }
  
          done1=false;
          done2=false;
  
        },900);
  
    }
  */

  Close() {
    $('.toast').toast('hide');
  }

  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/1']);
  }
}
