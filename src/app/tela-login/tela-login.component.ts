import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import internal from 'stream';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
peso: number | any=null;
altura: number | any=null;
resultado: number | any = 'Resultado'; 

calcularIMC() {
  if (this.altura > 0 && this.peso>0) {
    this.resultado = this.peso / (this.altura * this.altura); 
  } else {
    this.resultado = 'Valores Invalidos'; 
  }

}
}