<script setup lang="ts">
import { Check } from "lucide-vue-next";

const ctaPoints = [
  "14 дней бесплатно",
  "Без банковской карты",
  "Отмена в любой момент",
];
</script>

<template>
  <section class="relative overflow-hidden px-6 py-24 text-center">
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px]"
    />

    <div class="relative mx-auto max-w-2xl">
      <h2 class="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
        Начните принимать решения на основе
        <span
          class="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent"
          >данных</span
        >
      </h2>

      <p class="mt-4 text-[15px] text-slate-400">
        Присоединяйтесь к маркетологам, которые уже увеличивают эффективность
        своих кампаний
      </p>

      <a
        href="#"
        class="mt-7 inline-block rounded-lg bg-gradient-to-r from-indigo-600 to-blue-700 px-6 py-3 text-base font-bold uppercase text-white shadow-lg shadow-purple-600/20 hover:opacity-90"
      >
        Создать аккаунт
      </a>

      <div class="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        <span
          v-for="point in ctaPoints"
          :key="point"
          class="inline-flex items-center gap-1.5 text-sm text-slate-400"
        >
          <Check :size="14" class="text-emerald-400" />
          {{ point }}
        </span>
      </div>
    </div>
  </section>
</template>
