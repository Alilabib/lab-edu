import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';

declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp26',
  templateUrl: './exp26.component.html',
  styleUrls: ['./exp26.component.scss']
})
export class Exp26Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('workspace') workspace: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  title = "لاحظ تفاعلاً يكون راسب ";
  id = "25";

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

          //first
          if (this.hitTest('#copper') && this.target.id != 'copper') {
            switch (this.target.id) {
              case 'holder':
                let copper = document.getElementById('copper');
                setTimeout(() => {
                  copper.removeChild(copper.firstChild);
                  copper.insertAdjacentHTML('afterbegin', '<img id="copperHolder" data-toggle="tooltip"  data-placement="left" src="assets/exp26/copperHolder.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 1000);
                break;
            }
          }

          let copperSrc = document.getElementById('copper').getElementsByTagName('img')[0].src;
          let copperImg = copperSrc.split('exp26/')[1];
          if (this.hitTest('#copper') && copperImg == 'copperHolder.png') {
            switch (this.target.id) {
              case 'agno3':
                let copper = document.getElementById('copper');

                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  copper.removeChild(copper.firstChild);
                  copper.insertAdjacentHTML('afterbegin', '<img id="agno3Copper" data-toggle="tooltip"  data-placement="left" src="assets/exp26/agno3Copper.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 5000);
                break;
            }
          }

          //second
          if (this.hitTest('#zinc') && this.target.id != 'zinc') {
            switch (this.target.id) {
              case 'holder1':
                let zinc = document.getElementById('zinc');
                setTimeout(() => {
                  zinc.removeChild(zinc.firstChild);
                  zinc.insertAdjacentHTML('afterbegin', '<img id="zincHolder" data-toggle="tooltip"  data-placement="left" src="assets/exp26/zincHolder.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 1000);
                break;
            }
          }


          let zincSrc = document.getElementById('zinc').getElementsByTagName('img')[0].src;
          let zincImg = zincSrc.split('exp26/')[1];
          if (this.hitTest('#zinc') && zincImg == 'zincHolder.png') {
            switch (this.target.id) {
              case 'cuso4':
                let zinc = document.getElementById('zinc');

                gsap.to(this.target, { rotation: -45, duration: 2 });
                gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                setTimeout(() => {
                  zinc.removeChild(zinc.firstChild);
                  zinc.insertAdjacentHTML('afterbegin', '<img id="cuso4Zinc" data-toggle="tooltip"  data-placement="left" src="assets/exp26/cuso4zinc.png">');
                  gsap.to(this.target, { y: 0, x: 0, duration: 1, opacity: 0 });
                }, 5000);
                setTimeout(() => {
                  reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                  $('#exampleModalCenter').modal('show');
                  // video.play();
                }, 6000);
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
