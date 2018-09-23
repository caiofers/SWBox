import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  boxOptions: Array<{value: string, description: string, img: string, alt: string;}>;
  formatBox: string;
  constructor(public navCtrl: NavController) {
    this.boxOptions = [
      {value: 'cilindro', description: 'Cilíndrica', img: "../../assets/imgs/icon.jpg", alt: ""},
      {value: 'quadradro', description: 'Quadrada', img: "", alt: ""},
      {value: 'cilindrof', description: 'Cilíndrica Fechada', img: "", alt: ""}
    ]
  }

  setFormatValue(value){
    this.formatBox = value;
  }

}