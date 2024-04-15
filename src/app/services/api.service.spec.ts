import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no requests are outstanding after each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    const mockUserData = { id: 1, name: 'John Doe' };
    const username = 'johndoe';

    service.getUser(username).then(userData => {
      expect(userData).toEqual(mockUserData);
    });

    const req = httpMock.expectOne(`${service.API_URL}users/${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUserData);
  });

  it('should fetch repository details', () => {
    const mockRepoData = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
    const username = 'johndoe';
    const reposPerPage = 10;
    const page = 1;

    service.getRepoDetails(username, reposPerPage, page).then(repoData => {
      expect(repoData).toEqual(mockRepoData);
    });

    const req = httpMock.expectOne(`${service.API_URL}users/${username}/repos?per_page=${reposPerPage}&page=${page}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRepoData);
  });
});
