import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination';

// const routes: Routes = [
//   { path: '', component: UserInputFormComponent },
//   { path: 'user-details', component: UserRepoDetailsComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserReposComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
