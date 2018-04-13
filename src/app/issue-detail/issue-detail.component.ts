import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  issueDetail = {
    title: '',
    state: '',
    user:
      {
        login: ''
      }
    ,
    created_at: '',
    comments: '',
    body: ''
  };
  private id = 0;
  filterReady: Promise<boolean>;
  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(response => {
      this.id = +response.get('id');
    });

    this.service.getIssueDetail(this.id).subscribe(response => this.issueDetail = response);
    this.filterReady = Promise.resolve(true);

  }

}
