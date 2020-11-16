import { Component, OnInit } from '@angular/core';
import { JsonFilesService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = [];
  panelOpenState = false;
  n;
  r;
  value;
  constructor(private dataService: JsonFilesService){}
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.dataService.getData().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    })
  }
  permutationValue(){
    let cpyN = this.n;
    let cpyR = this.r;
    let facN = cpyN;
    let NsubR =  cpyN - cpyR;
    let facNsubR = NsubR;
    if((this.n < this.r) || (this.n == 0) || (this.r == 0)){
      this.value="n must be above r and both must be above 0";
    } else {
      while(cpyN > 1){
        facN *=(cpyN -1);
        cpyN--;
      }
      while(NsubR > 1){
        facNsubR *= (NsubR -1);
        NsubR--;
      }
      this.value = facN / facNsubR;
    }
  }
   reset(){
     this.n=1;
     this.r=1;
   }
}
