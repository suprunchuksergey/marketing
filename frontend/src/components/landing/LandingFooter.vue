<script setup lang="ts">
import { ref } from "vue";
import {
  BarChart3,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-vue-next";

const email = ref("");

const columns = [
  {
    title: "Продукт",
    links: ["Возможности", "Тарифы", "Интеграции", "Обновления"],
  },
  {
    title: "Компания",
    links: ["О нас", "Блог", "Карьера", "Контакты"],
  },
  {
    title: "Поддержка",
    links: ["Документация", "Помощь", "API", "Статус"],
  },
];
</script>

<template>
  <footer class="border-t border-white/5 px-6 pb-8 pt-16">
    <div
      class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]"
    >
      <div>
        <div class="flex items-center gap-2.5 px-2 pt-1">
          <span
            class="size-8 flex items-center justify-center rounded-lg bg-primary"
          >
            <BarChart3 :size="16" class="text-primary-foreground" />
          </span>

          <span class="text-base font-bold uppercase text-white">atics</span>
        </div>
        <p class="mt-3 max-w-xs text-[13px] leading-relaxed text-slate-500">
          Платформа для анализа и оптимизации рекламных кампаний
        </p>
        <div class="mt-4 flex gap-3 text-slate-500">
          <Twitter :size="16" class="hover:text-slate-300" />
          <Linkedin :size="16" class="hover:text-slate-300" />
          <Instagram :size="16" class="hover:text-slate-300" />
        </div>
      </div>

      <div v-for="col in columns" :key="col.title">
        <h4 class="text-sm font-medium text-slate-200">{{ col.title }}</h4>
        <ul class="mt-3 flex flex-col gap-2">
          <li v-for="link in col.links" :key="link">
            <a
              href="#"
              class="text-[13px] text-slate-500 hover:text-slate-300"
              >{{ link }}</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-medium text-slate-200">
          Подпишитесь на новости
        </h4>
        <p class="mt-3 text-[13px] text-slate-500">
          Получайте полезные советы и обновления о продукте
        </p>
        <form
          class="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] p-1"
          @submit.prevent
        >
          <input
            v-model="email"
            type="email"
            placeholder="Ваш email"
            class="min-w-0 flex-1 bg-transparent px-2 text-[13px] text-slate-200 outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            aria-label="Подписаться"
            class="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white"
          >
            <ArrowRight :size="14" />
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>
