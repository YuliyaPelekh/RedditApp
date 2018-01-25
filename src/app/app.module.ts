import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RedditComponent } from './reddit.component';
import { RedditArticle } from './reddit-article.component';

@NgModule({
  declarations: [
    RedditArticle,
    RedditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RedditComponent]
})

export class AppModule { }
