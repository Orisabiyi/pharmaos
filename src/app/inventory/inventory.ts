import { Component, inject } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import {
  lucidePlus,
  lucideChevronsUp,
  lucideChevronRight,
} from "@ng-icons/lucide";
import { RouterOutlet, Router, NavigationEnd } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { filter, map } from "rxjs/operators";

@Component({
  imports: [NgIcon, RouterOutlet],
  providers: [
    provideIcons({ lucidePlus, lucideChevronsUp, lucideChevronRight }),
  ],
  selector: "app-inventory",
  styleUrl: "./inventory.css",
  templateUrl: "./inventory.html",
})
export class Inventory {
  medicineListAndStats = [
    {
      cardIcon: "/card-img-1.svg",
      title: "298",
      subTitle: "Medicines Available",
      titleLable: "View Full List",
      color: "bg-green-600/30",
      border: "border-green-600/30",
    },
    {
      cardIcon: "/card-img-3-medicine.svg",
      title: "02",
      subTitle: "Medicines Groups",
      titleLable: "Visit Groups",
      color: "bg-blue-600/30",
      border: "border-blue-600/30",
    },
    {
      cardIcon: "/card-img-4-caution.svg",
      title: "01",
      subTitle: "Medicine Storage",
      titleLable: "Resolve Now",
      color: "bg-red-600/30",
      border: "border-red-600/30",
    },
  ];

  private router = inject(Router);
  currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );
}
