import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exp19',
  templateUrl: './exp19.component.html',
  styleUrls: ['./exp19.component.scss']
})
export class Exp19Component implements OnInit {
  // audio;
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('bomb') someSand: ElementRef;
  title = "تجربة تعرف مصدر الماء ";
  Id = '19';
  public audio: HTMLAudioElement;

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


          if (this.hitTest('#tester1') && this.target.id != 'tester1') {
            switch (this.target.id) {
              case 'zinc':
                  let tester1 = document.getElementById('tester1');
                  setTimeout(() => {
                    let x =document.getElementById('myTester')
                    x.remove()
                    tester1.removeChild(tester1.firstChild);
                    tester1.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip" data-placement="left" src="assets/exp19/zincTester.png ">');
                  }, 1000);
                  // tester1.removeChild(tester1.firstChild);
                  // tester1.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip" data-placement="left" src="assets/exp19/zincTester.png ">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, display: 'none' });
                  // let x =document.getElementById('lightedCandel')
                  // tester1.remove()
                break;
            }
          }

          // if (this.hitTest('#tester2') && this.target.id != 'tester2') {
          //   switch (this.target.id) {
          //     case 'acid':
          //         let tester2 = document.getElementById('tester2');
          //         gsap.to(this.target, { rotation: -45, duration: 2 });
          //         gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
          //         setTimeout(() => {
          //           tester2.removeChild(tester2.firstChild);
          //           tester2.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip"  data-placement="left" src="assets/exp19/acidTester.png ">');
          //           gsap.to(this.target, { y: 0, x: 0, duration: 1});
          //         }, 2000);
          //       break;
          //   }
          // }


          let zincTesterSrc = document.getElementById('tester1').getElementsByTagName('img')[0].src;
          let zincTesterImg = zincTesterSrc.split('exp19/')[1];
          if (this.hitTest('#tester1') && zincTesterImg == 'zincTester.png') {
            switch (this.target.id) {
              case 'acid':
                  let tester1 = document.getElementById('tester1');
                  gsap.to(this.target, { rotation: -45, duration: 2 });
                  gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                  setTimeout(() => {
                    tester1.removeChild(tester1.firstChild);
                    tester1.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip"  data-placement="left" src="assets/exp19/acidZincTester.png ">');
                    gsap.to(this.target, { y: 0, x: 0, duration: 1});
                  }, 2000);
                break;
            }
          }

          let zincTesterSrc1 = document.getElementById('tester1').getElementsByTagName('img')[0].src;
          let zincTesterImg1 = zincTesterSrc1.split('exp19/')[1];
          if (this.hitTest('#tester1') && zincTesterImg1 == 'acidZincTester.png') {
            switch (this.target.id) {
              case 'stopper':
                  let tester1 = document.getElementById('tester1');
                  setTimeout(() => {
                    tester1.removeChild(tester1.firstChild);
                    tester1.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip"  data-placement="left" src="assets/exp19/stopper1.png ">');
                    gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0});
                  }, 200);
                  setTimeout(() => {
                    tester1.removeChild(tester1.firstChild);
                    tester1.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip"  data-placement="left" src="assets/exp19/stopper2.png ">');
                    // gsap.to(this.target, { y: 0, x: 0, duration: 1});
                  }, 4000);
                  setTimeout(() => {
                    tester1.removeChild(tester1.firstChild);
                    tester1.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip"  data-placement="left" src="assets/exp19/final.png ">');
                  }, 6000);
                break;
            }
          }


          let finalTester = document.getElementById('tester1').getElementsByTagName('img')[0].src;
          let finalTesterImg = finalTester.split('exp19/')[1];
          if (this.hitTest('#hitSpace') && finalTesterImg == 'final.png') {
            switch (this.target.id) {
              case 'fire':
                console.log('xxxxxxxxxxxxxxxxxx');
                // gsap.to(this.target, { css: { zIndex: 2 } });
                let cloud = <HTMLElement>document.getElementById('cloude');
                gsap.fromTo(cloud, { opacity: 1, delay: 5 }, { opacity: 0, duration: 15 });
                break;
            }
          }


        },
      });
    });

  }




  Close() {
    $('.toast').toast('hide');
  }

  over(id, videourl) {

    $("#" + id).tooltip(
      {
        placement: 'left',
        boundary: 'window',
        html: true,
        sanitize: false,
        trigger: 'hover',
        title: '<iframe width="170" sandbox="allow-scripts allow-popups allow-same-origin" src="' + videourl + '" frameborder="0" allowfullscreen></iframe>'
      })
  }

  BackToSteps() {
    this.location.back();
  }

  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/1']);
  }

}
