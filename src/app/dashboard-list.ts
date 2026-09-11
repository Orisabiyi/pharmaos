export interface DashboardList {
  name: string;
  icon?: string;
  path: string;
  children?: DashboardList[];
}
