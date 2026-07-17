<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { salesFunnel } from "@/lib/landing-data";

function sparklinePoints(data: number[], color: "up" | "down") {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 100;
  const height = 32;
  const step = width / (data.length - 1);
  return data
    .map((value, i) => {
      const x = i * step;
      const y =
        color === "down"
          ? height - ((value - min) / range) * height
          : height - ((value - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

const cpaTrend = [30, 34, 32, 40, 46, 52, 60, 68];
const roasTrend = [30, 34, 32, 38, 44, 50, 56, 64];
</script>

<template>
  <section class="px-6 py-20">
    <h2 class="text-center text-2xl font-bold text-slate-100 sm:text-3xl">
      Находите проблемы быстрее
    </h2>

    <div class="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
      <!-- CPA вырос -->
      <div
        class="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#12151c] p-5"
      >
        <span class="text-xs text-slate-500">Facebook Ads</span>
        <div>
          <p class="text-sm text-slate-400">CPA вырос</p>
          <p class="mt-1 text-2xl font-bold text-red-400">+42%</p>
        </div>
        <svg
          viewBox="0 0 100 32"
          class="h-10 w-full"
          preserveAspectRatio="none"
        >
          <polyline
            :points="sparklinePoints(cpaTrend, 'up')"
            fill="none"
            stroke="#F87171"
            stroke-width="2"
          />
        </svg>
        <button
          type="button"
          class="mt-1 inline-flex w-fit items-center gap-1 text-sm text-blue-400"
        >
          Подробнее
          <ArrowRight :size="14" />
        </button>
      </div>

      <!-- ROAS -->
      <div
        class="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#12151c] p-5"
      >
        <span class="text-xs text-slate-500">ROAS</span>
        <div>
          <p class="text-2xl font-bold text-slate-100">6.42</p>
          <p class="mt-1 text-sm text-emerald-400">↑ 21.4%</p>
        </div>
        <svg
          viewBox="0 0 100 32"
          class="h-10 w-full"
          preserveAspectRatio="none"
        >
          <polyline
            :points="sparklinePoints(roasTrend, 'up')"
            fill="none"
            stroke="#34D399"
            stroke-width="2"
          />
        </svg>
      </div>

      <!-- Воронка продаж -->
      <div
        class="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#12151c] p-5"
      >
        <span class="text-xs text-slate-500">Воронка продаж</span>
        <div class="flex flex-col gap-2.5">
          <div
            v-for="step in salesFunnel"
            :key="step.label"
            class="flex items-center justify-between rounded-lg bg-white/[0.02] px-3 py-2"
          >
            <span class="text-sm text-slate-300">{{ step.label }}</span>
            <span
              class="flex items-center gap-2 text-sm font-medium text-slate-100"
            >
              {{ step.value }}
              <span
                v-if="step.sub"
                class="text-xs font-normal text-emerald-400"
                >{{ step.sub }}</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
