import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { CoursesService } from "./services/courses.service";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { FilterByCategory } from "./filter-by-category.pipe";

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategory,
  ],
  imports: [CommonModule],
  exports: [CourseCardComponent, CourseImageComponent, FilterByCategory],
  providers: [CoursesService],
})
export class CoursesModule {}
