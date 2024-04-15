import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent {
  @Input() userRepos: any = null;
  @Input() username: string = '';
  @Input() reposPerPage: number = 10;
  @Input() page: number = 1;
  @Input() totalRepos: number = 1;

  getRange(value: number): number[] {
    return Array.from({ length: value }, (_, index) => index + 1);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]}${day},${year}`;
  }
}
