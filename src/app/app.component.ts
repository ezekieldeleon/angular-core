import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  Optional,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from "./config";
import { CoursesService } from "./courses/services/courses.service";

function coursesServiceProvided(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>(
  "COURSES_SERVICE"
);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;
  // courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {}

  ngOnInit() {
    // this.coursesService.loadCourses().subscribe((course) => {
    //   this.courses = course;
    // });
    // this.courses$ = this.coursesService.loadCourses();
  }
  onEditCourse() {
    const course = this.courses[0];
    const newCourse = { ...course, description: "ngOnChanges" };
    this.courses[0] = newCourse;
  }

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course Saved"));
  }
}
