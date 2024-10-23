import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fairytales',
  templateUrl: './fairytales.page.html',
  styleUrls: ['./fairytales.page.scss'],
})
export class FairytalesPage implements OnInit {
  fairyTales: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.FairyTales();
  }

  FairyTales() {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.fairyTales = data.FAIRYTALES.stories;
    });
  }
}
