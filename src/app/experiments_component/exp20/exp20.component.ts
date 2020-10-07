import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp20',
  templateUrl: './exp20.component.html',
  styleUrls: ['./exp20.component.scss']
})
export class Exp20Component implements OnInit {
  // audio;
  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  @ViewChild('bomb') someSand: ElementRef;
  title = "تجربة تعرف مصدر الماء ";
  id = 21

  constructor(private route: Router,private location: Location) {
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


          if (this.hitTest('#paper') && this.target.id != 'paper') {
            switch (this.target.id) {
              case 'pen':
                  let paper = document.getElementById('paper');
                  setTimeout(() => {
                    let x =document.getElementById('mypaper')
                    x.remove()
                    paper.removeChild(paper.firstChild);
                    paper.insertAdjacentHTML('afterbegin', '<img id="coloredPaper" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp20/paper1.png ">');
                  }, 1000);

                  gsap.to(this.target, { y: 0, x: 0, duration: 1, display: 'none'});

                break;
            }
          }

         let paperSrc = document.getElementById('paper').getElementsByTagName('img')[0].src;
         let paperImg = paperSrc.split('exp20/')[1]
         if (this.hitTest('#paper') && paperImg == 'paper1.png') {
          switch (this.target.id) {
            case 'partPaper':

                let paper = document.getElementById('paper');
                setTimeout(() => {
                  // let x =document.getElementById('mypaper')
                  // x.remove()
                  paper.removeChild(paper.firstChild);
                  paper.insertAdjacentHTML('afterbegin', '<img id="coloredPaper" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp20/paper2.png ">');
                }, 1000);

                gsap.to(this.target, { y: 0, x: 0, duration: 1, display: 'none'});

              break;
          }
        }

          if(this.hitTest('#glass') && paperImg == 'paper2.png'){
            switch (this.target.id) {
              case 'paper':
                console.log('kkkkkkkkkkkkkkkkkk');

                  let glass = document.getElementById('glass');
                  setTimeout(() => {
                    // let x =document.getElementById('myglass')
                    // x.remove()
                    glass.removeChild(glass.firstChild);
                    glass.insertAdjacentHTML('afterbegin', '<img id="coloredPaper" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp20/paperglass.png ">');
                  }, 1000);
                  setTimeout(() => {
                    // let x =document.getElementById('myglass')
                    // x.remove()
                    glass.removeChild(glass.firstChild);
                    glass.insertAdjacentHTML('afterbegin', '<img id="coloredPaper" style="width: 250%" data-toggle="tooltip" data-placement="left" src="assets/exp20/final.png ">');
                  }, 3000);

                  setTimeout(() => {
                    reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                    $('#exampleModalCenter').modal('show');
                    // video.play();
                  }, 5000);

                  gsap.to(this.target, { duration: 1, display: 'none'});

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
