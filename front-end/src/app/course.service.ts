import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {Course} from "./Course";

@Injectable()
export class CourseService {

  constructor(private http: Http) {
  }

  getCourseList(): Promise<Course[]> {
    // return this.http.get('http://localhost:8085/api/find-course-list?page=1&rows=10')
    //   .toPromise().then(resp =>
    //     resp.json().result as Course[]
    //   );
    return Promise.resolve([{name:'123'},{name:'456'}]);
  }
}
