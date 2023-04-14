import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DoCheck,
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
import { Course } from "../../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { COURSES_SERVICE } from "../../app.component";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    DoCheck
{
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
  // *******************
  // Only run once
  ngOnInit() {
    console.log("ngOnInit", this.course);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  // *******************
  // ********************
  //  Prevent expensive calculations
  ngAfterContentChecked(): void {
    console.log("ngAfterContentCheck");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  // ********************
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChange(newTitle: string) {
    this.course.description = newTitle;
  }
}
