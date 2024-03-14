import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentMoviesPage } from './recent-movies.page';
import { MovieDetailPageModule } from '../movie-detail/movie-detail.module';
import { MovieDetailPage } from '../movie-detail/movie-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecentMoviesPage,
  },
  {
    path: 'detail/:id',
    component: MovieDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentMoviesPageRoutingModule { }
