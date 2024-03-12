import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/apiInterfaces';

@Component({
  selector: 'app-movies-image-poster-swiper',
  templateUrl: './movies-image-poster-swiper.component.html',
  styleUrls: ['./movies-image-poster-swiper.component.scss'],
})
export class MoviesImagePosterSwiperComponent implements OnInit {

  @Input() moviesArray: Movie[] = [];
  constructor() {
  }

  ngOnInit() { }

}
