import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.css']
})
export class IssuePageComponent implements OnInit {
  issues: any[];
  currentPage = 1;
  prevPage = this.currentPage - 1;
  nextPage = this.currentPage + 1;
  constructor(private route: ActivatedRoute, private service: DataService, private r: Router) { }

  reloadWithNewId(id: number) {
    this.r.navigateByUrl('page/' + id);
  }

  ngOnInit() {

    this.route.paramMap.subscribe(response => {
      this.currentPage = +response.get('page_no');
      this.loadData(this.currentPage);
    });

  }

  loadData(id) {
    this.currentPage = id ? id : 2;
    this.prevPage = this.currentPage - 1;
    this.nextPage = this.currentPage + 1;

    this.service.getIssueList(this.currentPage).subscribe(response => this.issues = response);
  }

}
