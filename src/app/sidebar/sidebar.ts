import { Component, Input, inject } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import {
  lucideMoreVertical,
  lucideArchiveRestore,
  lucideList,
  lucideInfo,
  lucideChevronDown,
} from "@ng-icons/lucide";
import { remixLayout2Line } from "@ng-icons/remixicon";
import { DashboardList } from "../dashboard-list";
import { RouterModule, Router, NavigationEnd } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { filter, map } from "rxjs/operators";

@Component({
  imports: [NgIcon, RouterModule],
  providers: [
    provideIcons({
      lucideMoreVertical,
      lucideArchiveRestore,
      lucideList,
      lucideInfo,
      lucideChevronDown,
      remixLayout2Line,
    }),
  ],
  selector: "app-sidebar",
  styleUrl: "./sidebar.css",
  templateUrl: "./sidebar.html",
})
export class Sidebar {
  @Input() dashboardList: DashboardList[] = [
    {
      name: "Dashboard",
      icon: "remixLayout2Line",
      path: "",
    },
    {
      name: "Inventory",
      icon: "lucideArchiveRestore",
      path: "/inventory",
      children: [
        {
          name: "List Medicine",
          path: "/inventory/list-medicine",
        },
        {
          name: "Medicine Groups",
          path: "/inventory/medicine-groups",
        },
      ],
    },
  ];

  private router = inject(Router);
  openItem: string | null = null;

  toggle(itemName: string) {
    this.openItem = this.openItem === itemName ? null : itemName;
  }

  logClick(path: string) {
    console.log("Clicked path:", path);
  }
  currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );
}
