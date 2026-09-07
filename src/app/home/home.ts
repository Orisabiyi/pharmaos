import { Component } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { remixArrowDropDownLine } from '@ng-icons/remixicon';

@Component({
  imports: [NgIcon],
  providers: [provideIcons({ remixArrowDropDownLine })],
  selector: "app-home",
  styleUrl: "./home.css",
  templateUrl: "./home.html",
})
export class Home {
  inventoryListAndStats = [
    {
      cardIcon: "/card-img-1.svg",
      title: "Good",
      subTitle: "Inventory Status",
      titleLable: "View Detailed Report",
      color: "bg-green-600/30",
      border: "border-green-600/30"
    },
    {
      cardIcon: "/card-img-3-medicine.svg",
      title: "298",
      subTitle: "Medicines Available",
      titleLable: "Visit Inventory",
      color: "bg-blue-600/30",
      border: "border-blue-600/30"
    },
    {
      cardIcon: "/card-img-4-caution.svg",
      title: "01",
      subTitle: "Medicine Storage",
      titleLable: "Resolve Now",
      color: "bg-red-600/30",
      border: "border-red-600/30"
    }
  ]
}
