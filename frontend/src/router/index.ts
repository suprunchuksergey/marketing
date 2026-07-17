import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Landing from "@/pages/Landing.vue";

export const NAMES = {
  DASHBOARD: "dashboard",
  LANDING: "landing",
} as const;

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: NAMES.LANDING,
    component: Landing,
  },
  {
    path: "/dashboard",
    name: NAMES.DASHBOARD,
    component: Dashboard,
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
