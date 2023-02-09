import { Component } from '@angular/core';
import { ScategoeiesService } from '../Services/scategoeies.service';

@Component({
  selector: 'app-scategoeies',
  templateUrl: './scategoeies.component.html',
  styleUrls: ['./scategoeies.component.css']
})
export class ScategoeiesComponent {
  constructor(private scatserv:ScategoeiesService){}
  formHeader="Ajouter une sous categorie"
scategories:any;
id=null
showForm=false
imagescat=""
nomscategorie=""
ngOninit():void{
  this.listescategorie()
}
listescategorie(){
  this.scatserv.fecthsouscategories().subscribe(
    (data)=>{
    this.scategories=data
    }
    );
}
DeleteCat(id){
  this.scatserv.deletesouscategorie(id).subscribe(
  (res)=>{
  this.listescategorie();
  })
  }
  clearForm(){
    this.nomscategorie=""
    this.imagescat=""
    }
  closeForm(){
    this.showForm=false;
    this.clearForm();
    }
}
