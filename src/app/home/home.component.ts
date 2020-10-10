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
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@edigleyssonsilva' },
      { name: 'twitter:creator', content: '@edigleyssonsilva' },
      { name: 'og:url', content: '/home' },
      { name: 'og:title', content: 'Home Page' },
      { name: 'og:description', content: 'This is my home page' },
    ]);
  }

}

/**
 * <meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@nytimesbits" />
<meta name="twitter:creator" content="@nickbilton" />
<meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
<meta property="og:title" content="A Twitter for My Sister" />
<meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
<meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
 */
