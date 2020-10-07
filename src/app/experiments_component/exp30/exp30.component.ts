import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp30',
  templateUrl: './exp30.component.html',
  styleUrls: ['./exp30.component.scss']
})
export class Exp30Component implements OnInit {
  weight = 20.4
  weight1 = 23.4
  weight2 = 22.3

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة تحديد صيغة الاملاح";
  id = "30";

  // @ViewChild('balance') balance: ElementRef;
  // @ViewChild('hitArea') hitArea: ElementRef;
  // @ViewChild('crucible') crucible: ElementRef;
  // @ViewChild('hitTest') hitTest: ElementRef;
  // @ViewChild('crucibleWeight') crucibleWeight: ElementRef;
  // @ViewChild('crucibleImg') crucibleImg: ElementRef;

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
    // let balance = this.balance.nativeElement;
    // let hitArea = this.hitArea.nativeElement;
    // let hitTest = this.hitTest.nativeElement;
    // let crucible = this.crucible.nativeElement;
    // let crucibleWeight = this.crucibleWeight.nativeElement;
    // let crucibleImg = this.crucibleImg.nativeElement;

    let heatedCuso4 = false
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

          // if (this.hitTest(hitArea)) {
          //   switch (this.target.id) {
          //     case "crucible":
          //       // console.log('jjjjjjjjjjjjjjkkkkkkkkkkkkkk')
          //       gsap.to(crucibleWeight, { opacity: 1, duration: 1 } );
          //       setTimeout(() => {
          //         gsap.to(this.target, { y: -45})
          //         gsap.to(crucibleWeight, { opacity: 0, duration: 3 });
          //         gsap.to(crucibleImg, { attr: { src: "../../../assets/exp30/dirtywater.png" }, delay: 2, duration: 2 , width: '250%'});
          //       }, 2000);
          //       break
          //   }
          // }

          let crucibleSrc = document.getElementById('crucible').getElementsByTagName('img')[0].src;
          let crucibleImg = crucibleSrc.split('exp30/')[1];
          if (this.hitTest('#balanceHit') && this.target.id != 'balanceHit' && crucibleImg == 'crucible.png') {
            switch (this.target.id) {
              case 'crucible':
                // console.log('balllllllllllllnce hitted')
                let weight = document.getElementsByClassName('weight');
                let crucible = document.getElementById('crucible');
                gsap.to(weight, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 45,  duration: 1 })
                  gsap.to(weight, { opacity: 0 });
                }, 2000)
                setTimeout(() => {
                  crucible.removeChild(crucible.firstChild);
                  crucible.insertAdjacentHTML('afterbegin', '<img id="openedcrucible" style="width:250%" data-toggle="tooltip"  data-placement="left" src="assets/exp30/openedcrucible.png">');
                }, 2000);
                break;
            }
          }

          if (this.hitTest('#crucible') && crucibleImg == 'openedcrucible.png') {
            switch (this.target.id) {
              case 'cuso4':
                // console.log('cuso44444444444')
                let crucible = document.getElementById('crucible');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                // setTimeout(() => {
                //   crucible.removeChild(crucible.firstChild);
                //   crucible.insertAdjacentHTML('afterbegin', '<img id="cuso4crucible" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp30/cuso4crucible.png">');
                //   gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                // }, 2000);
                setTimeout(() => {
                  crucible.removeChild(crucible.firstChild);
                  crucible.insertAdjacentHTML('afterbegin', '<img id="coveredcuso4crucible" data-toggle="tooltip"  data-placement="left" src="assets/exp30/coveredcuso4crucible.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 4000);
                break;
            }
          }


          if (this.hitTest('#balanceHit') && this.target.id != 'balanceHit' && crucibleImg == 'coveredcuso4crucible.png') {
            switch (this.target.id) {
              case 'crucible':
                // console.log('coveredcuso4cruciblecoveredcuso4cruciblecoveredcuso4cruciblecoveredcuso4crucible')
                let weight1 = document.getElementsByClassName('weight1');
                let crucible = document.getElementById('crucible');
                gsap.to(weight1, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 45,  duration: 1 })
                  gsap.to(weight1, { opacity: 0 });
                }, 2000)
                  // setTimeout(() => {
                  //   crucible.removeChild(crucible.firstChild);
                  //   crucible.insertAdjacentHTML('afterbegin', '<img id="openedcrucible" style="width:250%" data-toggle="tooltip"  data-placement="left" src="assets/exp30/openedcrucible.png">');
                  // }, 2000);
                break;
            }
          }

          if (this.hitTest('#heaterHit') && crucibleImg == 'coveredcuso4crucible.png') {
            switch (this.target.id) {
              case 'crucible':
                let crucible = document.getElementById('crucible');
                setTimeout(() => {
                  crucible.removeChild(crucible.firstChild);
                  crucible.insertAdjacentHTML('afterbegin', '<img id="heatedCuso4" data-toggle="tooltip"  data-placement="left" src="assets/exp30/heatedCuso4.png">');
                  // gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                  gsap.to(this.target, { y: 45,  duration: 1 })
                }, 2000);
                // console.log('coveredcuso4cruciblecoveredcuso4cruciblecoveredcuso4cruciblecoveredcuso4crucible')
                // this.heatedCuso4 = true
                // console.log(this.heatedCuso4);
                // console.log('yes heated')
                break;
            }
          }

          if (this.hitTest('#balanceHit') && crucibleImg == 'heatedCuso4.png') {
            switch (this.target.id) {
              case 'crucible':
                // if(heatedCuso4 = true) {
                  // console.log('yes heatedddddddddd22222222222222')
                  let weight2 = document.getElementsByClassName('weight2');
                  let crucible = document.getElementById('crucible');
                  gsap.to(weight2, { opacity: 1 });
                  setTimeout(() => {
                    gsap.to(this.target, { y: 45,  duration: 1 })
                    gsap.to(weight2, { opacity: 0 });
                  }, 2000)
                  setTimeout(() => {
                    $('#exampleModalCenter').modal('show');
                  }, 3000);
                // }
                // console.log('coveredcuso4cruciblecoveredcuso4cruciblecoveredcuso4cruciblecoveredcuso4crucible')
                // this.heatedCuso4 = true
                // console.log(this.heatedCuso4);

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
