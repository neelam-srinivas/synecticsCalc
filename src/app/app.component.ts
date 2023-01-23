import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularCalculator';
  calcValue = '0';
  initialValue = '';
  valueToInput(value: string) {
    this.initialValue = this.initialValue + value;
    this.calcValue = this.initialValue;
  }

  equalValue() {
    this.calcValue = eval(this.initialValue);
    this.initialValue =this.calcValue;
  }
  clear(){
    this.initialValue='';
    this.calcValue= '0';
  }

  calKeyValue(enterkey:any){
    this.calcValue = eval(enterkey)
  }

}
