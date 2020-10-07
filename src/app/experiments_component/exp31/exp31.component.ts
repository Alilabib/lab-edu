import { Component, OnInit, ViewChildren, ViewChild, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp31',
  templateUrl: './exp31.component.html',
  styleUrls: ['./exp31.component.scss']
})
export class Exp31Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة تحديد ماهية المركبات";
  id = "31";

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
    // this.resultModal();
  }



  ngAfterViewInit() {

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
          let  kclTest = 0;
          let  cuso4Test = 0;
          let  Bacl2Test = 0;
          let  NaclTest = 0;
          //kcl
          if (this.hitTest('#kclHit') && this.target.id != 'kclHit') {
            switch (this.target.id) {
              case 'tester1':
                console.log('tester111');

                let tester1 = document.getElementById('tester1');
                // gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                setTimeout(() => {
                  tester1.removeChild(tester1.firstChild);
                  tester1.insertAdjacentHTML('afterbegin', '<img id="kclTester" data-toggle="tooltip"  data-placement="left" src="assets/exp31/kclTester.png">');
                }, 1000);
                setTimeout(() => {
                  gsap.to(this.target, { y: 45,  duration: 1, rotation: 90 })
                }, 2000);
                break;
            }
          }

          let tester1Src = document.getElementById('tester1').getElementsByTagName('img')[0].src;
          let tester1Img = tester1Src.split('exp31/')[1];
          if (this.hitTest('#heaterHit') && this.target.id != 'heaterHit' && tester1Img == 'kclTester.png') {
            switch (this.target.id) {
              case 'tester1':
                // console.log('1111111111111111111');
                let heater = document.getElementById('fixedHeater');
                setTimeout(() => {
                  heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="kclFire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/kclFire.png">');
                }, 1000);
                setTimeout(() => {
                 gsap.to(this.target, {rotation: 0, x:0, y:0})
                 heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="fire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/fire.png">');
                }, 3000);
                kclTest = 1
                console.log(kclTest)
                break;
            }
          }

          //Cuso4
          if (this.hitTest('#cuso4Hit') && this.target.id != 'cuso4Hit') {
            switch (this.target.id) {
              case 'tester2':
                console.log('tester222');

                let tester2 = document.getElementById('tester2');
                // gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                setTimeout(() => {
                  tester2.removeChild(tester2.firstChild);
                  tester2.insertAdjacentHTML('afterbegin', '<img id="CuSo4Tester" data-toggle="tooltip"  data-placement="left" src="assets/exp31/CuSo4Tester.png">');
                }, 1000);
                setTimeout(() => {
                  gsap.to(this.target, { y: 45,  duration: 1, rotation: 90 })
                }, 2000);
                break;
            }
          }

          let tester2Src = document.getElementById('tester2').getElementsByTagName('img')[0].src;
          let tester2Img = tester2Src.split('exp31/')[1];
          if (this.hitTest('#heaterHit') && this.target.id != 'heaterHit' && tester2Img == 'CuSo4Tester.png') {
            switch (this.target.id) {
              case 'tester2':
                console.log('1111111111111111111');
                let heater = document.getElementById('fixedHeater');
                setTimeout(() => {
                  heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="CuSo4Fire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/CuSo4Fire.png">');
                }, 1000);
                setTimeout(() => {
                 gsap.to(this.target, {rotation: 0, x:0, y:0})
                 heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="fire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/fire.png">');
                }, 3000);
                cuso4Test = 1;
                console.log(cuso4Test)
                break;
            }
          }

          //BaCl2
          if (this.hitTest('#Bacl2Hit') && this.target.id != 'Bacl2Hit') {
            switch (this.target.id) {
              case 'tester3':
                console.log('tester333');

                let tester3 = document.getElementById('tester3');
                // gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                setTimeout(() => {
                  tester3.removeChild(tester3.firstChild);
                  tester3.insertAdjacentHTML('afterbegin', '<img id="Bacl2Tester" data-toggle="tooltip"  data-placement="left" src="assets/exp31/Bacl2Tester.png">');
                }, 1000);
                setTimeout(() => {
                  gsap.to(this.target, { y: 45,  duration: 1, rotation: 90 })
                }, 2000);
                break;
            }
          }

          let tester3Src = document.getElementById('tester3').getElementsByTagName('img')[0].src;
          let tester3Img = tester3Src.split('exp31/')[1];
          if (this.hitTest('#heaterHit') && this.target.id != 'heaterHit' && tester3Img == 'Bacl2Tester.png') {
            switch (this.target.id) {
              case 'tester3':
                console.log('3333333333333');
                let heater = document.getElementById('fixedHeater');
                setTimeout(() => {
                  heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="Bacl2Fire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/Bacl2Fire.png">');
                }, 1000);
                setTimeout(() => {
                 gsap.to(this.target, {rotation: 0, x:0, y:0})
                 heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="fire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/fire.png">');
                }, 3000);
                Bacl2Test = 1;
                console.log(Bacl2Test)
                break;
            }
          }

          //Nacl
          if (this.hitTest('#NaclHit') && this.target.id != 'NaclHit') {
            switch (this.target.id) {
              case 'tester4':
                console.log('tester444');

                let tester4 = document.getElementById('tester4');
                // gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                setTimeout(() => {
                  tester4.removeChild(tester4.firstChild);
                  tester4.insertAdjacentHTML('afterbegin', '<img id="NaclTester" data-toggle="tooltip"  data-placement="left" src="assets/exp31/NaclTester.png">');
                }, 1000);
                setTimeout(() => {
                  gsap.to(this.target, { y: 45,  duration: 1, rotation: 90 })
                }, 2000);
                break;
            }
          }

          let tester4Src = document.getElementById('tester4').getElementsByTagName('img')[0].src;
          let tester4Img = tester4Src.split('exp31/')[1];
          if (this.hitTest('#heaterHit') && this.target.id != 'heaterHit' && tester4Img == 'NaclTester.png') {
            switch (this.target.id) {
              case 'tester4':
                console.log('4444444444');
                let heater = document.getElementById('fixedHeater');
                setTimeout(() => {
                  heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="NaclFire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/NaclFire.png">');
                }, 1000);
                setTimeout(() => {
                 gsap.to(this.target, {rotation: 0, x:0, y:0})
                 heater.removeChild(heater.firstChild);
                  heater.insertAdjacentHTML('afterbegin', '<img id="fire" data-toggle="tooltip"  data-placement="left" src="assets/exp31/fire.png">');
                }, 3000);
                NaclTest = 1;
                console.log(NaclTest);
                break;
            }
          }



        },
      });
    });

  }



  // ngOnDestroy() {
  //   console.log(this.kclTest, this.NaclTest, this.cuso4Test, this.Bacl2Test)
  // }

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
