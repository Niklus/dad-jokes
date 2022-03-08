import { Injectable } from '@angular/core';
import jokes from '../data/data';

@Injectable()
export class JokeService {
  store = localStorage;

  constructor() {
    this.getJokes() || this.addToStorage('jokes', jokes);
  }

  getJokes() {
    return this.getFromStorage('jokes');
  }

  addJoke(joke) {
    const jokes = this.getFromStorage('jokes');
    jokes.unshift(joke);
    this.addToStorage('jokes', jokes);
  }

  deleteJoke(joke) {
    const setup = joke.setup;
    const punchline = joke.punchline;

    const jokes = this.getFromStorage('jokes');
    const newJokes = jokes.filter((joke) => {
      return joke.setup !== setup && joke.punchline !== punchline;
    });
    
    this.addToStorage('jokes', newJokes);
  }

  addToStorage(key, value) {
    this.store.setItem(key, JSON.stringify(value));
  }

  getFromStorage(key) {
    return JSON.parse(this.store.getItem(key));
  }
}
