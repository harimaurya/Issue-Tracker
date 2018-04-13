import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IssueListingComponent } from './issue-listing.component';
import { DataService } from '../data.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('IssueListingComponent', () => {
  let component: IssueListingComponent;
  let fixture: ComponentFixture<IssueListingComponent>;
  let service: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListingComponent ],
      imports: [RouterTestingModule, HttpModule],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = new DataService(null);
    component = new IssueListingComponent(service);

  });

  it('should set issues property from server', () => {
    const response = [
      {
        number: 16469,
        title: 'Some Title'
      }
    ];
    spyOn(service, 'getIssueList').and.callFake(() => {
      return Observable.from([ response ]);
    });

    component.ngOnInit();

    expect(component.issues).toBe(response);
  });

});
