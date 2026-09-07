import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  imports: [DatePipe],
  selector: "app-top-nav",
  styleUrl: "./top-nav.css",
  templateUrl: "./top-nav.html",
})
export class TopNav {
  dateValue: number = Date.now();
}
