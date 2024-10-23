// seo.service.ts dosyası
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.url;

        if (currentUrl.startsWith('//')) {
          return;
        } else {
          this.updateMetaTags();
        }
      });
  }

  updateMetaTags(): void {
    const route = this.getCurrentRoute(this.activatedRoute.root);
    const metaData = this.getMetaData(route);

    if (metaData) {
      this.title.setTitle(metaData.title);

      this.meta.updateTag({
        name: 'description',
        content: metaData.description,
      });

      if (metaData.keywords && metaData.keywords.length > 0) {
        this.meta.updateTag({
          name: 'keywords',
          content: metaData.keywords.join(', '),
        });
      } else {
        this.meta.removeTag('name="keywords"');
      }

      this.meta.updateTag({
        property: 'og:title',
        content: metaData.title,
      });

      this.meta.updateTag({
        property: 'og:description',
        content: metaData.description,
      });

      const currentUrl = this.router.url;
      const baseUrl = window.location.origin;
      const ogUrl = baseUrl + currentUrl;

      if (metaData.og_image) {
        this.meta.updateTag({
          property: 'og:image',
          content: baseUrl + '/' + metaData.og_image,
        });
      } else {
        this.meta.removeTag('property="og:image"');
      }

      this.meta.updateTag({
        property: 'og:url',
        content: ogUrl,
      });

      ///////////// twitter tags
      this.meta.updateTag({
        property: 'twitter:title',
        content: metaData.title,
      });
    }
  }

  updateMetaTagsForProduct(product: any): void {
    this.title.setTitle(product.title);

    this.meta.updateTag({
      name: 'description',
      content: product.description,
    });

    this.meta.updateTag({
      name: 'keywords',
      content: product.keywords.join(', '),
    });

    ///////////// og tags

    this.meta.updateTag({
      property: 'og:title',
      content: product.title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: product.description,
    });

    if (product.image) {
      const baseUrl = window.location.origin;
      this.meta.updateTag({
        property: 'og:image',
        content: baseUrl + '/' + product.image,
      });
    } else {
      this.meta.removeTag('property="og:image"');
    }
  }

  getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    let child = route.firstChild;
    while (child?.firstChild) {
      child = child.firstChild;
    }
    return child || route;
  }

  getMetaData(route: ActivatedRoute): any {
    let data = null;
    let currentRoute: ActivatedRoute | null = route;

    while (currentRoute) {
      if (currentRoute?.data) {
        currentRoute.data.subscribe((value) => {
          data = value;
        });
      }
      currentRoute = currentRoute.firstChild ?? null;
    }

    return data;
  }
}
