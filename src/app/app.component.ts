import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingFormComponent } from './components/rating-form/rating-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RatingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-control-value-accesor';
}
