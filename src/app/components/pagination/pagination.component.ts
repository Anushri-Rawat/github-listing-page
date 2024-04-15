import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() reposPerPage: number = 10;
  @Input() page: number = 1;
  @Input() username: string = '';
  @Input() userRepos: any[] = [];
  @Output() userReposUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() pageUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() reposPerPageUpdated: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private apiService: ApiService, private toast: ToastrService) {}

  repoChangeHandler(repoSize: any) {
    this.reposPerPage = repoSize;
    this.pageChangeHandler(1);
  }

  async pageChangeHandler(event: any) {
    try {
      this.page = event;
      var windows = window;
      windows.scrollTo(0, 0);
      this.userReposUpdated.emit(null);
      const repoData = await this.apiService.getRepoDetails(
        this.username,
        this.reposPerPage,
        this.page
      );
      if (Array.isArray(repoData) && repoData.length > 0) {
        this.userRepos = repoData;
        this.reposPerPageUpdated.emit(this.reposPerPage);
        this.pageUpdated.emit(this.page);
        this.userReposUpdated.emit(this.userRepos);
      }
    } catch (error: any) {
      this.toast.error(error.error.message || 'Something went wrong!', 'Error');
    }
    console.log(this.userRepos);
  }
}
