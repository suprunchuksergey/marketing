<script setup lang="ts">
import { computed } from "vue";
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { spendSources, totalSpend } from "@/lib/dashboard-data";

ChartJS.register(ArcElement, Tooltip);

const chartData = computed<ChartData<"doughnut">>(() => ({
  labels: spendSources.map((s) => s.name),
  datasets: [
    {
      data: spendSources.map((s) => s.amount),
      backgroundColor: spendSources.map((s) => s.color),
      hoverOffset: 4,
      borderRadius: 4,
      borderWidth: 1,
    },
  ],
}));

const chartOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "60%",
  plugins: {
    legend: { display: false },
  },
};

const formatCurrency = (value: number) => `${value.toLocaleString("ru-RU")} ₽`;
</script>

<template>
  <div class="flex flex-col gap-4 rounded-xl border bg-card p-4">
    <div class="flex items-center justify-between">
      <h3 class="text-sm text-card-foreground uppercase">
        Распределение расходов
      </h3>
    </div>

    <div class="relative mx-auto h-[180px] w-[180px]">
      <Doughnut :data="chartData" :options="chartOptions" />
      <div
        class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
      >
        <span class="text-base font-bold text-card-foreground">
          {{ formatCurrency(totalSpend) }}
        </span>

        <span class="mt-0.5 text-base font-bold text-card-foreground uppercase">
          Всего
        </span>
      </div>
    </div>

    <ul class="m-0 flex list-none flex-col gap-2.5 p-0">
      <li
        v-for="source in spendSources"
        :key="source.id"
        class="flex items-center text-[13px]"
      >
        <span class="flex flex-1 items-center gap-2 text-slate-200">
          <span
            class="size-3 rounded-full shrink-0"
            :style="{ backgroundColor: source.color }"
          />

          <span class="text-xs text-muted-foreground uppercase">
            {{ source.name }}
          </span>
        </span>
        <span class="w-12 text-sm text-muted-foreground uppercase font-bold">
          {{ source.share.toFixed(1) }}%
        </span>

        <span
          class="min-w-20 text-right text-sm text-muted-foreground uppercase font-bold"
        >
          {{ formatCurrency(source.amount) }}
        </span>
      </li>
    </ul>
  </div>
</template>
