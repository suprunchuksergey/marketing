<script setup lang="ts">
import { Check, ChevronDown, Download } from "lucide-vue-next";
import { trustedSources } from "@/lib/landing-data";

const heroStats = [
  { label: "Расходы", value: "124 560 ₽", change: "+12.5%" },
  { label: "ROAS", value: "6.42", change: "+21.4%" },
  { label: "CPA", value: "12.45 ₽", change: "-14.6%" },
  { label: "Конверсии", value: "1 247", change: "+8.3%" },
];

const sourcesRow = [
  { name: "Google Ads", spend: "46 560 ₽", change: "+15.2%", color: "#4285F4" },
  { name: "Meta Ads", spend: "38 120 ₽", change: "+8.1%", color: "#7C6AF2" },
  { name: "TikTok Ads", spend: "22 360 ₽", change: "+21.3%", color: "#25D9C8" },
  {
    name: "Яндекс Директ",
    spend: "16 900 ₽",
    change: "-3.2%",
    color: "#EF4444",
  },
];
</script>

<template>
  <section class="relative overflow-hidden px-6 pb-20 pt-16">
    <!-- Декоративное свечение фона -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
    />

    <div
      class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"
    >
      <!-- Текстовая часть -->
      <div>
        <span
          class="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
        >
          Платформа для анализа рекламных кампаний
        </span>

        <h1
          class="mt-5 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl"
        >
          Маркетинг, который приносит
          <span
            class="bg-gradient-to-r from-indigo-600 to-blue-700 italic bg-clip-text text-transparent"
            >прибыль.</span
          >
        </h1>

        <p class="mt-5 max-w-md text-[15px] leading-relaxed text-slate-400">
          Анализируйте рекламные кампании, находите точки роста и принимайте
          решения на основе данных, а не догадок.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#"
            class="rounded-sm bg-gradient-to-r from-indigo-600 to-blue-700 uppercase px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 hover:opacity-90"
          >
            Попробовать бесплатно
          </a>

          <a
            href="#"
            class="rounded-lg border border-white/10 bg-white/5 px-5 py-3 uppercase text-sm font-medium text-slate-200 hover:bg-white/10"
          >
            Посмотреть демо
          </a>
        </div>

        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <span
            v-for="source in trustedSources"
            :key="source.id"
            class="inline-flex items-center gap-1.5 text-sm text-slate-400"
          >
            <Check :size="14" class="text-emerald-400" />
            {{ source.label }}
          </span>
        </div>
      </div>

      <!-- Превью дашборда -->
      <div
        class="relative rounded-2xl border border-white/10 bg-[#0d0f16] p-3 shadow-2xl shadow-black/40"
      >
        <div class="flex items-center justify-between px-2 pb-3">
          <div class="flex items-center gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span class="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span class="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span class="text-xs text-slate-500">atics</span>
          <span
            class="flex h-5 w-5 items-center justify-center rounded-full bg-white/10"
          >
            <ChevronDown :size="10" class="text-slate-400" />
          </span>
        </div>

        <div class="rounded-xl border border-white/10 bg-[#12151c] p-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium text-slate-200">Обзор</h3>
            <span
              class="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400"
            >
              <Download :size="12" />
              Экспорт
            </span>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="rounded-lg border border-white/10 bg-white/[0.02] p-3"
            >
              <p class="text-[11px] text-slate-500">{{ stat.label }}</p>
              <p class="mt-1 text-base font-semibold text-slate-100">
                {{ stat.value }}
              </p>
              <p
                class="mt-0.5 text-[11px]"
                :class="
                  stat.change.startsWith('-')
                    ? 'text-red-400'
                    : 'text-emerald-400'
                "
              >
                {{ stat.change }}
              </p>
            </div>
          </div>

          <div
            class="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-3"
          >
            <div class="mb-2 flex items-center justify-between">
              <span class="text-xs text-slate-400">Динамика эффективности</span>
              <span class="flex items-center gap-3 text-[11px] text-slate-500">
                <span class="inline-flex items-center gap-1"
                  ><span
                    class="h-1.5 w-1.5 rounded-full bg-blue-500"
                  />Расходы</span
                >
                <span class="inline-flex items-center gap-1"
                  ><span
                    class="h-1.5 w-1.5 rounded-full bg-cyan-400"
                  />ROAS</span
                >
              </span>
            </div>
            <svg
              viewBox="0 0 400 100"
              class="h-24 w-full"
              preserveAspectRatio="none"
            >
              <polyline
                points="0,70 40,55 80,60 120,35 160,45 200,25 240,40 280,20 320,32 360,15 400,28"
                fill="none"
                stroke="#3B82F6"
                stroke-width="2"
              />
              <polyline
                points="0,80 40,75 80,60 120,65 160,40 200,50 240,30 280,45 320,25 360,38 400,20"
                fill="none"
                stroke="#22D3C7"
                stroke-width="2"
              />
            </svg>
          </div>

          <div class="mt-4">
            <p class="mb-2 text-xs text-slate-500">Источники трафика</p>
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div
                v-for="source in sourcesRow"
                :key="source.name"
                class="rounded-lg border border-white/10 bg-white/[0.02] p-2.5"
              >
                <span
                  class="inline-flex items-center gap-1.5 text-[11px] text-slate-400"
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full"
                    :style="{ backgroundColor: source.color }"
                  />
                  {{ source.name }}
                </span>
                <p class="mt-1 text-[13px] font-medium text-slate-200">
                  {{ source.spend }}
                </p>
                <p
                  class="text-[11px]"
                  :class="
                    source.change.startsWith('-')
                      ? 'text-red-400'
                      : 'text-emerald-400'
                  "
                >
                  {{ source.change }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
