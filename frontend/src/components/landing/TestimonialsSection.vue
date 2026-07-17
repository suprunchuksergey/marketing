<script setup lang="ts">
import { ref } from "vue";
import { Star } from "lucide-vue-next";
import { testimonials } from "@/lib/landing-data";

const activeSlide = ref(0);
</script>

<template>
  <section id="testimonials" class="px-6 py-20">
    <h2 class="text-center text-2xl font-bold text-slate-100 sm:text-3xl">
      Что говорят наши клиенты
    </h2>

    <div class="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
      <div
        v-for="item in testimonials"
        :key="item.id"
        class="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#12151c] p-6"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-xs font-medium text-slate-200"
            >
              {{ item.initials }}
            </span>
            <div>
              <p class="text-sm font-medium text-slate-100">
                {{ item.author }}
              </p>
              <p class="text-xs text-slate-500">{{ item.company }}</p>
            </div>
          </div>
          <div class="flex gap-0.5 text-amber-400">
            <Star
              v-for="i in 5"
              :key="i"
              :size="13"
              fill="currentColor"
              stroke="none"
            />
          </div>
        </div>

        <p class="text-[14px] leading-relaxed text-slate-300">
          {{ item.quote }}
        </p>

        <p class="text-xs text-slate-500">
          {{ item.author }} — {{ item.role }}
        </p>
      </div>
    </div>
  </section>
</template>
