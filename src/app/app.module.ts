import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { GradeComponent } from './grade/grade.component';
import { GradesComponent } from './grades/grades.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatTreeModule} from '@angular/material/tree';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatIconModule} from '@angular/material/icon';
import { CourseComponent } from './course/course.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LabsComponent } from './labs/labs.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HeaderFacultyComponent } from './header-faculty/header-faculty.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  { path: 'Home', component:  HomePageComponent},
  { path: 'Grades', component:  GradesComponent},
  { path: 'Courses', component:  AllCoursesComponent},
  { path: 'Announcements', component: AnnouncementsComponent},
  { path: 'Login', component:  LoginComponent},
  { path: 'Register', component:  RegisterComponent},
  { path: 'Course', component: CourseComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'NewCourse', component: NewCourseComponent },
  {path:'', redirectTo: '/Login', pathMatch: 'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProfileComponent,
    GradeComponent,
    GradesComponent,
    AnnouncementsComponent,
    AnnouncementComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent,
    AllCoursesComponent,
    CourseComponent,
    LecturesComponent,
    LabsComponent,
    HeaderAdminComponent,
    AdminComponent,
    UsersComponent,
    HeaderFacultyComponent,
    NewCourseComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatTreeModule,
    MatTabsModule,
    CdkTreeModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
