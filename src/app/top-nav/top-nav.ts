import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  imports: [NgIcon, DatePipe],
  providers: [provideIcons({ featherSearch })],
  selector: "app-top-nav",
  styleUrl: "./top-nav.css",
  templateUrl: "./top-nav.html",
})
export class TopNav {
  dateValue: number = Date.now();
}
