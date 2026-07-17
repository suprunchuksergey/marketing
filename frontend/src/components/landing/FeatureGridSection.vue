<script setup lang="ts">
import {
  FileText,
  Bell,
  SlidersHorizontal,
  Download,
  ArrowRight,
} from "lucide-vue-next";
import { featureGrid } from "@/lib/landing-data";

const iconByCard: Record<string, typeof FileText> = {
  reports: FileText,
  notifications: Bell,
  filters: SlidersHorizontal,
  export: Download,
};
</script>

<template>
  <section id="features" class="px-6 py-20">
    <h2 class="text-center text-2xl font-bold text-slate-100 sm:text-3xl">
      Всё, что нужно для эффективного маркетинга
    </h2>

    <div
      class="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="card in featureGrid"
        :key="card.id"
        class="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#12151c] p-5"
      >
        <div>
          <h3 class="text-[15px] font-semibold text-slate-100">
            {{ card.title }}
          </h3>
          <p class="mt-1.5 text-[13px] leading-relaxed text-slate-500">
            {{ card.description }}
          </p>
        </div>

        <div class="mt-auto flex flex-col gap-2">
          <div
            v-for="row in card.rows"
            :key="row.label"
            class="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2"
          >
            <span
              class="inline-flex items-center gap-2 text-[13px] text-slate-300"
            >
              <component
                :is="iconByCard[card.id]"
                :size="14"
                class="text-slate-500"
              />
              {{ row.label }}
            </span>
            <span v-if="row.sub" class="text-[11px] text-slate-500">{{
              row.sub
            }}</span>
            <ArrowRight v-else :size="13" class="text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
