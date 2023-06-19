import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
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

  @Output()
  courseSelected = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked ...");

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return ["beginner-class"];
    }
  }

  cardStyles() {
    return { "background-image": "url(" + this.course.iconUrl + ")" };
  }
}
