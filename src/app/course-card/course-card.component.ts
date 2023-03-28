import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("card component - button clicked ....");
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
}
