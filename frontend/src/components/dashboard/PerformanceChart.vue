<script setup lang="ts">
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { performanceSeries } from "@/lib/dashboard-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const chartData = computed<ChartData<"line">>(() => ({
  labels: performanceSeries.labels,
  datasets: [
    {
      label: "Расходы",
      data: performanceSeries.spend,
      borderColor: "#3B82F6",
      backgroundColor: "#3B82F6",
      pointRadius: 4,
      pointBackgroundColor: "#3B82F6",
      tension: 0.4,
    },
    {
      label: "ROAS",
      data: performanceSeries.roas,
      borderColor: "#22D3C7",
      backgroundColor: "#22D3C7",
      pointRadius: 4,
      pointBackgroundColor: "#22D3C7",
      tension: 0.4,
    },
    {
      label: "Конверсии",
      data: performanceSeries.conversions,
      borderColor: "#A78BFA",
      backgroundColor: "#A78BFA",
      pointRadius: 4,
      pointBackgroundColor: "#A78BFA",
      tension: 0.4,
    },
  ],
}));

const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: "index", intersect: false },
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
    },
  },
};

const legendItems = [
  { label: "Расходы", color: "#3B82F6" },
  { label: "ROAS", color: "#22D3C7" },
  { label: "Конверсии", color: "#A78BFA" },
];
</script>

<template>
  <div class="flex flex-col gap-4 rounded-xl border bg-card p-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-1.5">
        <h3 class="text-sm text-card-foreground uppercase">
          Динамика эффективности
        </h3>
      </div>
    </div>

    <div class="flex gap-5">
      <span
        v-for="item in legendItems"
        :key="item.label"
        class="inline-flex items-center gap-1.5"
      >
        <span
          class="size-3 rounded-full"
          :style="{ backgroundColor: item.color }"
        />

        <span class="text-xs text-muted-foreground uppercase">
          {{ item.label }}
        </span>
      </span>
    </div>

    <div class="h-80 relative">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
