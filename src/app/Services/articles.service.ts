import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor( private http:HttpClient) { }
  url= "http://localhost:3001/api/articles/"
  fetchArticle()
  {
    return this.http.get(this.url)
  }
  deleteArticle(id)
  {
    return this.http.delete(this.url+"/"+id)
  }
  addArticle(art)
  {
    return this.http.post(this.url,art)
  }
  editArticle(art)
  {
    return this.http.put(this.url+"/"+art.id,art)
  }

}
