<script setup lang="ts">
import StatCard from "@/components/dashboard/StatCard.vue";
import PerformanceChart from "@/components/dashboard/PerformanceChart.vue";
import SpendDistribution from "@/components/dashboard/SpendDistribution.vue";
import CampaignsTable from "@/components/dashboard/CampaignsTable.vue";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel.vue";
import { statMetrics } from "@/lib/dashboard-data";
import AppLayout from "@/components/layouts/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <div class="flex flex-col gap-3 p-3">
      <section class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        <StatCard
          v-for="metric in statMetrics"
          :key="metric.id"
          :metric="metric"
        />
      </section>

      <section class="grid grid-cols-1 items-start gap-3 lg:grid-cols-3">
        <PerformanceChart class="col-span-2" />
        <SpendDistribution />
      </section>

      <section class="grid grid-cols-1 items-start gap-3 lg:grid-cols-3">
        <CampaignsTable class="col-span-2" />
        <NotificationsPanel />
      </section>
    </div>
  </AppLayout>
</template>
