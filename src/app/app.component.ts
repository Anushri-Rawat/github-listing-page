import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username: string = '';
  reposPerPage: number = 10;
  page: number = 1;
  userDetails: any = null;
  userRepos: any = null;
  userNotFoundError: boolean = false;
  totalRepos: number = 1;
  showSearchBox: boolean = true;
  constructor(private apiService: ApiService, private toast: ToastrService) {}

  setToInitialState() {
    this.userDetails = null;
    this.userRepos = null;
  }

  goBackHandler() {
    this.showSearchBox = true;
    this.username = '';
    this.setToInitialState();
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    this.setToInitialState();
    if (this.username.trim()) {
      this.showSearchBox = false;
      try {
        this.userDetails = await this.apiService.getUser(this.username);
        this.totalRepos = this.userDetails.public_repos;
        const repoData = await this.apiService.getRepoDetails(
          this.username,
          this.reposPerPage,
          this.page
        );
        if (Array.isArray(repoData) && repoData.length > 0)
          this.userRepos = repoData;
      } catch (error: any) {
        this.showSearchBox = true;
        this.setToInitialState();
        this.toast.error(error.error.message || 'Something went wrong!');
      }
    } else {
      this.toast.error('Please enter a valid GitHub username.');
    }
  }

  onUserReposUpdated(updatedUserRepos: any) {
    this.userRepos = updatedUserRepos;
  }
  onPageNumberUpdated(updatedPage: number) {
    this.page = updatedPage;
  }
  onRepoPerPageUpdated(updatedReposPerPage: number) {
    this.reposPerPage = updatedReposPerPage;
  }
}
