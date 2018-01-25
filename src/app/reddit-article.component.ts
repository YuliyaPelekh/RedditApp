import { Component } from '@angular/core';

export class Article {
	title: string;
	link: string;
	votes: number;

	constructor(title: string, link: string, votes?: number) {
		this.title = title;
		this.link = link;
		this.votes = votes || 0;
	}

	voteUp(): void {
		this.votes += 1;
	}

	voteDown(): void {
		this.votes -= 1;
	}

	domain(): string {
		try {
			const link: string = this.link.split('//')[1];
			return link.split('/')[0];
		} catch (err) {
			return null;
		}
	}
}


@Component({
	selector: 'reddit-article',
	host: {
		class: 'row'
	},
	inputs: ['article'],
    templateUrl: './reddit-article.component.html'
})


export class RedditArticle {

	article: Article;

	voteUp(): boolean {	
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;
	}

}
