import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './content/contact/contact.component';
import { ArticleListComponent } from './content/article-list/article-list.component';
import { HomeComponent } from './content/home/home.component';
import { DictionaryComponent } from './content/dictionary/dictionary.component';
import { GameComponent } from './content/game/game.component';


const routes: Routes = [
  { path: 'contact', component:  ContactComponent},
  { path: '', component: HomeComponent },
  //  { path: '**', component: ArticleComponent }
  { path: 'dictionnaire', component: DictionaryComponent},
  { path: 'jeux', component: GameComponent},
    { path: 'histoiredesantilles', component:  ArticleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
