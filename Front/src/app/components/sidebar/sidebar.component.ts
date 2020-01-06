import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Stock",
    rtlTitle: "لوحة القيادة",
    icon: "icon-app",
    class: ""
  },
  {
    path: "/icons",
    title: "Maintenance",
    rtlTitle: "الرموز",
    icon: "icon-settings",
    class: ""
  },
  {
    path: "/maps",
    title: "Inventaire",
    rtlTitle: "خرائط",
    icon: "icon-atom",
    class: "" },
  {
    path: "/notifications",
    title: "Credit/Rapports",
    rtlTitle: "إخطارات",
    icon: "icon-coins",
    class: ""
  },

  {
    path: "/user",
    title: "Emplyees",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "/tables",
    title: "Fournissur",
    rtlTitle: "قائمة الجدول",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/typography",
    title: "A propos de King",
    rtlTitle: "طباعة",
    icon: "icon-bank",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
