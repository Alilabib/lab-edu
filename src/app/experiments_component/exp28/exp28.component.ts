import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp28',
  templateUrl: './exp28.component.html',
  styleUrls: ['./exp28.component.scss']
})
export class Exp28Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة ما مقدار المول";
  id = "28";

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  weight = 106.5;
  weight1 = 114.4;
  weight2 = 160;
  ngAfterViewInit() {
    // let video = this.video.nativeElement;
    let reset_tools = [];
    // let boom = this.boom.nativeElement;

    this.tools.map(t => {
      // gsap.set('#wet', { opacity: 0 });
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: 'x,y',

        // bounds: this.con.nativeElement, edgeResistance: 0.65, inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {

          $('.toast').toast('hide');

          // if (this.target.id == 'hitTest') {
          //   if (this.hitTest('#hitArea') && this.target.id != 'hitArea') {
          //     console.log('okkkkkkkkkkkkk')
          //   }
          // }

          let testerSrc = document.getElementById('tester').getElementsByTagName('img')[0].src;
          let testerImg = testerSrc.split('exp28/')[1];
          if (this.hitTest('#hitArea') && this.target.id != 'hitArea' && testerImg == 'tester.png') {
            switch (this.target.id) {
              case 'tester':
                // console.log('balllllllllllllnce hitted')
                let weight = document.getElementsByClassName('weight');
                gsap.to(weight, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                  gsap.to(weight, { opacity: 0 });
                }, 2000)
                break;
            }
          }

          if (this.hitTest('#tester') && this.target.id != 'tester' && testerImg == 'tester.png') {
            switch (this.target.id) {
              case 'peas':
                let tester = document.getElementById('tester');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  tester.removeChild(tester.firstChild);
                  tester.insertAdjacentHTML('afterbegin', '<img id="halfPeas" data-toggle="tooltip"  data-placement="left" src="assets/exp28/halfPeas.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }


          if (this.hitTest('#hitArea') && testerImg == 'halfPeas.png') {
            switch (this.target.id) {
              case 'tester':
                // console.log('balllllllllllllnce hitted')
                let weight1 = document.getElementsByClassName('weight1');
                gsap.to(weight1, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                  gsap.to(weight1, { opacity: 0 });
                }, 2000)
                break;
            }
          }


          if (this.hitTest('#tester') && this.target.id != 'tester' && testerImg == 'halfPeas.png') {
            switch (this.target.id) {
              case 'peas':
                let tester = document.getElementById('tester');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  tester.removeChild(tester.firstChild);
                  tester.insertAdjacentHTML('afterbegin', '<img id="fillPeas" data-toggle="tooltip"  data-placement="left" src="assets/exp28/fillPeas.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }

          if (this.hitTest('#hitArea') && testerImg == 'fillPeas.png') {
            switch (this.target.id) {
              case 'tester':
                // console.log('balllllllllllllnce hitted')
                let balance = document.getElementById('balance');
                let weight2 = document.getElementsByClassName('weight2');
                gsap.to(weight2, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                  gsap.to(balance, { y: 0, x: 0,  duration: 1 })
                  // gsap.to(weight1, { opacity: 0 });
                }, 2000)
                setTimeout(() => {
                  $('#exampleModalCenter').modal('show');
                }, 3000);
                break;
            }
          }


        },
      });
    });

  }



  Close() {
    // $('.toast').toast('hide');
  }

  BackToSteps() {
    this.location.back();
  }


  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/1']);
  }

}
