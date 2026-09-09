import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Inventory } from "./inventory/inventory";
import { ListMedicine } from "./inventory/list-medicine/list-medicine";
import { MedicineGroups } from "./inventory/medicine-groups/medicine-groups";

export const routes: Routes = [
  {
    path: "",
    component: Home,
    title: "Dashboard",
  },
  {
    path: "inventory",
    component: Inventory,
    title: "Inventory",
    children: [
      {
        path: "list-medicine",
        component: ListMedicine,
        title: "List Medicine",
      },
      {
        path: "medicine-groups",
        component: MedicineGroups,
        title: "Medicine Groups",
      },
    ],
  },
];
