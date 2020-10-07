import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { NavbarExperimentComponent } from './navbar-experiment/navbar-experiment.component';
import { DataService } from './shared/data.service';
import { Exp1Component } from './experiments_component/exp1/exp1.component';
import { Exp2Component } from './experiments_component/exp2/exp2.component';
import { Exp3Component } from './experiments_component/exp3/exp3.component';
import { Exp4Component } from './experiments_component/exp4/exp4.component';
import { Exp7Component } from './experiments_component/exp7/exp7.component';
import { Exp10Component } from './experiments_component/exp10/exp10.component';
import { Exp15Component } from './experiments_component/exp15/exp15.component';
import { Exp8Component } from './experiments_component/exp8/exp8.component';
import { Exp13Component } from './experiments_component/exp13/exp13.component';
import { Exp6Component } from './experiments_component/exp6/exp6.component';
import { Exp14Component } from './experiments_component/exp14/exp14.component';
import { Exp11Component } from './experiments_component/exp11/exp11.component';
import { Exp12Component } from './experiments_component/exp12/exp12.component';
import { Exp5Component } from './experiments_component/exp5/exp5.component';
import { Exp9Component } from './experiments_component/exp9/exp9.component';
import { Exp16Component } from './experiments_component/exp16/exp16.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { StepsComponent } from './steps/steps.component';
import { UseLabComponent } from './use-lab/use-lab.component';
import { HelpComponent } from './help/help.component';
import { StagesComponent } from './all-stages/stages/stages.component';
import { PrimaryComponent } from './all-stages/primary/primary.component';
import { MiddleComponent } from './all-stages/middle/middle.component';
import { SecondaryComponent } from './all-stages/secondary/secondary.component';
import { StageComponent } from './all-stages/stage/stage.component';
import { Exp17Component } from './experiments_component/exp17/exp17.component';
import { Exp18Component } from './experiments_component/exp18/exp18.component';
import { Exp19Component } from './experiments_component/exp19/exp19.component';
import { Exp20Component } from './experiments_component/exp20/exp20.component';
import { Exp21Component } from './experiments_component/exp21/exp21.component';
import { Exp22Component } from './experiments_component/exp22/exp22.component';
import { Exp23Component } from './experiments_component/exp23/exp23.component';
import { Exp24Component } from './experiments_component/exp24/exp24.component';
import { Exp25Component } from './experiments_component/exp25/exp25.component';
import { Exp26Component } from './experiments_component/exp26/exp26.component';
import { Exp27Component } from './experiments_component/exp27/exp27.component';
import { Exp28Component } from './experiments_component/exp28/exp28.component';
import { Exp29Component } from './experiments_component/exp29/exp29.component';
import { Exp30Component } from './experiments_component/exp30/exp30.component';
import { Exp31Component } from './experiments_component/exp31/exp31.component';
import { Exp32Component } from './experiments_component/exp32/exp32.component';
import { Exp33Component } from './experiments_component/exp33/exp33.component';
import { Exp34Component } from './experiments_component/exp34/exp34.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'experiment/:id', component: ExperimentComponent },
  { path: 'conclusion/:id', component: ConclusionComponent },
  { path: 'UseLab/:id', component: UseLabComponent },
  { path: 'steps/:id', component: StepsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'exp1', component: Exp1Component },
  { path: 'exp3', component: Exp2Component },
  { path: 'exp2', component: Exp3Component },
  { path: 'exp4', component: Exp4Component },
  { path: 'exp5', component: Exp5Component },
  { path: 'exp6', component: Exp6Component },
  { path: 'exp7', component: Exp7Component },
  { path: 'exp8', component: Exp8Component },
  { path: 'exp9', component: Exp9Component },
  { path: 'exp10', component: Exp10Component },
  { path: 'exp11', component: Exp11Component },
  { path: 'exp12', component: Exp12Component },
  { path: 'exp13', component: Exp13Component },
  { path: 'exp14', component: Exp14Component },
  { path: 'exp15', component: Exp15Component },
  { path: 'exp16', component: Exp16Component },
  { path: 'exp17', component: Exp17Component },
  { path: 'exp18', component: Exp18Component },
  { path: 'exp19', component: Exp19Component },
  { path: 'exp20', component: Exp20Component },
  { path: 'exp21', component: Exp21Component },
  { path: 'exp22', component: Exp22Component },
  { path: 'exp23', component: Exp23Component },
  { path: 'exp24', component: Exp24Component },
  { path: 'exp25', component: Exp25Component },
  { path: 'exp26', component: Exp26Component },
  { path: 'exp27', component: Exp27Component },
  { path: 'exp28', component: Exp28Component },
  { path: 'exp29', component: Exp29Component },
  { path: 'exp30', component: Exp30Component },
  { path: 'exp31', component: Exp31Component },
  { path: 'exp32', component: Exp32Component },
  { path: 'exp33', component: Exp33Component },
  { path: 'exp34', component: Exp34Component },
  { path: 'stages', component: StagesComponent },
  // { path: 'stage/:name', component: StageComponent },
  { path: 'stage/primary', component: PrimaryComponent },
  { path: 'stage/middle', component: MiddleComponent },
  { path: 'stage/secondary', component: SecondaryComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExperimentComponent,
    NavbarExperimentComponent,
    Exp1Component,
    Exp2Component,
    Exp3Component,
    Exp4Component,
    Exp5Component,
    Exp6Component,
    Exp7Component,
    Exp8Component,
    Exp9Component,
    Exp10Component,
    Exp11Component,
    Exp12Component,
    Exp13Component,
    Exp14Component,
    Exp15Component,
    Exp16Component,
    ConclusionComponent,
    StepsComponent,
    UseLabComponent,
    HelpComponent,
    StagesComponent,
    PrimaryComponent,
    MiddleComponent,
    SecondaryComponent,
    StageComponent,
    Exp17Component,
    Exp18Component,
    Exp19Component,
    Exp20Component,
    Exp21Component,
    Exp22Component,
    Exp23Component,
    Exp24Component,
    Exp25Component,
    Exp26Component,
    Exp27Component,
    Exp28Component,
    Exp29Component,
    Exp30Component,
    Exp31Component,
    Exp32Component,
    Exp33Component,
    Exp34Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
