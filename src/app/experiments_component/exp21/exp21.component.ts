import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp21',
  templateUrl: './exp21.component.html',
  styleUrls: ['./exp21.component.scss']
})

export class Exp21Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = "تحديد نواتج التفاعل الكيميائى";
  id = "21";

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


          if (this.hitTest('#agno3') && this.target.id != 'agno3') {
            switch (this.target.id) {
              case 'copper':
                  let agno3 = document.getElementById('agno3');
                  setTimeout(() => {
                    agno3.removeChild(agno3.firstChild);
                    agno3.insertAdjacentHTML('afterbegin', '<img id="copperAgno3" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp21/copper1.png ">');
                  }, 1000);
                  setTimeout(() => {
                    agno3.removeChild(agno3.firstChild);
                    agno3.insertAdjacentHTML('afterbegin', '<img id="copperAgno3" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp21/copper2.png ">');
                  }, 3000);
                  setTimeout(() => {
                    agno3.removeChild(agno3.firstChild);
                    agno3.insertAdjacentHTML('afterbegin', '<img id="copperAgno3" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp21/copper3.png ">');
                  }, 5000);

                  gsap.to(this.target, { y: 0, x: 0, duration: 1, display: 'none'});

                break;
            }
          }

          if (this.hitTest('#flask') && this.target.id != 'flask') {
            switch (this.target.id) {
              case 'suppression':
                  let flask = document.getElementById('flask');
                  setTimeout(() => {
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('afterbegin', '<img id="flask1" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp21/flask1.png ">');
                  }, 1000);
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, display: 'none'});

                break;
            }
          }


          let flaskSrc = document.getElementById('flask').getElementsByTagName('img')[0].src;
          let flaskImg = flaskSrc.split('exp21/')[1];
          if (this.hitTest('#flask') && flaskImg == 'flask1.png') {
            switch (this.target.id) {
              case 'paper':

                  let flask = document.getElementById('flask');
                  setTimeout(() => {
                    // let x =document.getElementById('mypaper')
                    // x.remove()
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('afterbegin', '<img id="flask2" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp21/flask2.png ">');
                  }, 1000);

                  gsap.to(this.target, { y: 0, x: 0, duration: 1, display: 'none'});

                break;
            }
          }



          let agno3Src = document.getElementById('agno3').getElementsByTagName('img')[0].src;
          let agno3Img = agno3Src.split('exp21/')[1];
          if (this.hitTest('#flask') && flaskImg == 'flask2.png' && agno3Img == 'copper3.png') {
            switch (this.target.id) {
              case 'agno3':
                let copperNitrate = document.getElementById('flask');
                let paper = document.getElementById('agno3');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  copperNitrate.removeChild(copperNitrate.firstChild);
                  copperNitrate.insertAdjacentHTML('afterbegin', '<img id="copperNitrate" data-toggle="tooltip"  data-placement="left" src="assets/exp21/copperNitrate.png">');
                  paper.removeChild(paper.firstChild);
                  paper.insertAdjacentHTML('afterbegin', '<img id="paper2" data-toggle="tooltip"  data-placement="left" src="assets/exp21/paper2.png">');
                  // gsap.to(this.target, {  duration: 1 });
                }, 2000);

                break;
            }
          }

          if (this.hitTest('#glass') &&  this.target.id != 'glass' && flaskImg == 'copperNitrate.png') {
            switch (this.target.id) {
              case 'flask':
                let glass = document.getElementById('glass');
                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  glass.removeChild(glass.firstChild);
                  glass.insertAdjacentHTML('afterbegin', '<img id="copperNitrateglass" data-toggle="tooltip"  data-placement="left" src="assets/exp21/copperNitrateglass.png">');
                }, 2000);

                break;
            }
          }

          if (this.hitTest('#glass') && this.target.id != 'glass') {
            switch (this.target.id) {
              case 'tester':
                  let tester = document.getElementById('tester');
                  setTimeout(() => {
                    tester.removeChild(tester.firstChild);
                    tester.insertAdjacentHTML('afterbegin', '<img id="tester1"  data-toggle="tooltip" data-placement="left" src="assets/exp21/tester1.png">');
                  }, 1000);

                // gsap.to(this.target, { css: { zIndex: 2 } });
                // let tester = document.getElementById('tester').getElementsByTagName('img')[0];

                // gsap.to(tester, { attr: { src: 'assets/exp21/tester1.png' }, delay: 1 });

                break;
            }
          }

          let testerSrc = document.getElementById('tester').getElementsByTagName('img')[0].src;
          let testerImg = testerSrc.split('exp21/')[1];
          if (this.hitTest('#fire') && this.target.id != 'fire' && testerImg == 'tester1.png') {
            switch (this.target.id) {
              case 'tester':
                  let fire = document.getElementById('fire');
                  setTimeout(() => {
                    fire.removeChild(fire.firstChild);
                    fire.insertAdjacentHTML('afterbegin', '<img id="fire1"  data-toggle="tooltip" data-placement="left" src="assets/exp21/fire1.png">');
                  }, 2000);
                  setTimeout(() => {
                    reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                    $('#exampleModalCenter').modal('show');
                    // video.play();
                  }, 3000);

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
