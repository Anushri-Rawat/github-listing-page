import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserReposComponent } from './user-repos.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule, NgxPaginationModule],
      declarations: [UserReposComponent],
    });
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user repos if userRepos is available', () => {
    const userRepos = [
      {
        name: 'Repo 1',
        description: 'Description 1',
        language: 'JavaScript',
        updated_at: '2023-08-11T20:44:45Z',
      },
      {
        name: 'Repo 2',
        description: 'Description 2',
        language: 'TypeScript',
        updated_at: '2023-08-11T20:44:45Z',
      },
    ];
    component.userRepos = userRepos;
    fixture.detectChanges();
    const repoContainer = fixture.nativeElement.querySelector('.repoContainer');
    const repoElements = repoContainer.querySelectorAll('.relative');
    expect(repoElements.length).toBe(2);
  });

  it('should display loader if userRepos is null', () => {
    component.userRepos = null;
    fixture.detectChanges();
    const skeletonLoader =
      fixture.nativeElement.querySelector('.repoContainer');
    expect(skeletonLoader).toBeTruthy();
  });

  it('should display a message when userRepos is empty', () => {
    component.userRepos = [];
    fixture.detectChanges();
    const messageElement = fixture.nativeElement.querySelector(
      '.w-full.text-center'
    );
    expect(messageElement).toBeTruthy();
    expect(messageElement.textContent.trim()).toBe('No Repos to display');
  });
});
