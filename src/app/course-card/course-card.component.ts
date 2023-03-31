import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input()
  course: Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<ElementRef>;

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beignner";
    }
  }

  cardStyles() {
    return { "text-decoration": "underline" };
  }
}
