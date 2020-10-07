import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-use-lab',
  templateUrl: './use-lab.component.html',
  styleUrls: ['./use-lab.component.scss']
})
export class UseLabComponent implements OnInit {

  experiment;
  @ViewChildren('try') try: ElementRef[];

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {
    let Id = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:radix
    this.experiment = this.data.Get(parseInt(Id));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  tryByYourSelf(url){
    this.router.navigateByUrl(`/${url}`);
  }
}
