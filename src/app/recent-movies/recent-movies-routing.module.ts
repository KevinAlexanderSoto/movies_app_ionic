import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentMoviesPage } from './recent-movies.page';

const routes: Routes = [
  {
    path: '',
    component: RecentMoviesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentMoviesPageRoutingModule { }
