import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke.model';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
})
export class JokeListComponent implements OnInit {
  jokes: Joke[] = [];

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokes = this.jokeService.getJokes();
  }

  addJoke(joke) {
    this.jokeService.addJoke(joke);
    this.jokes = this.jokeService.getJokes();
  }

  deleteJoke(joke) {
    this.jokeService.deleteJoke(joke);
    this.jokes = this.jokeService.getJokes();
  }
}
