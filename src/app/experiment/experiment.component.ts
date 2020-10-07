import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
})
export class ExperimentComponent implements OnInit {
  @ViewChildren('try') try: ElementRef[];

  experiment;
  showFlagS = false;
  showFlagT = false;
  sub_title;
  sub_img;
  sub_txt;
  // @ViewChild('videoPlayer') video: ElementRef;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {
    let Id = this.route.snapshot.paramMap.get("id");
    this.experiment = this.data.Get(parseInt(Id));
  }

  ngOnInit() {
    /*  this.sub_title="أدوات التجربة";
      this.sub_img="assets/expTools.png";
      this.sub_txt=this.experiment.tools;
    */
  }

  ngAfterViewInit() {

  }

  Show(letter) {
    if (letter == 's') {
      (this.showFlagS) ? this.showFlagS = false : this.showFlagS = true; this.showFlagT = false;
    }
    else {
      (this.showFlagT) ? this.showFlagT = false : this.showFlagT = true; this.showFlagS = false;
    }
  }

  tryByYourSelf(url) {
    this.router.navigateByUrl(`/${url}`);
  }
}
