import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  filterPost = '';

  posts = [
    {
      "id": 1,
      "title": "post one"
    },
    {
      "id": 2,
      "title": "post two"
    },
    {
      "id": 3,
      "title": "post three"
    },
    {
      "id": 4,
      "title": "post four"
    },
    {
      "id": 5,
      "title": "post five"
    },
    {
      "id": 6,
      "title": "post six"
    }
  ];

  ngOnInit(): void {
  }

}
