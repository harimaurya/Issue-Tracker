import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private url = 'https://api.github.com/repos/angular/angular.js/issues';
  constructor(private http: Http) { }

  getIssueDetail(id) {
    return this.http.get(this.url + '/' + id).map(response => response.json());
  }

  getIssueList(page_no) {
    if (page_no) {
      return this.http.get(this.url + '?page=' + page_no + '&per_page=10').map(response => response.json());
    }
    return this.http.get(this.url).map(response => response.json());
  }
}
