import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from "@angular/material";
import 'hammerjs';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutes} from "./app-routes";
import {CourseListComponent} from './course-list/course-list.component';
import {CourseService} from "./course.service";
import {LangService} from "./lang/lang.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    MaterialModule.forRoot()
  ],
  providers: [CourseService, LangService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
