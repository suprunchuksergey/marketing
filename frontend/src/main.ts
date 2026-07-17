import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import { Chart as ChartJS } from "chart.js";

ChartJS.defaults.font.family = "Roboto Mono";
ChartJS.defaults.font.size = 12;
ChartJS.defaults.font.weight = "bold";
ChartJS.defaults.color = "#0a0a0aff";

createApp(App).use(router).mount("#app");
