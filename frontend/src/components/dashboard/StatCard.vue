<script setup lang="ts">
import { computed } from "vue";
import { TrendingUp, TrendingDown } from "lucide-vue-next";
import type { StatMetric } from "@/lib/dashboard-data";

const props = defineProps<{ metric: StatMetric }>();

const isPositive = computed(() => props.metric.change >= 0);

const sparklinePoints = computed(() => {
  const data = props.metric.trend;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 100;
  const height = 32;
  const step = width / (data.length - 1);

  return data
    .map((value, i) => {
      const x = i * step;
      const y = height - ((value - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
});

const sparklineColor = computed(() =>
  isPositive.value ? "#00bc7d" : "#fb2c36",
);
</script>

<template>
  <div class="flex flex-col gap-3 rounded-xl border bg-card p-4">
    <div class="flex items-center justify-between">
      <span class="text-xs text-muted-foreground uppercase">
        {{ metric.title }}
      </span>
    </div>

    <div class="flex items-end justify-between gap-3">
      <div class="flex flex-col gap-3">
        <span class="text-xl font-bold leading-none text-card-foreground">
          {{ metric.value }}
        </span>

        <span
          class="inline-flex w-fit items-center gap-1 text-xs font-medium"
          :class="isPositive ? 'text-emerald-500' : 'text-red-500'"
        >
          <component :is="isPositive ? TrendingUp : TrendingDown" :size="12" />
          {{ Math.abs(metric.change).toFixed(1) }}%
        </span>
      </div>

      <svg
        class="h-8 w-[72px] shrink-0"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
      >
        <polyline
          :points="sparklinePoints"
          fill="none"
          :stroke="sparklineColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
