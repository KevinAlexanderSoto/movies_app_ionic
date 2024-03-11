import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecentMoviesPage } from './recent-movies.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecentMoviesPageRoutingModule } from './recent-movies-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RecentMoviesPageRoutingModule
  ],
  declarations: [RecentMoviesPage]
})
export class RecentMoviesPageModule { }
