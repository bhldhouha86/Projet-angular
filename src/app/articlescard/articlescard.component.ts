import { Component } from '@angular/core';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-articlescard',
  templateUrl: './articlescard.component.html',
  styleUrls: ['./articlescard.component.css']
})
export class ArticlescardComponent {
  constructor(private artServ:ArticlesService){}
  articles:any;
  getArticles()
  {
   this.artServ.fetchArticle().subscribe((data)=>this.articles=data);
  }
  ngOnInit():void{
   this.getArticles();
  }
}
