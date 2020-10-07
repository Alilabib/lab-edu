import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  constructor(private dataService: DataService,  private activeRoute: ActivatedRoute) { }
  stages;
  materials
  ngOnInit() {
    // this.stages = this.dataService.stages
    // this.getMaterials();
  }

  // getMaterials() {
  //   this.activeRoute.params.subscribe(params => {
  //     this.materials = this.dataService.stages[params.name].material.map(material => {
  //       console.log(material)
  //     })
  //   })
  // }

}
