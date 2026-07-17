<script setup lang="ts">
import { BarChart3 } from "lucide-vue-next";
import { NAMES } from "@/router";

const navLinks = [
  { label: "Возможности", href: "#features" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Блог", href: "#" },
  { label: "Документация", href: "#" },
];
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b border-white/5 bg-[#0a0c11]/80 backdrop-blur"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <div class="flex items-center gap-2.5 px-2 pt-1">
        <span
          class="size-8 flex items-center justify-center rounded-lg bg-primary"
        >
          <BarChart3 :size="16" class="text-primary-foreground" />
        </span>

        <span class="text-base font-bold uppercase text-white">atics</span>
      </div>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="text-sm uppercase text-slate-400 transition-colors hover:text-slate-100"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <RouterLink
          :to="{ name: NAMES.DASHBOARD }"
          class="hidden text-sm text-slate-300 uppercase hover:text-slate-100 sm:inline"
          >Войти</RouterLink
        >

        <a
          href="#"
          class="rounded-sm bg-gradient-to-r from-indigo-600 to-blue-700 uppercase px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-opacity hover:opacity-90"
        >
          Попробовать бесплатно
        </a>
      </div>
    </div>
  </header>
</template>
