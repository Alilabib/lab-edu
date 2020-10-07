import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import Draggable from './../../../../node_modules/gsap/dist/Draggable';
import gsap from './../../../../node_modules/gsap/src/all';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exp23',
  templateUrl: './exp23.component.html',
  styleUrls: ['./exp23.component.scss']
})
export class Exp23Component implements OnInit {

  @ViewChildren('item') tools: ElementRef[];
  @ViewChild('container') con: ElementRef;
  title = "تجربة نمذجة النظائر";
  id = "23";

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

          // $('.toast').toast('hide');




        },
      });
    });

  }

  arr : any[] = [
    {
      name: 'الأسود',
      img: 'assets/exp23/blackGlass.png',
      bloc: '55.49',
      blocAverage: ' متوسط الكتله = الكتلة / 10 = 55.49 / 10 = 5.54',
      ratio: 'عدد الكرات في كل مجموعه * 100 / العدد الكلي(30)',
      ratio1: '%نسبة وجوده = الكتله = 10 * 100 / 30 = 33.3',
      atomicMass: 'الكتلة الذرية للكرات = متوسط الكتله * نسبة وجودالنظير',
      atomicMass1: 'الكتلة الذرية للكرات = 5.549 * 33.3 = 185.1'
    },
    {
      name: 'الأبيض',
      img: 'assets/exp23/whiteGlass.png',
      bloc: '56.33',
      blocAverage: ' متوسط الكتله = الكتلة / 10 = 56.33 / 10 = 5.53',
      ratio: 'عدد الكرات في كل مجموعه * 100 / العدد الكلي(30)',
      ratio1: '%نسبة وجوده = الكتله = 10 * 100 / 30 = 33.3',
      atomicMass: 'الكتلة الذرية للكرات = متوسط الكتله * نسبة وجودالنظير',
      atomicMass1: 'الكتلة الذرية للكرات = 5.5533 * 33.3 = 184.2'
    },
    {
      name: 'الأزرق',
      img: 'assets/exp23/blueGlass.png',
      bloc: '55.60',
      blocAverage: ' متوسط الكتله = الكتلة / 10 = 55.60 / 10 = 5.56',
      ratio: 'عدد الكرات في كل مجموعه * 100 / العدد الكلي(30)',
      ratio1: '%نسبة وجوده = الكتله = 10 * 100 / 30 = 33.3',
      atomicMass: 'الكتلة الذرية للكرات = متوسط الكتله * نسبة وجودالنظير',
      atomicMass1: 'الكتلة الذرية للكرات = 5.56 * 33.3 = 184.7'
    },
  ]

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
