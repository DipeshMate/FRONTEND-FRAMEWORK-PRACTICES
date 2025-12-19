import {Component } from '@angular/core';
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { HomeComponent } from "./MyComponents/home/home.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  providers:[HttpClientModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
}
