import { Component, Input } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideMoreVertical } from "@ng-icons/lucide";
import { remixLayout2Line } from '@ng-icons/remixicon';
import { DashboardList } from "../dashboard-list";
import { RouterModule } from "@angular/router";

@Component({
  imports: [NgIcon, RouterModule],
  providers: [provideIcons({ lucideMoreVertical, remixLayout2Line })],
  selector: "app-sidebar",
  styleUrl: "./sidebar.css",
  templateUrl: "./sidebar.html",
})
export class Sidebar {
  @Input() dashboardList: DashboardList[] = [
    {
      name: "Dashboard",
      icon: "remixLayout2Line",
      path: ""
    }
  ]
}
