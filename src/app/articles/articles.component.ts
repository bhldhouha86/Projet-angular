import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ArticlesService } from '../Services/articles.service'
import { ScategoeiesService } from '../Services/scategoeies.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  constructor(private artServ:ArticlesService,private scatserv:ScategoeiesService) {}
  articles:any;
  scategories:any;
  term:string
  formHeader=""
  showForm=false
  id=null
  designation=""
  imageart=""
  marque=""
  scategorieID=""
  prix=0
  qtestock=0
  reference=""

   getArticles()
   {
    this.artServ.fetchArticle().subscribe((data)=>this.articles=data);
   }
   ngOnInit():void{
    this.getArticles();
    this.getscategories();
   }
   getscategories()
   {
    return this.scatserv.fecthsouscategories().subscribe((data)=>{
      this.scategories=data;
      (err:any)=>console.log(err);
    })
   }
  supprimerArticle(id)
  {
    this.artServ.deleteArticle(id).subscribe((res)=>{this.getArticles();})
  }
 openForm(data)
 {
  this.showForm=true;
  if(data)
  {
    this.id=data['_id'];
    this.designation=data['designation'];
    this.imageart=data['imageart'];
    this.marque=data['marque'];
    this.prix=data['prix'];
    this.qtestock=data['qtestock'];
    this.reference=data['reference'];
    this.formHeader="Edit Article"
  }
  else{
    this.id=null;
    this.formHeader="Ajouter Article";
  }
 }
 clearForm()
 {
  this.reference="";
  this.designation="";
  this.imageart="";
  this.marque="";
  this.prix=0;
  this.qtestock=0;
 this.scategorieID=""
 }
 closeForm()
 {
  this.showForm=false;
  this.clearForm();
 }
 enregistrer()
 {
  this.showForm=false
  let art={
    id:this.id,
    designation:this.designation,
    imageart:this.imageart,
    marque:this.marque,
    prix:this.prix,
    qtestock:this.qtestock,
    reference:this.reference,
    scategorieID:this.scategorieID
   
  }
  if(this.id)
  {
    art['_id']=this.id
    this.artServ.editArticle(art).subscribe((res)=>{this.getArticles();})
    this.clearForm();
  }
  else{
    this.artServ.addArticle(art).subscribe((res)=>{this.getArticles();})
    this.clearForm();
  }
  
 }

}
