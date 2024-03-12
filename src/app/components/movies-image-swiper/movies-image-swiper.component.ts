import { Component, OnInit, input, Input, Output } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Movie } from '../../interfaces/apiInterfaces';

@Component({
  selector: 'app-movies-image-swiper',
  templateUrl: './movies-image-swiper.component.html',
  styleUrls: ['./movies-image-swiper.component.scss'],
})
export class MoviesImageSwiperComponent implements OnInit {

  @Input() moviesArray: Movie[] = [];
  constructor() {
  }

  ngOnInit() { }

}
