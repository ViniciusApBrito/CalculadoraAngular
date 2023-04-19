import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1: string = '';
  numero2: string = '';
  resultado: number = 0;

  somar(): void {
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }

  subtrair(): void {
    this.resultado = parseInt(this.numero1) - parseInt(this.numero2);
  }

  multiplicar(): void {
    this.resultado = parseInt(this.numero1) * parseInt(this.numero2);
  }

  dividir(): void {
    this.resultado = parseInt(this.numero1) / parseInt(this.numero2);
  }

}
