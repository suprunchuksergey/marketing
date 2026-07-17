<script setup lang="ts">
import {
  Chrome,
  Facebook,
  Music2,
  Search as SearchIcon,
  Plus,
  ArrowRight,
} from "lucide-vue-next";
import { workspaceSourceIcons } from "@/lib/landing-data";

const iconComponents: Record<string, typeof Chrome> = {
  google: Chrome,
  meta: Facebook,
  tiktok: Music2,
  yandex: SearchIcon,
  plus: Plus,
};

const stats = [
  { label: "Расходы", value: "124 560 ₽", change: "+11.5%" },
  { label: "ROAS", value: "6.42", change: "+21.4%" },
  { label: "CPA", value: "12.45 ₽", change: "+14.2%" },
  { label: "Конверсии", value: "1 247", change: "+8.3%" },
];

const campaigns = [
  {
    name: "Google Ads",
    spend: "46 560 ₽",
    roas: "7.21",
    cpa: "11.24 ₽",
    color: "#4285F4",
    icon: "google" as const,
  },
  {
    name: "Meta Ads",
    spend: "38 120 ₽",
    roas: "5.43",
    cpa: "13.21 ₽",
    color: "#7C6AF2",
    icon: "meta" as const,
  },
  {
    name: "TikTok Ads",
    spend: "22 980 ₽",
    roas: "6.71",
    cpa: "9.15 ₽",
    color: "#25D9C8",
    icon: "tiktok" as const,
  },
  {
    name: "Яндекс Директ",
    spend: "16 900 ₽",
    roas: "4.21",
    cpa: "15.45 ₽",
    color: "#EF4444",
    icon: "yandex" as const,
  },
];
</script>

<template>
  <section class="px-6 py-20">
    <h2
      class="mx-auto max-w-2xl text-center text-2xl font-bold text-slate-100 sm:text-3xl"
    >
      Один кабинет вместо
      <span
        class="bg-gradient-to-r from-indigo-600 to-blue-700 italic bg-clip-text text-transparent"
        >десятков</span
      >
      рекламных кабинетов
    </h2>

    <div
      class="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:gap-6"
    >
      <!-- Иконки источников -->
      <div class="flex shrink-0 flex-col gap-5">
        <span
          v-for="source in workspaceSourceIcons"
          :key="source.id"
          class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
        >
          <component
            :is="iconComponents[source.id]"
            :size="18"
            :style="{ color: source.color }"
          />
        </span>
      </div>

      <ArrowRight :size="22" class="hidden shrink-0 text-slate-600 lg:block" />

      <!-- Таблица-сводка -->
      <div class="w-full rounded-2xl border border-white/10 bg-[#12151c] p-4">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-lg border border-white/10 bg-white/[0.02] p-3"
          >
            <p class="text-[11px] text-slate-500">{{ stat.label }}</p>
            <p class="mt-1 text-base font-semibold text-slate-100">
              {{ stat.value }}
            </p>
            <p class="mt-0.5 text-[11px] text-emerald-400">{{ stat.change }}</p>
          </div>
        </div>

        <table class="mt-4 w-full text-left text-[13px]">
          <thead>
            <tr class="text-[11px] text-slate-500">
              <th class="pb-2 font-normal">Кампании</th>
              <th class="pb-2 font-normal">Расходы</th>
              <th class="pb-2 font-normal">ROAS</th>
              <th class="pb-2 font-normal">CPA</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="c in campaigns"
              :key="c.name"
              class="border-t border-white/5"
            >
              <td class="flex items-center gap-2 py-2.5 text-slate-200">
                <component
                  :is="iconComponents[c.icon]"
                  :size="13"
                  :style="{ color: c.color }"
                />
                {{ c.name }}
              </td>
              <td class="text-slate-300">{{ c.spend }}</td>
              <td class="text-slate-300">{{ c.roas }}</td>
              <td class="text-slate-300">{{ c.cpa }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
