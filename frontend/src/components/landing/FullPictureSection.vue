<script setup lang="ts">
import {
  Check,
  Home,
  Megaphone,
  BarChart3,
  FileText,
  Bell,
  Zap,
  Settings,
  Search,
  SlidersHorizontal,
  Plus,
} from "lucide-vue-next";
import { fullPictureBullets } from "@/lib/landing-data";

const navItems = [
  { icon: Home, label: "Обзор", active: false },
  { icon: Megaphone, label: "Кампании", active: true },
  { icon: BarChart3, label: "Аналитика", active: false },
  { icon: FileText, label: "Отчёты", active: false },
  { icon: Bell, label: "Уведомления", active: false },
  { icon: Zap, label: "Интеграции", active: false },
  { icon: Settings, label: "Настройки", active: false },
];

const campaigns = [
  {
    name: "Поиск | Тёплые аудитории",
    source: "Google Ads",
    color: "#4285F4",
    spend: "18 560 ₽",
    roas: "6.21",
    cpa: "12.45 ₽",
    status: "active",
  },
  {
    name: "Ретаргетинг | Конверсии",
    source: "Meta Ads",
    color: "#7C6AF2",
    spend: "15 320 ₽",
    roas: "5.43",
    cpa: "11.24 ₽",
    status: "active",
  },
  {
    name: "Интересы | Lookalike 1%",
    source: "Meta Ads",
    color: "#7C6AF2",
    spend: "12 800 ₽",
    roas: "4.12",
    cpa: "13.21 ₽",
    status: "active",
  },
  {
    name: "TikTok | Конверсии",
    source: "TikTok Ads",
    color: "#25D9C8",
    spend: "9 450 ₽",
    roas: "7.21",
    cpa: "9.15 ₽",
    status: "active",
  },
  {
    name: "Поиск | Общие запросы",
    source: "Яндекс Директ",
    color: "#EF4444",
    spend: "8 200 ₽",
    roas: "3.45",
    cpa: "15.45 ₽",
    status: "paused",
  },
];
</script>

<template>
  <section class="px-6 py-20">
    <div class="mx-auto max-w-7xl">
      <span
        class="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
      >
        Все данные на одном экране
      </span>

      <div
        class="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center"
      >
        <div>
          <h2
            class="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl"
          >
            Полная картина вашего маркетинга
          </h2>
          <p class="mt-4 text-[15px] leading-relaxed text-slate-400">
            Интерактивные дашборды, гибкая фильтрация, автоматические отчёты и
            глубокая аналитика в одном месте.
          </p>

          <ul class="mt-5 flex flex-col gap-2.5">
            <li
              v-for="bullet in fullPictureBullets"
              :key="bullet"
              class="flex items-center gap-2 text-sm text-slate-300"
            >
              <Check :size="15" class="shrink-0 text-emerald-400" />
              {{ bullet }}
            </li>
          </ul>

          <a
            href="#"
            class="mt-6 inline-block rounded-sm bg-gradient-to-r from-indigo-600 to-blue-700 uppercase px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 hover:opacity-90"
          >
            Попробовать бесплатно
          </a>
        </div>

        <!-- Превью интерфейса -->
        <div
          class="flex overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f16] shadow-2xl shadow-black/40"
        >
          <aside
            class="hidden w-40 shrink-0 flex-col gap-4 border-r border-white/5 p-3 sm:flex"
          >
            <div class="flex items-center gap-2 px-1">
              <span
                class="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-blue-600"
              >
                <BarChart3 :size="12" class="text-white" />
              </span>
              <span class="text-xs font-semibold text-slate-200">atics</span>
            </div>

            <nav class="flex flex-col gap-1">
              <span
                v-for="item in navItems"
                :key="item.label"
                class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px]"
                :class="
                  item.active
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-slate-500'
                "
              >
                <component :is="item.icon" :size="12" />
                {{ item.label }}
              </span>
            </nav>
          </aside>

          <div class="min-w-0 flex-1 p-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h3 class="text-sm font-medium text-slate-200">Кампании</h3>
              <span class="text-[11px] text-slate-500"
                >20 мая – 19 июн. 2024</span
              >
            </div>

            <div
              class="mt-3 flex items-center gap-4 border-b border-white/5 text-[12px] text-slate-500"
            >
              <span class="border-b-2 border-blue-500 pb-2 text-slate-200"
                >Все кампании</span
              >
              <span class="pb-2">Активные</span>
              <span class="pb-2">Приостановленные</span>
            </div>

            <div class="mt-3 flex flex-wrap items-center gap-2">
              <span
                class="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 text-[11px] text-slate-400"
              >
                <Search :size="11" />
                Поиск кампаний
              </span>
              <span
                class="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 text-[11px] text-slate-400"
              >
                Период
              </span>
              <span
                class="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 text-[11px] text-slate-400"
              >
                <SlidersHorizontal :size="11" />
                Фильтры
              </span>
              <span
                class="ml-auto inline-flex items-center gap-1 rounded-md bg-blue-600 px-2 py-1 text-[11px] font-medium text-white"
              >
                <Plus :size="11" />
                Создать кампанию
              </span>
            </div>

            <table class="mt-3 w-full text-left text-[12px]">
              <thead>
                <tr class="text-[11px] text-slate-500">
                  <th class="pb-1.5 font-normal">Кампания</th>
                  <th class="pb-1.5 font-normal">Платформа</th>
                  <th class="pb-1.5 font-normal">Расходы</th>
                  <th class="pb-1.5 font-normal">ROAS</th>
                  <th class="pb-1.5 font-normal">CPA</th>
                  <th class="pb-1.5 font-normal">Статус</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="c in campaigns"
                  :key="c.name"
                  class="border-t border-white/5"
                >
                  <td class="py-1.5 text-slate-200">{{ c.name }}</td>
                  <td class="text-slate-400">
                    <span class="inline-flex items-center gap-1.5">
                      <span
                        class="h-1.5 w-1.5 rounded-full"
                        :style="{ backgroundColor: c.color }"
                      />
                      {{ c.source }}
                    </span>
                  </td>
                  <td class="text-slate-300">{{ c.spend }}</td>
                  <td class="text-slate-300">{{ c.roas }}</td>
                  <td class="text-slate-300">{{ c.cpa }}</td>
                  <td>
                    <span
                      class="rounded px-1.5 py-0.5 text-[10px]"
                      :class="
                        c.status === 'active'
                          ? 'bg-emerald-400/15 text-emerald-400'
                          : 'bg-amber-400/15 text-amber-400'
                      "
                    >
                      {{ c.status === "active" ? "Активна" : "Приостановлена" }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              class="mt-2 flex items-center justify-between text-[11px] text-slate-500"
            >
              <span>Показано 1-5 из 24</span>
              <span class="flex items-center gap-1">
                <span class="rounded px-1.5 py-0.5">1</span>
                <span class="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200"
                  >2</span
                >
                <span class="rounded px-1.5 py-0.5">3</span>
                <span>...</span>
                <span class="rounded px-1.5 py-0.5">5</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
