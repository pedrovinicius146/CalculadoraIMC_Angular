import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaLoginComponent } from "./tela-login/tela-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CalculadoraIMC';
}
