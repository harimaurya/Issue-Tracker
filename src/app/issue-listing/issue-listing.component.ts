import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-issue-listing',
  templateUrl: './issue-listing.component.html',
  styleUrls: ['./issue-listing.component.css']
})
export class IssueListingComponent implements OnInit {
  issues: any[];
  prevPage = 0;
  nextPage = 2;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getIssueList(1).subscribe(response => this.issues = response);
  }


}
