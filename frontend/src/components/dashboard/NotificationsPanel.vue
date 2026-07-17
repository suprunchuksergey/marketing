<script setup lang="ts">
import {
  AlertTriangle,
  TriangleAlert,
  Info,
  CheckCircle2,
} from "lucide-vue-next";
import { notifications, type NotificationType } from "@/lib/dashboard-data";

const iconByType: Record<NotificationType, typeof AlertTriangle> = {
  alert: AlertTriangle,
  warning: TriangleAlert,
  info: Info,
  success: CheckCircle2,
};

const colorClassByType: Record<NotificationType, { bg: string; text: string }> =
  {
    alert: { bg: "bg-red-400/15", text: "text-red-400" },
    warning: { bg: "bg-amber-400/15", text: "text-amber-400" },
    info: { bg: "bg-blue-400/15", text: "text-blue-400" },
    success: { bg: "bg-emerald-400/15", text: "text-emerald-400" },
  };
</script>

<template>
  <div class="flex flex-col gap-3.5 rounded-xl border bg-card p-4">
    <div class="flex items-center justify-between">
      <h3 class="m-0 text-sm text-card-foreground uppercase">Уведомления</h3>
    </div>

    <ul class="m-0 flex list-none flex-col gap-3.5 p-0">
      <li
        v-for="item in notifications"
        :key="item.id"
        class="flex items-start gap-3"
      >
        <span
          class="flex size-8 shrink-0 items-center justify-center rounded-lg"
          :class="[
            colorClassByType[item.type].bg,
            colorClassByType[item.type].text,
          ]"
        >
          <component :is="iconByType[item.type]" :size="16" />
        </span>

        <div class="min-w-0 flex-1">
          <p class="m-0 text-xs text-card-foreground uppercase">
            {{ item.title }}
          </p>

          <p class="m-0 mt-0.5 text-xs text-muted-foreground">
            {{ item.description }}
          </p>
        </div>

        <span class="whitespace-nowrap text-xs text-muted-foreground">{{
          item.timeAgo
        }}</span>
      </li>
    </ul>
  </div>
</template>
