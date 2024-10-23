import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from '../app/services/data.service';
import { ScreensizeService } from '../app/services/screen-size.service';
import { PageTransitionService } from './services/page-transition.service';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('desktop', { read: ElementRef }) desktop: ElementRef | undefined;
  isDesktop: boolean | undefined;
  menu: { title: string; url: string; icon: string }[] = [];
  constructor(
    private platform: Platform,
    private dataService: DataService,
    private screenSize: ScreensizeService,
    private pageTransitionService: PageTransitionService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.dataService.getHeaderMenu().subscribe((menuItems) => {
      this.menu = menuItems;
    });
  }

  pageTransition() {
    return this.pageTransitionService.fadeOutInPageTransition;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.screenSize.onResize(this.platform.width());
      this.screenSize.isDesktopView().subscribe((isDesktop) => {
        this.isDesktop = isDesktop;
      });
    });
  }
  @HostListener('window:resize', ['$event'])
  private onResize(event: { target: { innerWidth: number } }) {
    this.screenSize.onResize(event.target.innerWidth);
  }
}
