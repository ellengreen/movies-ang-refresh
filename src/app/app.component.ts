import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  watched = [
    new Movie('Parasite', 'black comedy thriller', 2019),
    new Movie('Uncut Gems', 'drama', 2019),
    new Movie('Knives Out', 'comedy', 2019)
  ];

  toWatch = [
    new Movie('Little Women', 'drama', 2019),
    new Movie('Rise of Skywalker', 'action', 2019),
    new Movie('Booksmart', 'comedy', 2019)
  ];

}
