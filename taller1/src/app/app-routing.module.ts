import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';

const routes: Routes = [
  {path:'home',component:HomeViewComponent},
  {path: 'movies', component:MoviesTableComponent},
  {path:'business/peliculas' , component: MoviesTableComponent},
  {path:'', pathMatch: 'full', redirectTo:'home'},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
