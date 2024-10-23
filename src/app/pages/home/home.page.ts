import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  SwiperOptions,
  EffectFade,
  EffectCards,
  EffectCube,
  Parallax,
  Swiper,
  Scrollbar,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  EffectFade,
  EffectCards,
  EffectCube,
  Parallax,
  Scrollbar,
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private swiper?: Swiper;
  slider: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sliderData();
  }
  ionViewWillEnter() {
    this.swiperBanner();
  }
  sliderData() {
    this.http.get('assets/data.json').subscribe((res: any) => {
      this.slider = res.HOME.container;
    });
  }

  swiperBanner() {
    this.swiper = new Swiper('.swiper-container-banner', {
      loop: true,
      speed: 1300,
      parallax: false,
      grabCursor: true,
      effect: 'slide',
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
