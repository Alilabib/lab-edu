import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp32',
  templateUrl: './exp32.component.html',
  styleUrls: ['./exp32.component.scss']
})
export class Exp32Component implements OnInit {

  weight = 3.16
  weight1 = 2.73
  weight2 = 2.12

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة كيف تتمكن من تعرف أنماط التغير في الخواص";
  id = "32";

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }


  ngAfterViewInit() {


    let heatedCuso4 = false
    let reset_tools = [];
    // let boom = this.boom.nativeElement;

    this.tools.map(t => {
      // gsap.set('#wet', { opacity: 0 });
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: 'x,y',

        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {

          $('.toast').toast('hide');

          //Nail 1
          if (this.hitTest('#rulerHit1') && this.hitTest('#rulerHit2')) {
            switch (this.target.id) {
              case 'nail1':
                console.log('rulerrrrrrrrrrrr hitted');

                break;
            }
          }

          if (this.hitTest('#balanceHit') && this.target.id != 'balanceHit') {
            switch (this.target.id) {
              case 'nail1':
                console.log('nail 1111111111111111111');
                let nail1 = document.getElementById('nail1');
                let weight = document.getElementsByClassName('weight');
                setTimeout(() => {
                  gsap.to(this.target, { y: 90,  duration: 1, })
                  gsap.to(this.target, { y: 75,  duration: 1, rotation: 90 })
                }, 500);
                // gsap.to(weight, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(weight, { opacity: 1 });
                }, 1500)
                setTimeout(() => {
                  gsap.to(this.target, { y: 0,x: 0,  duration: 1, rotation: 0 })
                  gsap.to(weight, { opacity: 0});
                }, 2500)
                break;
            }
          }

          //Nail 2
          if (this.hitTest('#rulerHit1') && this.hitTest('#rulerHit2')) {
            switch (this.target.id) {
              case 'nail2':
                console.log('nail222222 hit rulerrrrrrrrrrrr');
                break;
            }
          }

          if (this.hitTest('#balanceHit') && this.target.id != 'balanceHit') {
            switch (this.target.id) {
              case 'nail2':
                console.log('nail 222222222222');
                let nail2 = document.getElementById('nail2');
                let weight1 = document.getElementsByClassName('weight1');
                setTimeout(() => {
                  gsap.to(this.target, { y: 8,  duration: 1, rotation: 90 })
                }, 500);
                setTimeout(() => {
                  gsap.to(weight1, { opacity: 1 });
                }, 1500)
                setTimeout(() => {
                  gsap.to(this.target, { y: 0,x: 0,  duration: 1, rotation: 0 })
                  gsap.to(weight1, { opacity: 0});
                }, 2500)
                break;
            }
          }

          //Nail 3
          if (this.hitTest('#rulerHit1') && this.hitTest('#rulerHit2')) {
            switch (this.target.id) {
              case 'nail3':
                console.log('nail3333333 hit rulerrrrrrrrrrrr');
                break;
            }
          }

          if (this.hitTest('#balanceHit') && this.target.id != 'balanceHit') {
            switch (this.target.id) {
              case 'nail3':
                console.log('nail 3333333');
                let nail2 = document.getElementById('nail3');
                let weight2 = document.getElementsByClassName('weight2');
                setTimeout(() => {
                  gsap.to(this.target, { y: -80,  duration: 1, rotation: 90 })
                }, 500);
                setTimeout(() => {
                  gsap.to(weight2, { opacity: 1 });
                }, 1500)
                setTimeout(() => {
                  gsap.to(this.target, { y: 0,x: 0,  duration: 1, rotation: 0 })
                  gsap.to(weight2, { opacity: 0});
                }, 2500)
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
