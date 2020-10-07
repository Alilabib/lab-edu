import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp29',
  templateUrl: './exp29.component.html',
  styleUrls: ['./exp29.component.scss']
})
export class Exp29Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة تحليل العلك";
  id = "29";

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    $('.toast').toast('show');

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  weight = '1:0';
  weight1 = '1:1';
  finalweight1 = '0:8';
  finalweight2 = '0:7';

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

          if (this.hitTest('#gum1') && this.target.id != 'gum1') {
            switch (this.target.id) {
              case 'knife':
                let gum1 = document.getElementById('gum1');
                let knife = document.getElementById('knife');
                setTimeout(() => {
                  gsap.fromTo(
                    knife, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 30, duration: 3, repeat: 5, yoyo: true, },
                  );
                }, 100);
                setTimeout(() => {
                  gum1.removeChild(gum1.firstChild);
                  gum1.insertAdjacentHTML('afterbegin', '<img id="peeledgum1"  data-toggle="tooltip" data-placement="left" src="assets/exp29/peeledgum1.png ">');
                }, 4500);
                break;
            }
          }


          //////////
          if (this.hitTest('#hitArea') && this.target.id != 'hitArea') {
            switch (this.target.id) {
              case 'paper':
                  let balance = document.getElementById('balance');
                  let bal = document.getElementById('bal');
                  setTimeout(() => {
                    // balance.removeChild(balance.firstChild);
                    balance.insertAdjacentHTML('afterbegin', '<img id="paperBlanace" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp29/paperBalance.png ">');
                    bal.remove();
                  }, 1000);
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, display: 'none'});

                break;
            }
          }

          let balanceSrc = document.getElementById('balance').getElementsByTagName('img')[0].src;
          let balanceImg = balanceSrc.split('exp29/')[1];
          let gum1Src = document.getElementById('gum1').getElementsByTagName('img')[0].src;
          let gum1Img = gum1Src.split('exp29/')[1];
          let gum2Src = document.getElementById('gum2').getElementsByTagName('img')[0].src;
          let gum2Img = gum2Src.split('exp29/')[1];
          if (this.hitTest('#balance') && balanceImg == 'paperBalance.png' && gum1Img == 'peeledgum1.png') {
            switch (this.target.id) {
              case 'gum1':
                // console.log('balllllllllllllnce hitted')
                let weight = document.getElementById('weight');
                gsap.to(weight, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                  gsap.to(weight, { opacity: 0 });
                }, 2000)
                break;
            }
          }

          //gum 2
          if (this.hitTest('#gum2') && this.target.id != 'gum2') {
            switch (this.target.id) {
              case 'knife':
                let gum2 = document.getElementById('gum2');
                let knife = document.getElementById('knife');
                setTimeout(() => {
                  gsap.fromTo(
                    knife, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 30, duration: 3, repeat: 5, yoyo: true, },
                  );
                }, 200);
                setTimeout(() => {
                  gum2.removeChild(gum2.firstChild);
                  gum2.insertAdjacentHTML('afterbegin', '<img id="peeledgum2"  data-toggle="tooltip" data-placement="left" src="assets/exp29/peeledgum2.png ">');
                }, 4500);
                break;
            }
          }

          if (this.hitTest('#balance') && balanceImg == 'paperBalance.png' && gum2Img == 'peeledgum2.png') {
            switch (this.target.id) {
              case 'gum2':
                // console.log('balllllllllllllnce hitted2222')
                let weight1 = document.getElementById('weight1');
                gsap.to(weight1, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                  gsap.to(weight1, { opacity: 0 });
                }, 2000)
                break;
            }
          }

          if (this.hitTest('#gum2') && this.target.id != 'gum2' && gum2Img == 'peeledgum2.png') {
            switch (this.target.id) {
              case 'knife':
                let gum2 = document.getElementById('gum2');
                let knife = document.getElementById('knife');
                setTimeout(() => {
                  gsap.fromTo(
                    knife, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 30, duration: 3, repeat: 5, yoyo: true, },
                  );
                }, 200);
                setTimeout(() => {
                  gum2.removeChild(gum2.firstChild);
                  gum2.insertAdjacentHTML('afterbegin', '<img id="gumPieces"  data-toggle="tooltip" data-placement="left" src="assets/exp29/gumPieces.png ">');
                }, 4500);
                break;
            }
          }

          //Pour water
          if (this.hitTest('#glass1hit') && this.target.id != 'glass1hit') {
            switch (this.target.id) {
              case 'water1':
                // console.log('water hit glass');

                let glass1 = document.getElementById('glass1');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass1.removeChild(glass1.firstChild);
                  glass1.insertAdjacentHTML('afterbegin', '<img id="glass1filled" data-toggle="tooltip"  data-placement="left" src="assets/exp29/glass1filled.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 2000);
                break;
            }
          }

          if (this.hitTest('#glass2hit') && this.target.id != 'glass2hit') {
            switch (this.target.id) {
              case 'water2':
                // console.log('water hit glass');

                let glass2 = document.getElementById('glass2');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass2.removeChild(glass2.firstChild);
                  glass2.insertAdjacentHTML('afterbegin', '<img id="glass2filled" data-toggle="tooltip" data-placement="left" src="assets/exp29/glass2filled.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 2000);
                break;
            }
          }

          //gum1 in water
          let glass1Src = document.getElementById('glass1').getElementsByTagName('img')[0].src;
          let glass1Img = glass1Src.split('exp29/')[1];
          if (this.hitTest('#glass1hit') && glass1Img == 'glass1filled.png' && gum1Img == 'peeledgum1.png') {
            switch (this.target.id) {
              case 'gum1':

                let glass1 = document.getElementById('glass1');
                let gum1 = document.getElementById('gum1');
                // gsap.to(this.target, { rotation: -45, duration: 2 });
                // gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                // setTimeout(() => {
                  // gsap.to(this.target, { opacity: 0 });
                // }, 1000);
                setTimeout(() => {
                  glass1.removeChild(glass1.firstChild);
                  glass1.insertAdjacentHTML('afterbegin', '<img id="gumInWater1" data-toggle="tooltip"  data-placement="left" src="assets/exp29/gumInWater1.png">');
                }, 2000);
                // setTimeout(() => {
                //   glass1.removeChild(glass1.firstChild);
                //   glass1.insertAdjacentHTML('afterbegin', '<img id="glass1filled" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp29/glass1filled.png">');
                //   gum1.removeChild(gum1.firstChild);
                //   gum1.insertAdjacentHTML('afterbegin', '<img id="gum1After" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp29/gum1After.png">');
                // }, 3000);
                gsap.to(gum1, {opacity: 0})
                var seconds: any = document.getElementById('countdown').textContent = '120';
                document.getElementById('timer1').style.opacity = '1';
                var countdown = setInterval(function () {
                  --seconds;
                  document.getElementById('countdown').textContent = seconds;
                  if (seconds == 0) {
                    seconds = 0
                    clearInterval(countdown);
                      // gsap.to(this.target, { opacity: 1 });
                      glass1.removeChild(glass1.firstChild);
                      glass1.insertAdjacentHTML('afterbegin', '<img id="glass1filled" data-toggle="tooltip"  data-placement="left" src="assets/exp29/glass1filled.png">');
                      gsap.to(gum1, { opacity: 1 })
                      gum1.removeChild(gum1.firstChild);
                      gum1.insertAdjacentHTML('afterbegin', '<img id="gum1After" data-toggle="tooltip" style="width:300%" data-placement="left" src="assets/exp29/gum1After.png">');
                      // console.log('xcxcxcxcxcxcxcxcxcx');

                  }
                }, 300);



                break;
            }
          }


          //gum2 in water
          let glass2Src = document.getElementById('glass2').getElementsByTagName('img')[0].src;
          let glass2Img = glass2Src.split('exp29/')[1];
          if (this.hitTest('#glass2hit') && glass2Img == 'glass2filled.png' && gum2Img == 'gumPieces.png') {
            switch (this.target.id) {
              case 'gum2':
                // console.log('gumwaterrrrrrrrrrrrrrrrrrrrr');
                let glass2 = document.getElementById('glass2');
                let gum2 = document.getElementById('gum2');

                setTimeout(() => {
                  glass2.removeChild(glass2.firstChild);
                  glass2.insertAdjacentHTML('afterbegin', '<img id="gumInWater2" data-toggle="tooltip"  data-placement="left" src="assets/exp29/gumInWater2.png">');
                }, 2000);

                gsap.to(gum2, {opacity: 0})
                var seconds: any = document.getElementById('countdown').textContent = '120';
                document.getElementById('timer1').style.opacity = '1';
                var countdown = setInterval(function () {
                  --seconds;
                  document.getElementById('countdown2').textContent = seconds;
                  if (seconds == 0) {
                    seconds = 0
                    clearInterval(countdown);
                      // gsap.to(this.target, { opacity: 1 });
                      glass2.removeChild(glass2.firstChild);
                      glass2.insertAdjacentHTML('afterbegin', '<img id="glass2filled" data-toggle="tooltip"  data-placement="left" src="assets/exp29/glass2filled.png">');
                      gsap.to(gum2, { opacity: 1 })
                      gum2.removeChild(gum2.firstChild);
                      gum2.insertAdjacentHTML('afterbegin', '<img id="gum2After" data-toggle="tooltip"  data-placement="left" src="assets/exp29/gum2After.png">');
                      // console.log('xcxcxcxcxcxcxcxcxcx');

                  }
                }, 100);

            }
          }


          //weight gum1 after melting
          if (this.hitTest('#balance') && balanceImg == 'paperBalance.png' && gum1Img == 'gum1After.png') {
            switch (this.target.id) {
              case 'gum1':
                // console.log('final 111111111111111')
                let finalweight1 = document.getElementById('finalweight1');
                gsap.to(finalweight1, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                  gsap.to(finalweight1, { opacity: 0 });
                }, 2000)
                break;
            }
          }

          //weight gum2 after melting
          if (this.hitTest('#balance') && balanceImg == 'paperBalance.png' && gum2Img == 'gum2After.png') {
            switch (this.target.id) {
              case 'gum2':
                console.log('final 222222222222222')
                let finalweight2 = document.getElementById('finalweight2');
                gsap.to(finalweight2, { opacity: 1 });
                setTimeout(() => {
                  gsap.to(this.target, { y: 0, x: 0,  duration: 1 })
                  gsap.to(finalweight2, { opacity: 0 });
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
