import { Component } from '@angular/core';
import { ArticlesService } from '../Services/articles.service';
@Component({
  selector: 'app-atricledatatable',
  templateUrl: './atricledatatable.component.html',
  styleUrls: ['./atricledatatable.component.css']
})
export class AtricledatatableComponent {
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
