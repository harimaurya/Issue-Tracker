import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IssueListingComponent } from './issue-listing/issue-listing.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { DataService } from './data.service';
import { IssuePageModule } from './issue-page/issue-page.module';

@NgModule({
  declarations: [
    AppComponent,
    IssueListingComponent,
    IssueDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MarkdownToHtmlModule,
    IssuePageModule,
    RouterModule.forRoot([
      { path: '', component: IssueListingComponent },
      { path: 'issue/:id', component: IssueDetailComponent },
      { path: 'page/:page_no', loadChildren: 'app/issue-page/issue-page.module#IssuePageModule' }
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
