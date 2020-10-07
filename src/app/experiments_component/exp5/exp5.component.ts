import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp5',
  templateUrl: './exp5.component.html',
  styleUrls: ['./exp5.component.scss']
})
export class Exp5Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  // @ViewChild('videoPlayer') video: ElementRef;

  // @ViewChild('Boom') boom: ElementRef;
  title = 'تجربة تحضير غاز الاكسجين في المعمل ';
  exp_Id = '5';

  constructor(private route: Router) {
    gsap.registerPlugin(Draggable);
  }

  ngOnInit() {
    // let video = this.video.nativeElement;
    // video.pause();
    $('.toast').toast('show');
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  ngAfterViewInit() {

    // let video = this.video.nativeElement;
    let reset_tools = [];

    this.tools.map(t => {
      reset_tools.push(t.nativeElement);

      Draggable.create(t.nativeElement, {
        type: "x,y",

        bounds: this.con.nativeElement, edgeResistance: 0.65, inertia: true,
        onDragStart() {
          $('#' + this.target.id).tooltip('disable');
        },
        onDragEnd: function () {
          if (this.hitTest('#workSpace')) {

            $('.toast').toast('hide');

            let flaskSrc = document.getElementById('flask').getElementsByTagName('img')[0].src;
            let flaskImg = flaskSrc.split('exp5/')[1];

            let basinSrc = document.getElementById('basin').getElementsByTagName('img')[0].src;
            let basinImg = basinSrc.split('exp5/')[1];
            if (this.hitTest('#flask') && this.target.id != 'flask') {
              switch (this.target.id) {
                case 'manganese':
                  gsap.to(this.target, { opacity: 0, display: 'none' });
                  let flask = document.getElementById('flask');
                  flask.removeChild(flask.firstChild);
                  flask.insertAdjacentHTML('beforeend', '<img  data-toggle="tooltip" style="width: 100%;" data-placement="top" src="assets/exp5/flask1.png">');
                  break;

                case 'stopper':
                  if (flaskImg == 'flask1.png') {
                    gsap.to(this.target, { opacity: 0, display: 'none' });
                    let flask = document.getElementById('flask');
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('beforeend', '<img style="width:100%" src="assets/exp5/flask2.png">');
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'suppression':
                  if (flaskImg == 'flask2.png') {
                    gsap.to(this.target, { opacity: 0, display: 'none' });
                    let flask = document.getElementById('flask');
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('beforeend', '<img style="width:100%" src="assets/exp5/flask3.png">');
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'pipe':
                  if (flaskImg == 'flask3.png') {
                    gsap.to(this.target, { opacity: 0, display: 'none' });

                    let flask = document.getElementById('flask');
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('beforeend', '<img style="width: 240%;" id="flask0" data-toggle="tooltip" data-placement="top" src="assets/exp5/afterpipe.png">');
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'basin':
                  if (flaskImg == 'afterpipe.png' && basinImg == 'basetester.png') {
                    gsap.to(this.target, { opacity: 0, display: 'none' });

                    let flask = document.getElementById('flask');
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('beforeend', '<img style="width:300%" src="assets/exp5/end.png" usemap="#workmap"><map name="workmap"><area shape="rect" coords="290,172,333,250" id="ddd"></map>');
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;

                case 'liquid':
                  if (flaskImg == 'end.png' && this.hitTest('#ddd')) {
                    gsap.to(this.target, { rotation: 45, duration: 2 });
                    gsap.to(this.target, { rotation: 0, duration: 2, delay: 1 });
                    gsap.to(this.target, { duration: 1, delay: 1 });
                    let flask = document.getElementById('flask').getElementsByTagName('img')[0];
                    gsap.to(flask, { attr: { src: 'assets/exp5/finalResult.png' }, width: '300%' });
                    setTimeout(() => {
                      reset_tools.map(t => gsap.to(t, { 'z-index': 0 }));
                      $('#exampleModalCenter').modal('show');
                      // video.play();
                    }, 2500);
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;
              }
            }


            if (this.hitTest('#basin') && this.target.id != 'basin') {
              switch (this.target.id) {
                case 'tester':
                  gsap.to(this.target, { opacity: 0, display: 'none' });

                  let basin = document.getElementById('basin');
                  basin.removeChild(basin.firstChild);
                  basin.insertAdjacentHTML('beforeend', '<img style="width:100%" src="assets/exp5/basetester.png">');
                  break;

                case 'flask':
                  if (flaskImg == 'afterpipe.png' && basinImg == 'basetester.png') {
                    let basin = document.getElementById('basin')
                    gsap.to(basin, { opacity: 0, display: 'none' });
                    let flask = document.getElementById('flask');
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('beforeend', '<img style="width:300%" src="assets/exp5/end.png" usemap="#workmap"><map name="workmap"><area shape="rect" coords="290,172,333,250" id="ddd"></map>');
                  } else {
                    gsap.to(this.target, { y: 0, x: 0, duration: 1 });
                  }
                  break;
              }
            }
            if (flaskImg == 'afterpipe.png' && basinImg == 'basetester.png') {
              if (this.hitTest('#flask0')) {
                switch (this.target.id) {
                  case 'basin':
                    gsap.to(this.target, { opacity: 0, display: 'none' });
                    let flask = document.getElementById('flask');
                    flask.removeChild(flask.firstChild);
                    flask.insertAdjacentHTML('beforeend', '<img style="width:300%" src="assets/exp5/end.png" usemap="#workmap"><map name="workmap"><area shape="rect" coords="290,172,333,250" id="ddd"></map>');

                    break;
                }
              }
            }
            
          }
          else {
            gsap.to(this.target, { y: 0, x: 0, duration: 1 });
          }
        }
      })
    });
  }
  Close() {
    $('.toast').toast('hide');
  }

  backVideo() {
    this.route.navigateByUrl('experiment/' + this.exp_Id);
  }
  stop() {
    // let video = this.video.nativeElement;
    // video.pause();
  }
  GoNext() {
    $('#next').tooltip('hide');
    this.route.navigate(['experiment/6']);
  }
}
