import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LinksService } from './links.service';


describe('LinksService', () => {
  let service: LinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all links list', () => {
    return service.getLinks().toPromise().then( (result: any) => {
      expect(result);
    });
  });
});
