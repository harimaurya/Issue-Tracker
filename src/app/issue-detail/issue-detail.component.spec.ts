import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { IssueDetailComponent } from './issue-detail.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { HttpModule } from '@angular/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

class ActivatedRouteStub {
  paramMap: Observable<any> = Observable.empty();
}

describe('IssueDetailComponent', () => {
  let component: IssueDetailComponent;
  let fixture: ComponentFixture<IssueDetailComponent>;
  let serviceData: DataService;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDetailComponent ],
      imports: [MarkdownToHtmlModule, HttpModule],
      providers: [
        DataService,
        // { provide: ActivatedRoute, useClass: ActivatedRouteStub }
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: Observable.from([{ page_no: 1 }]),
          },
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    serviceData = new DataService(null);
    component = new IssueDetailComponent(route, serviceData);

  });

  // it('Should get issue\'s Data from server', () => {
  //   const response = [
  //     {
  //       number: 16469,
  //       title: 'Some Title'
  //     }
  //   ];

  //   spyOn(serviceData, 'getIssueDetail').and.callFake( () => {
  //     return Observable.from([response]);
  //   });


  //   component.ngOnInit();

  //   expect(component.issueDetail).toContain(response);

  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
