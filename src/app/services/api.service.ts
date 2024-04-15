import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

// In HTTP, GET requests are cached. POST, PUT, and DELETE requests are not cached because they change the data in the server.

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public API_URL = 'https://api.github.com/';
  constructor(private httpClient: HttpClient) {}

  async getUser(githubUsername: string) {
    return await this.httpClient
      .get(this.API_URL + 'users/' + githubUsername)
      .toPromise();
  }
  async getRepoDetails(
    githubUsername: string,
    reposPerPage: number,
    page: number
  ) {
    return await this.httpClient
      .get(
        `${this.API_URL}users/${githubUsername}/repos?per_page=${reposPerPage}&page=${page}`
      )
      .toPromise();
  }
}
