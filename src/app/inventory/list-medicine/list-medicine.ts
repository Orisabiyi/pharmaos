import { Component } from "@angular/core";
import { featherSearch } from "@ng-icons/feather-icons";
import { NgIcon } from "@ng-icons/core";
import { provideIcons } from "@ng-icons/core";

@Component({
  imports: [NgIcon],
  providers: [provideIcons({ featherSearch })],
  selector: "app-list-medicine",
  styleUrl: "./list-medicine.css",
  templateUrl: "./list-medicine.html",
})
export class ListMedicine {}
