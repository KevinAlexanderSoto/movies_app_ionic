import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviesImagex2PosterSwiperComponent } from './movies-imagex2-poster-swiper.component';

describe('MoviesImagex2PosterSwiperComponent', () => {
  let component: MoviesImagex2PosterSwiperComponent;
  let fixture: ComponentFixture<MoviesImagex2PosterSwiperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesImagex2PosterSwiperComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesImagex2PosterSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
