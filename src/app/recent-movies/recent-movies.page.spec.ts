import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecentMoviesPage } from './recent-movies.page';

describe('Tab1Page', () => {
  let component: RecentMoviesPage;
  let fixture: ComponentFixture<RecentMoviesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentMoviesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
