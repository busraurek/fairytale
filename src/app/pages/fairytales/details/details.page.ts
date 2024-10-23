import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  story: any;
  urlTag: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.urlTag = this.route.snapshot.paramMap.get('urlTag');

    this.http.get<any>('assets/data.json').subscribe((data) => {
      this.story = data.FAIRYTALES.stories.find(
        (tale: any) => tale.urlTag === this.urlTag
      );
    });
  }
}
