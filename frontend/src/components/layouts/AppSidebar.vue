<script setup lang="ts">
import { useRoute } from "vue-router";
import { NAMES } from "@/router/";
import { useColorMode } from "@vueuse/core";
import {
  BarChart3,
  Home,
  ChevronDown,
  LogOut,
  Sun,
  Moon,
} from "lucide-vue-next";

const route = useRoute();

interface Props {
  userName?: string;
  userRole?: string;
  avatarUrl?: string;
}

withDefaults(defineProps<Props>(), {
  userName: "Иван Петров",
  userRole: "Agency Pro",
  avatarUrl: "",
});

const emit = defineEmits<{ logout: [] }>();

const mode = useColorMode();

function toggleMode() {
  mode.value = mode.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <aside
    class="flex h-screen w-56 shrink-0 flex-col justify-between border-r p-4 bg-card"
  >
    <div class="flex flex-col gap-6">
      <!-- Логотип -->
      <div class="flex items-center gap-2.5 px-2 pt-1">
        <span
          class="size-8 flex items-center justify-center rounded-lg bg-primary"
        >
          <BarChart3 :size="16" class="text-primary-foreground" />
        </span>

        <span class="text-base font-bold uppercase text-card-foreground"
          >atics</span
        >
      </div>

      <!-- Навигация -->
      <nav class="flex flex-col gap-1">
        <router-link
          :to="{ name: NAMES.DASHBOARD }"
          class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
          :class="
            route.name === NAMES.DASHBOARD
              ? 'text-primary-foreground bg-primary'
              : ''
          "
        >
          <Home :size="18" />
          Обзор
        </router-link>
      </nav>
    </div>

    <!-- Профиль пользователя -->
    <div class="flex flex-col gap-2">
      <div class="flex justify-end">
        <button
          type="button"
          :aria-label="
            mode === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'
          "
          class="flex items-center justify-center size-8 rounded-lg text-card-foreground"
          @click="toggleMode"
        >
          <Sun v-if="mode === 'dark'" :size="16" />
          <Moon v-else :size="16" />
        </button>
      </div>

      <div class="flex items-center gap-3 rounded-xl bg-white/5 p-2.5">
        <img
          v-if="avatarUrl"
          :src="avatarUrl"
          alt=""
          class="h-9 w-9 shrink-0 rounded-full object-cover"
        />
        <span
          v-else
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-medium text-slate-200"
        >
          {{
            userName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
          }}
        </span>

        <div class="min-w-0 flex-1">
          <p class="truncate text-[13px] font-medium text-card-foreground">
            {{ userName }}
          </p>
          <p class="truncate text-xs text-muted-foreground">{{ userRole }}</p>
        </div>

        <ChevronDown :size="16" class="shrink-0 text-slate-500" />
      </div>

      <button
        type="button"
        class="flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm cursor-pointer text-card-foreground hover:bg-white/5"
        @click="emit('logout')"
      >
        <LogOut :size="15" />
        Выйти
      </button>
    </div>
  </aside>
</template>
