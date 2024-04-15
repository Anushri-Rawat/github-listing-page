import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule],
      declarations: [UserDetailsComponent],
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user details if userDetails is available', () => {
    const userDetails = {
      avatar_url: 'https://example.com/avatar.png',
      name: 'Anushri Rawat',
      followers: 53,
      following: 53,
      bio: 'Frontend Developer',
      location: 'Uttarakhand',
    };
    component.userDetails = userDetails;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('img').getAttribute('src')).toBe(
      'https://example.com/avatar.png'
    );
    expect(compiled.querySelector('h3').textContent).toContain('Anushri Rawat');
    expect(compiled.querySelector('.followers').textContent).toContain(
      'Followers : 53'
    );
    expect(compiled.querySelector('.following').textContent).toContain(
      'Following : 53'
    );
    expect(compiled.querySelector('.bio').textContent).toContain(
      'Frontend Developer'
    );
    expect(compiled.querySelector('.location').textContent).toContain(
      'Uttarakhand'
    );
  });

  it('should display loader if userDetails is null', () => {
    component.userDetails = null;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ngx-skeleton-loader')).toBeTruthy();
  });
});
