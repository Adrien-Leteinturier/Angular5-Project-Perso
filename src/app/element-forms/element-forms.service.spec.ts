import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { ConnectionBackend } from '@angular/http';
import { ElementFormsService } from './element-forms.service';



let elementFormService : ElementFormsService;
let service: any;

describe('ElementFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        ElementFormsService,
        ConnectionBackend,
        HttpClient
      ]
    });
  });

  it('should be created', inject([ElementFormsService], (service: ElementFormsService) => {
    expect(service).toBeTruthy();
  }));

});

