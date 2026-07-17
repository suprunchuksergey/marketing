<script setup lang="ts">
import AppSidebar from "@/components/layouts/AppSidebar.vue";
import { useRouter } from "vue-router";
import { NAMES } from "@/router";

const router = useRouter();
</script>

<template>
  <div class="flex h-screen">
    <AppSidebar
      user-name="Иван Петров"
      user-role="Agency Pro"
      @logout="router.push({ name: NAMES.LANDING })"
    />

    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
