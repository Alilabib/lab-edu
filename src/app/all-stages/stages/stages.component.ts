import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
  // stages;
  ngOnInit() {
    // this.stages = this.dataService.stages
  }

  // stages: any[] = [
  //   { name: "المرحلة الابتدائية" , stage: 'primary' },
  //   { name: "المرحلة الاعدادية" , stage: 'middle' },
  //   { name: "المرحلة الثانوية" , stage: 'secondary' }
  // ]

  primary(name) {
    this.router.navigate(['/stage/primary'])
  }
  middle() {
    this.router.navigate(['/stage/middle'])
  }
  secondary() {
    this.router.navigate(['/stage/secondary'])
  }

}
