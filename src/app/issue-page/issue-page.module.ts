import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuePageComponent } from './issue-page.component';

@NgModule({
    declarations: [
        IssuePageComponent
    ],
    exports: [
        IssuePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'page/:page_no', component: IssuePageComponent}
        ])
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IssuePageModule { }
