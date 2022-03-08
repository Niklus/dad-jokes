import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  hide: boolean = true;

  deleteItem() {
    if (confirm('Are you sure...')) {
      this.jokeDeleted.emit(this.joke);
    }
  }

  toggle() {
    this.hide = !this.hide;
  }
}
