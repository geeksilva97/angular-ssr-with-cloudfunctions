import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private metaTags: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Página Inicial');  
    this.metaTags.addTags([
      { name: 'title', content: 'This is my home page' },
      { name: 'description', content: 'This is my home page' },
      { name: 'twitter:card', content: 'This is my home page' },
      { name: 'og:url', content: '/home' },
      { name: 'og:title', content: 'Home Page' },
      { name: 'og:description', content: 'This is my home page' },
    ]);
  }

}
