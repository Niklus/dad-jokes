import { Component, Output, EventEmitter } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    if (setup && punchline) {
      this.jokeCreated.emit({
        setup,
        punchline,
      });
    }
  }
}
