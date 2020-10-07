import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { TimelineLite } from "gsap";

@Component({
  selector: 'app-exp18',
  templateUrl: './exp18.component.html',
  styleUrls: ['./exp18.component.scss']
})
export class Exp18Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة تعرف مصدر الماء ";

  constructor() {
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

          if (this.hitTest('#tabWater') && this.target.id != 'tabWater') {
            switch (this.target.id) {
              case 'soap':
                let waterpepper = document.getElementById('tabWater');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  waterpepper.removeChild(waterpepper.firstChild);
                  waterpepper.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap" data-toggle="tooltip"  title="ماء صنبور" data-placement="left" src="assets/exp18/tabWaterSoap.png ">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }

          if (this.hitTest('#distilledWater') && this.target.id != 'distilledWater') {
            switch (this.target.id) {
              case 'soap':
                let waterpepper = document.getElementById('distilledWater');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  waterpepper.removeChild(waterpepper.firstChild);
                  waterpepper.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap1" data-toggle="tooltip"  data-placement="left" src="assets/exp18/tabWaterSoap1.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }

          if (this.hitTest('#saltWater') && this.target.id != 'saltWater') {
            switch (this.target.id) {
              case 'soap':
                let waterpepper = document.getElementById('saltWater');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  waterpepper.removeChild(waterpepper.firstChild);
                  waterpepper.insertAdjacentHTML('afterbegin', '<img id="tabWaterSoap2" data-toggle="tooltip"  data-placement="left" src="assets/exp18/tabWaterSoap2.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                }, 2000);
                break;
            }
          }


          let tabWaterSrc = document.getElementById('tabWater').getElementsByTagName('img')[0].src;
          let tabWaterImg = tabWaterSrc.split('exp18/')[1];
          if (this.hitTest('#tabWater') && tabWaterImg == 'tabWaterSoap.png') {
            switch (this.target.id) {
              case 'stopper':
                let tabWaterSoap = document.getElementById('tabWater');
                setTimeout(() => {
                  tabWaterSoap.removeChild(tabWaterSoap.firstChild);
                  tabWaterSoap.insertAdjacentHTML('afterbegin', '<img id="stopped" data-toggle="tooltip"  data-placement="left" src="assets/exp18/stopped.png">');
                }, 1000);
                setTimeout(() => {
                  gsap.fromTo(
                    tabWaterSoap, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 45, duration: 3, repeat: 5, yoyo: true, },
                  );
                }, 2000);
                gsap.to(this.target, { opacity: 0 });
                setTimeout(() => {
                  tabWaterSoap.removeChild(tabWaterSoap.firstChild);
                  tabWaterSoap.insertAdjacentHTML('afterbegin', '<img id="stopped" data-toggle="tooltip"  data-placement="left" src="assets/exp18/final1.png">');
                }, 4000);
                break;
            }
          }

          let distilledWaterSrc = document.getElementById('distilledWater').getElementsByTagName('img')[0].src;
          let distilledWaterImg = distilledWaterSrc.split('exp18/')[1];
          if (this.hitTest('#distilledWater') && distilledWaterImg == 'tabWaterSoap1.png') {
            switch (this.target.id) {
              case 'stopper':
                let distilledWaterSoap = document.getElementById('distilledWater');
                setTimeout(() => {
                  distilledWaterSoap.removeChild(distilledWaterSoap.firstChild);
                  distilledWaterSoap.insertAdjacentHTML('afterbegin', '<img id="waterpepper" data-toggle="tooltip"  data-placement="left" src="assets/exp18/stopped.png">');
                }, 1000);
                setTimeout(() => {
                  gsap.fromTo(
                    distilledWaterSoap, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 45, duration: 3, repeat: 5, yoyo: true, },
                  );
                }, 2000);
                gsap.to(this.target, { opacity: 0 });
                setTimeout(() => {
                  distilledWaterSoap.removeChild(distilledWaterSoap.firstChild);
                  distilledWaterSoap.insertAdjacentHTML('afterbegin', '<img id="stopped" data-toggle="tooltip"  data-placement="left" src="assets/exp18/final2.png">');
                }, 4000);

                break;
            }
          }

          let saltWaterSrc = document.getElementById('saltWater').getElementsByTagName('img')[0].src;
          let saltWaterImg = saltWaterSrc.split('exp18/')[1];
          if (this.hitTest('#saltWater') && saltWaterImg == 'tabWaterSoap2.png') {
            switch (this.target.id) {
              case 'stopper':
                let saltWaterSoap = document.getElementById('saltWater');
                setTimeout(() => {
                  saltWaterSoap.removeChild(saltWaterSoap.firstChild);
                  saltWaterSoap.insertAdjacentHTML('afterbegin', '<img id="waterpepper" data-toggle="tooltip"  data-placement="left" src="assets/exp18/stopped.png">');
                }, 1000);
                gsap.to(this.target, { opacity: 0 });
                setTimeout(() => {
                  gsap.fromTo(
                    saltWaterSoap, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 45, duration: 3, repeat: 5, yoyo: true, },
                  );
                }, 2000);
                gsap.to(this.target, { opacity: 0 });
                setTimeout(() => {
                  saltWaterSoap.removeChild(saltWaterSoap.firstChild);
                  saltWaterSoap.insertAdjacentHTML('afterbegin', '<img id="stopped" data-toggle="tooltip"  data-placement="left" src="assets/exp18/final3.png">');
                }, 4000);
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

}
