import { TestBed } from '@angular/core/testing';
import { AuthguardService } from './authguard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthguardService', () => {
  let service: AuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(AuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('canActivate return true', () => {
    service.token = 'xyz';
    const result = service.canActivate;
    expect(result);
  });

});
