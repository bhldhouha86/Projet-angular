import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScategoeiesComponent } from './scategoeies/scategoeies.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlescardComponent } from './articlescard/articlescard.component';
import { AtricledatatableComponent } from './atricledatatable/atricledatatable.component';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ScategoeiesComponent,
    ArticlesComponent,
    ArticlescardComponent,
    AtricledatatableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
