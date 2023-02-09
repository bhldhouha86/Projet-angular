import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScategoeiesService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3001/api/scategories/"
  fecthsouscategories()
  {
    return this.http.get(this.url)
  }
  deletesouscategorie(id){
    return this.http.delete(this.url + id)
    }
  addsouscategorie(scateg){
    return this.http.post(this.url,scateg)
  }
  Putsouscategorie(scat)
{
return this.http.put(this.url + "/" + scat.id,scat)
}
}
