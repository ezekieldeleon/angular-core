import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../model/course";

@Pipe({ name: "filterByCategory", pure: false })
export class FilterByCategory implements PipeTransform {
  transform(courses: Course[], category: string) {
    console.log("transformed");
    return courses.filter((course) => course.category === category);
  }
}
