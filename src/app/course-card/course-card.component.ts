import {
  AfterContentInit,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Self,
  SimpleChanges,
  SkipSelf,
  ViewEncapsulation,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../services/courses.service";
import { COURSES_SERVICE } from "../app.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  course: Course;

  @Input()
  type: string;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(
    private coursesService: CoursesService // @Attribute("type") private type: string
  ) {
    console.log("constructor", this.course);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit() {
    console.log("ngOnInit", this.course);
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChange(newTitle: string) {
    this.course.description = newTitle;
  }
}
