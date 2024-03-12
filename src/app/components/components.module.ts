import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesImageSwiperComponent } from './movies-image-swiper/movies-image-swiper.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [MoviesImageSwiperComponent],
  exports: [MoviesImageSwiperComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
