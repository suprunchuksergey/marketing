<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  SlidersHorizontal,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-vue-next";
import { campaigns, type Campaign } from "@/lib/dashboard-data";

const search = ref("");
const currentPage = ref(1);
const totalCampaigns = 24;
const pageSize = 5;

const filteredCampaigns = computed(() =>
  campaigns.filter((c) =>
    c.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

const sourceLabels: Record<Campaign["source"], string> = {
  google: "Google Ads",
  meta: "Meta Ads",
  tiktok: "TikTok Ads",
  yandex: "Яндекс Директ",
};

const sourceColors: Record<Campaign["source"], string> = {
  google: "#4285F4",
  meta: "#7C6AF2",
  tiktok: "#25D9C8",
  yandex: "#EF4444",
};

const formatCurrency = (value: number) => `${value.toLocaleString("ru-RU")} ₽`;

const pages = [1, 2, 3, "...", 5];
</script>

<template>
  <div class="flex flex-col gap-4 rounded-xl border bg-card p-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h3 class="m-0 text-sm text-card-foreground uppercase">Кампании</h3>

      <div class="flex items-center gap-2.5">
        <div class="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 border">
          <Search :size="15" class="text-slate-500" />
          <input
            v-model="search"
            type="text"
            placeholder="Поиск кампаний"
            class="w-40 border-none bg-transparent text-sm text-card-foreground outline-none"
          />
        </div>

        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] text-card-foreground"
        >
          <SlidersHorizontal :size="14" />
          Фильтры
        </button>
      </div>
    </div>

    <Table>
      <TableHeader>
        <TableRow class="border-[#1f2430]">
          <TableHead>Кампания</TableHead>
          <TableHead>Источник</TableHead>
          <TableHead class="text-right">Расходы</TableHead>
          <TableHead class="text-right">ROAS</TableHead>
          <TableHead class="text-right">CPA</TableHead>
          <TableHead class="text-right">Конверсии</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
          v-for="campaign in filteredCampaigns"
          :key="campaign.id"
          class="border-[#1f2430] text-card-foreground"
        >
          <TableCell>{{ campaign.name }}</TableCell>

          <TableCell>
            <span class="inline-flex items-center gap-2 text-[13px]">
              <span
                class="size-3 rounded-full"
                :style="{ backgroundColor: sourceColors[campaign.source] }"
              />
              {{ sourceLabels[campaign.source] }}
            </span>
          </TableCell>

          <TableCell class="text-right">{{
            formatCurrency(campaign.spend)
          }}</TableCell>

          <TableCell class="text-right">
            <div class="flex flex-col items-end gap-0.5">
              <span>{{ campaign.roas.toFixed(2) }}</span>
              <span
                class="inline-flex items-center gap-0.5 text-[11px]"
                :class="
                  campaign.roasChange >= 0 ? 'text-emerald-500' : 'text-red-500'
                "
              >
                <component
                  :is="campaign.roasChange >= 0 ? TrendingUp : TrendingDown"
                  :size="11"
                />
                {{ Math.abs(campaign.roasChange).toFixed(1) }}%
              </span>
            </div>
          </TableCell>

          <TableCell class="text-right"
            >{{ campaign.cpa.toFixed(2) }} ₽</TableCell
          >
          <TableCell class="text-right">{{ campaign.conversions }}</TableCell>

          <TableCell>
            <Badge
              :variant="campaign.status === 'active' ? 'default' : 'secondary'"
              :class="
                campaign.status === 'active'
                  ? 'border-none bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/15'
                  : 'border-none bg-amber-500/15 text-amber-500 hover:bg-amber-500/15'
              "
            >
              {{ campaign.status === "active" ? "Активна" : "Приостановлена" }}
            </Badge>
          </TableCell>

          <TableCell>
            <button
              type="button"
              aria-label="Действия"
              class="flex text-slate-500 hover:"
            >
              <MoreVertical :size="16" />
            </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div class="flex flex-wrap items-center justify-between gap-3">
      <span class="text-xs text-muted-foreground uppercase"
        >Показано 1–{{ pageSize }} из {{ totalCampaigns }}</span
      >

      <div class="flex items-center gap-1">
        <button
          type="button"
          aria-label="Назад"
          class="flex h-7 min-w-7 items-center justify-center rounded-md text-[13px] text-slate-500 hover:bg-[#1a1f2a]"
        >
          <ChevronLeft :size="16" />
        </button>
        <button
          v-for="(page, i) in pages"
          :key="i"
          type="button"
          :disabled="page === '...'"
          class="h-7 min-w-7 rounded-md text-[13px] text-slate-400 disabled:cursor-default"
          :class="
            page === currentPage
              ? 'bg-slate-800 text-slate-100'
              : 'hover:bg-[#1a1f2a]'
          "
          @click="typeof page === 'number' && (currentPage = page)"
        >
          {{ page }}
        </button>
        <button
          type="button"
          aria-label="Вперёд"
          class="flex h-7 min-w-7 items-center justify-center rounded-md text-[13px] text-slate-400 hover:bg-[#1a1f2a]"
        >
          <ChevronRight :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>
