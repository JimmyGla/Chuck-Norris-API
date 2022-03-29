import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jokes: any[] = [];
  categories: any[] = [];
  title: any;

  constructor(private jokeService: JokesService) {}

  ngOnInit() {
    this.jokeService.getCategories().subscribe((categories: any) => {
      this.categories = categories;

      this.jokeService.getRandomJoke().subscribe((joke) => {
        this.jokes.push(joke);
      });
    });
  }

  // Search By Category
  searchByCategory(category: string) {
    this.jokes = [];
    for (let i = 0; i < 5; i++) {
      this.jokeService.getCategoryJoke(category).subscribe((joke) => {
        this.jokes.push(joke);
      });
    }
  }
}
