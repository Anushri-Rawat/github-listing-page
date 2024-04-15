import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxSkeletonLoaderModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        NgxPaginationModule,
        FormsModule,
      ],
      declarations: [PaginationComponent],
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.reposPerPage).toBe(10);
    expect(component.page).toBe(1);
  });
});
