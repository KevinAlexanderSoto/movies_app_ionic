import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/apiInterfaces';

@Component({
  selector: 'app-movies-image-poster-swiper',
  templateUrl: './movies-image-poster-swiper.component.html',
  styleUrls: ['./movies-image-poster-swiper.component.scss'],
})
export class MoviesImagePosterSwiperComponent implements OnInit {

  @Input() moviesArray: Movie[] = [];
  @Output() onMoviewDetailClick = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit() { }

  onMovieDetail(event: number): void {
    this.onMoviewDetailClick.emit(event);
  }

}
