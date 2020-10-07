import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import MorphSVGPlugin from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
// import MorphSVGPlugin from 'gsap/MorphSVGPlugin';


@Component({
  selector: 'app-exp22',
  templateUrl: './exp22.component.html',
  styleUrls: ['./exp22.component.scss']
})
export class Exp22Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = "كيف يمكن ملاحظة تأثير الشحنات الكهربائية";
  id = "22";

  constructor(private location: Location, private route: Router) {
    gsap.registerPlugin(Draggable);
    gsap.registerPlugin(MorphSVGPlugin);
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

          if (this.hitTest('#head') && this.target.id != 'head') {
            switch (this.target.id) {
              case 'comb':
                let comb = document.getElementById('comb');
                setTimeout(() => {
                  gsap.fromTo(
                    comb, 1,
                    { rotation: 0, duration: 2 },
                    { rotation: 30, duration: 3, repeat: 5, yoyo: true, },
                  );
                }, 200);
                setTimeout(() => {
                  comb.removeChild(comb.firstChild);
                  comb.insertAdjacentHTML('afterbegin', '<img id="comb1"  data-toggle="tooltip" data-placement="left" src="assets/exp22/comb1.png ">');
                }, 2500);
                break;
            }
          }

          let combSrc = document.getElementById('comb').getElementsByTagName('img')[0].src;
          let combImg = combSrc.split('exp22/')[1];
          if (this.hitTest('#cuttingPaper') && combImg == 'comb1.png') {
            switch (this.target.id) {
              case 'comb':
                let cuttingPaper = document.getElementById('cuttingPaper');
                let comb = document.getElementById('comb');
                setTimeout(() => {
                  cuttingPaper.removeChild(cuttingPaper.firstChild);
                  cuttingPaper.insertAdjacentHTML('afterbegin', '<img id="cuttingPaper1" data-toggle="tooltip" data-placement="left" src="assets/exp22/cuttingPaper1.png ">');
                  comb.removeChild(comb.firstChild);
                  comb.insertAdjacentHTML('afterbegin', '<img id="paperComb1" data-toggle="tooltip" data-placement="left" src="assets/exp22/paperComb.png ">');
                }, 1000);
                break;
            }
          }


          if (this.hitTest('#table') && this.target.id != 'table') {
            switch (this.target.id) {
              case 'sticky1':
                let sticky1 = document.getElementById('sticky1');
                setTimeout(() => {
                  sticky1.removeChild(sticky1.firstChild);
                  sticky1.insertAdjacentHTML('afterbegin', '<img id="sticky3" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky3.png ">');
                }, 1000);
                break;

              case 'sticky2':
                let sticky2 = document.getElementById('sticky2');
                setTimeout(() => {
                  sticky2.removeChild(sticky2.firstChild);
                  sticky2.insertAdjacentHTML('afterbegin', '<img id="sticky4" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky4.png ">');
                }, 1000);
                break;
            }
          }

          //last exp
          // if (this.hitTest('#table') && this.target.id != 'table') {
          //   switch (this.target.id) {
          //     case 'sticky5':
          //       let sticky5 = document.getElementById('sticky5');
          //       setTimeout(() => {
          //         sticky5.removeChild(sticky5.firstChild);
          //         sticky5.insertAdjacentHTML('afterbegin', '<img id="sticky5" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky9.png ">');
          //       }, 1000);
          //       break;
          //   }
          // }

          // let sticky5Src = document.getElementById('sticky5').getElementsByTagName('img')[0].src;
          // let sticky5Img = sticky5Src.split('exp22/')[1];
          // if (this.hitTest('#table') && sticky5Img == 'sticky9.png') {
          //   switch (this.target.id) {
          //     case 'sticky6':
          //       let sticky5 = document.getElementById('sticky5');
          //       let sticky6 = document.getElementById('sticky6');
          //       setTimeout(() => {
          //         sticky5.removeChild(sticky5.firstChild);
          //         sticky6.removeChild(sticky6.firstChild);
          //         sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky9" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky9.png ">');
          //       }, 1000);
          //       setTimeout(() => {
          //         let x = document.getElementById('sticky9')
          //         x.remove()
          //         sticky5.insertAdjacentHTML('afterbegin', '<img id="sticky7" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky7.png ">');
          //         sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky8" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky8.png ">');
          //       }, 3000);
          //       break;
          //   }
          // }


          if (this.hitTest('#table') && this.target.id != 'table') {
            switch (this.target.id) {
              case 'sticky6':
                let sticky6 = document.getElementById('sticky6');
                setTimeout(() => {
                  sticky6.removeChild(sticky6.firstChild);
                  sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky10" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky10.png ">');
                }, 1000);
                break;
            }
          }

          let sticky6Src = document.getElementById('sticky6').getElementsByTagName('img')[0].src;
          let sticky6Img = sticky6Src.split('exp22/')[1];
          if (this.hitTest('#table') && sticky6Img == 'sticky10.png') {
            switch (this.target.id) {
              case 'sticky5':
                let sticky5 = document.getElementById('sticky5');
                let sticky6 = document.getElementById('sticky6');
                setTimeout(() => {
                  sticky5.removeChild(sticky5.firstChild);
                  sticky6.removeChild(sticky6.firstChild);
                  sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky10" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky10.png ">');
                }, 1000);
                setTimeout(() => {
                  let x = document.getElementById('sticky10')
                  x.remove()
                  sticky5.insertAdjacentHTML('afterbegin', '<img id="sticky7" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky7.png ">');
                  sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky8" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky8.png ">');
                }, 3000);
                break;
            }
          }




          if (this.hitTest('#table') && this.target.id != 'table') {
            switch (this.target.id) {
              case 'sticky5':
                let sticky5 = document.getElementById('sticky5');
                setTimeout(() => {
                  sticky5.removeChild(sticky5.firstChild);
                  sticky5.insertAdjacentHTML('afterbegin', '<img id="sticky9" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky9.png ">');
                }, 1000);
                break;
            }
          }

          let sticky5Src = document.getElementById('sticky5').getElementsByTagName('img')[0].src;
          let sticky5Img = sticky5Src.split('exp22/')[1];
          if (this.hitTest('#table') && sticky5Img == 'sticky9.png') {
            switch (this.target.id) {
              case 'sticky6':
                let sticky5 = document.getElementById('sticky5');
                let sticky6 = document.getElementById('sticky6');
                setTimeout(() => {
                  sticky5.removeChild(sticky5.firstChild);
                  sticky6.removeChild(sticky6.firstChild);
                  sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky9" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky9.png ">');
                }, 1000);
                setTimeout(() => {
                  let x = document.getElementById('sticky9')
                  x.remove()
                  sticky5.insertAdjacentHTML('afterbegin', '<img id="sticky7" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky7.png ">');
                  sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky8" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky8.png ">');
                }, 3000);
                setTimeout(() => {
                  sticky5.removeChild(sticky5.firstChild);
                  sticky6.removeChild(sticky6.firstChild);
                  sticky6.insertAdjacentHTML('afterbegin', '<img id="stickyFinal" data-toggle="tooltip" data-placement="left" src="assets/exp22/stickyFinal.png ">');
                }, 1000);
                break;
            }
          }


          //final
          if (this.hitTest('#sticky5') && sticky5Img == 'sticky7.png') {
            switch (this.target.id) {
              case 'sticky6':
                console.log('xxxxxxxxxxxxxxx');
                let sticky5 = document.getElementById('sticky5');
                let sticky6 = document.getElementById('sticky6');
                setTimeout(() => {
                  sticky5.removeChild(sticky5.firstChild);
                  sticky6.removeChild(sticky6.firstChild);
                  sticky6.insertAdjacentHTML('afterbegin', '<img id="stickyFinal" data-toggle="tooltip" data-placement="left" src="assets/exp22/stickyFinal.png ">');
                }, 1000);
                setTimeout(() => {
                  $('#exampleModalCenter').modal('show');
                  // video.play();
                }, 3000);
                // let sticky5 = document.getElementById('sticky5');
                // let sticky6 = document.getElementById('sticky6');
                // setTimeout(() => {
                //   sticky5.removeChild(sticky5.firstChild);
                //   sticky6.removeChild(sticky6.firstChild);
                //   sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky9" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky9.png ">');
                // }, 1000);
                // setTimeout(() => {
                //   let x = document.getElementById('sticky9')
                //   x.remove()
                //   sticky5.insertAdjacentHTML('afterbegin', '<img id="sticky7" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky7.png ">');
                //   sticky6.insertAdjacentHTML('afterbegin', '<img id="sticky8" data-toggle="tooltip" data-placement="left" src="assets/exp22/sticky8.png ">');
                // }, 3000);
                // setTimeout(() => {
                //   sticky5.removeChild(sticky5.firstChild);
                //   sticky6.removeChild(sticky6.firstChild);
                //   sticky6.insertAdjacentHTML('afterbegin', '<img id="stickyFinal" data-toggle="tooltip" data-placement="left" src="assets/exp22/stickyFinal.png ">');
                // }, 1000);
                break;
            }
          }



        },
      });
    });

  }

  BackToSteps() {
    this.location.back();
  }

  Close() {
    $('.toast').toast('hide');
  }

  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/1']);
  }

}
