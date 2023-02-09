import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlescardComponent } from './articlescard/articlescard.component';
import { AtricledatatableComponent } from './atricledatatable/atricledatatable.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ScategoeiesComponent } from './scategoeies/scategoeies.component';

const routes: Routes = [
  //liste des routes de chaque composant
  {path:'categorie',component:CategorieComponent},
  {path:'Article',component:ArticlesComponent},
  {path:'Article Card',component:ArticlescardComponent},
  {path:'souscategorie',component:ScategoeiesComponent},
  {path:'articledatatable',component:AtricledatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
