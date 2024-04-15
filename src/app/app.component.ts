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
  reposPerPage: number = 20;
  page: number = 1;
  userDetails: any = null;
  userRepos: any = null;
  userNotFoundError: boolean = false;
  totalRepos: number = 1;
  constructor(private apiService: ApiService, private toast: ToastrService) {}

  async onSubmit(event: Event) {
    event.preventDefault();
    if (this.username.trim()) {
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
        this.toast.error(error.error.message);
      }
    } else this.toast.error('Please enter a valid GitHub username.');
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
