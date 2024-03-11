import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecentMoviesPage } from './recent-movies.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecentMoviesPageRoutingModule } from './recent-movies-routing.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ExploreContainerComponentModule,
    RecentMoviesPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [RecentMoviesPage]
})
export class RecentMoviesPageModule { }
