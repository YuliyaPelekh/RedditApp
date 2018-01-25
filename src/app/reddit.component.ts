import { Component } from '@angular/core';
import { RedditArticle, Article } from './reddit-article.component';

@Component({
  selector: 'reddit',
  entryComponents: [RedditArticle],
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})

export class RedditComponent {

	articles: Article[];

	constructor(){
		this.articles = [
			new Article('Angular 2', 'http://angular.io', 3),
			new Article('Fullstack', 'http://fullstack.io', 2),
			new Article('Angular Homepage', 'http://angular.io', 1),
		];
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		this.articles.push(new Article(title.value, link.value, 0));
		title.value = '';
		link.value = '';
	}

	sortedArticles(): Article[] {
		return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
	}
}
