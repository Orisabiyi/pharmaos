import { Component } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideMoreVertical } from "@ng-icons/lucide";
import { DashboardList } from "../dashboard-list";

@Component({
  imports: [NgIcon],
  providers: [provideIcons({ lucideMoreVertical })],
  selector: "app-sidebar",
  styleUrl: "./sidebar.css",
  templateUrl: "./sidebar.html",
})
export class Sidebar {
  dashboardList: DashboardList[] = [
    {
      name: "Dashboard",
      icon: "lucideHome",
      path: "/dashboard"
    }
  ]
}
