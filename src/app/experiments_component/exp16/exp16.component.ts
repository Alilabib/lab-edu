import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';

@Component({
  selector: 'app-exp16',
  templateUrl: './exp16.component.html',
  styleUrls: ['./exp16.component.scss']
})
export class Exp16Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة أين ذهبت الكتلة";
  id = "15";
  constructor(private route: Router, private location: Location) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  weight = 19.46;
  minusweight = 19.13;
  ngAfterViewInit() {
    // let video = this.video.nativeElement;
    let reset_tools=[];
    // let boom = this.boom.nativeElement;

    this.tools.map(t => {
      gsap.set('#wet', { opacity: 0 });
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: 'x,y',

        // bounds: this.con.nativeElement, edgeResistance: 0.65, inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {

          $('.toast').toast('hide');

          if (this.hitTest('#balance') && this.target.id != 'balance') {
            switch (this.target.id) {
              case 'candle':
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


          if (this.hitTest('#candle') && this.target.id != 'candle') {
            switch (this.target.id) {
              case 'lighter':
                let candle = document.getElementById('candle');
                candle.removeChild(candle.firstChild);
                candle.insertAdjacentHTML('afterbegin', '<img id="lightedCandel" data-toggle="tooltip" style="width: 60%;" data-placement="left" src="assets/exp16/candel.png">');
                setTimeout(() => {
                  //  document.getElementById('lightedCandel').style.opacity = '0'
                   let x =document.getElementById('lightedCandel')
                   x.remove()
                   candle.insertAdjacentHTML('afterbegin', '<img id="lightedCandel" data-toggle="tooltip" style="width: 60%;" data-placement="left" src="assets/exp16/candel_off1.png">');
                }, 2000);
                gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                break;
            }
          }



          let candleSrc = document.getElementById('candle').getElementsByTagName('img')[0].src;
          let candleImg = candleSrc.split('exp16/')[1];
          if (this.target.id == 'candle' && candleImg == 'candel_off1.png') {
            if (this.hitTest('#lightedCandel')) {
              let minusweight = document.getElementsByClassName('minusweight');
              let weight = document.getElementsByClassName('weight')
              gsap.to(minusweight, { opacity: 1 });
              gsap.to(weight, { opacity: 0 });
              setTimeout(() => {
                gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                gsap.to(minusweight, { opacity: 0 });
              }, 2000)
              setTimeout(() => {
                reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                $('#exampleModalCenter').modal('show');
                // video.play();
              }, 4500);
            }
          }

        },
      });
    });

  }

  Close() {
    $('.toast').toast('hide');
  }

  BackToSteps() {
    this.location.back();
  }

  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/1']);
  }


}
