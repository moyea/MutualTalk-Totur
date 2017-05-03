import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CourseService} from "../course.service";
import {Course} from "../Course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.getCourseList().then(resp => this.courseList = resp);

    let clicks = Observable.fromEvent(document, 'click');
    let result = clicks.throttle(() => Observable.interval(30000));
    result.subscribe(x => console.log(x));
  }

}
