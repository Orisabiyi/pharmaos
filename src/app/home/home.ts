import { Component } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { remixArrowDropDownLine } from '@ng-icons/remixicon';
import { phosphorCaretDoubleDownThin } from '@ng-icons/phosphor-icons/thin';
import { InventoryCardList, InventoryListAndStats } from "../inventory-list-and-stats";
import { InventoryCard } from "../inventory-card/inventory-card";

@Component({
  imports: [InventoryCard, NgIcon],
  providers: [provideIcons({ remixArrowDropDownLine, phosphorCaretDoubleDownThin })],
  selector: "app-home",
  styleUrl: "./home.css",
  templateUrl: "./home.html",
})
export class Home {
  showReportOptions: boolean = false;

  inventoryListAndStats: InventoryListAndStats[] = [
    {
      cardIcon: "/card-img-1.svg",
      title: "Good",
      subTitle: "Inventory Status",
      titleLable: "View Detailed Report",
      color: "bg-green-600/30",
      border: "border-green-600"
    },
    {
      cardIcon: "/card-img-2-money.svg",
      title: "Rs. 8,55,875",
      subTitle: "Medicines Available",
      titleLable: "Visit Inventory",
      color: "bg-yellow-600/30",
      border: "border-yellow-600"
    },
    {
      cardIcon: "/card-img-3-medicine.svg",
      title: "298",
      subTitle: "Medicines Available",
      titleLable: "Visit Inventory",
      color: "bg-blue-600/30",
      border: "border-blue-600"
    },
    {
      cardIcon: "/card-img-4-caution.svg",
      title: "01",
      subTitle: "Medicine Storage",
      titleLable: "Resolve Now",
      color: "bg-red-600/30",
      border: "border-red-600"
    }
  ]

  inventoryCardList: InventoryCardList[] = [
    {
      title: "Inventory",
      title2: "Go to Configuration",
      bodyTitle1: "298",
      bodyContent1: "Total no of Medicines",
      bodyTitle2: "24",
      bodyContent2: "Medicine Groups"
    },
    {
      title: "Quick Report",
      title2: "Go to Configuration",
      bodyTitle1: "70,856",
      bodyContent1: "Qty of Medicines Sold",
      bodyTitle2: "5,288",
      bodyContent2: "Invoices Generated"
    },
    {
      title: "My Pharmacy",
      title2: "Go to User Management",
      bodyTitle1: "04",
      bodyContent1: "Total no of Medicines",
      bodyTitle2: "05",
      bodyContent2: "Total no of Users"
    },
    {
      title: "Customers",
      title2: "Go to Customers Page",
      bodyTitle1: "845",
      bodyContent1: "Total no of Medicines",
      bodyTitle2: "Adalimumab",
      bodyContent2: "Frequently bought item"
    }
  ]

  // functions

  handleShowReportOptions(displayOption: boolean) {
    this.showReportOptions = displayOption;
  }
}
