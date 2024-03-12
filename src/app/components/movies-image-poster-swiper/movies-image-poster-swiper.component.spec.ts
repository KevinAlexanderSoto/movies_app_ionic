import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviesImagePosterSwiperComponent } from './movies-image-poster-swiper.component';

describe('MoviesImagePosterSwiperComponent', () => {
  let component: MoviesImagePosterSwiperComponent;
  let fixture: ComponentFixture<MoviesImagePosterSwiperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesImagePosterSwiperComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesImagePosterSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
