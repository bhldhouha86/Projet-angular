import { Component } from '@angular/core';
import { CategoriesService } from '../Services/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  constructor(private catServ:CategoriesService) {}
 
  categories:any;
  formHeader="Ajouter une categorie"
  id=null
  nomcategorie="Cosmitique"
  imagecategorie=""
  showForm=false
  showFormModif=false
  ngOnInit():void{
    this.listcategorie()
    }
    listcategorie(){
      this.catServ.fecthcategories().subscribe(
        (data)=>{
        this.categories=data
        }
        );
    }
    DeleteCat(id){
      this.catServ.deletecategorie(id).subscribe(
      (res)=>{
      this.listcategorie();
      })
      }
      openForm(data){
        this.showForm=true;
        if(data){
          this.nomcategorie=data['nomcategorie'];
          this.imagecategorie=data['imagecategorie'];
          this.id=data['_id'];
          this.formHeader="Edit Categorie";
        }
        else{
          this.id=null;
          this.formHeader="Add Categorie";
        }
        }
        clearForm(){
          this.nomcategorie=""
          this.imagecategorie=""
          }
        closeForm(){
          this.showForm=false;
          this.clearForm();
          }
          savecategorie(){
            this.showForm=false;
            let cat={
            nomcategorie:this.nomcategorie,
            imagecategorie:this.imagecategorie
            }
            this.catServ.addcategorie(cat).subscribe(
            (res)=>{
            this.listcategorie();
            this.closeForm();
            }
            )
            }  
}
