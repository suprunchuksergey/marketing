export interface StatMetric {
  id: string;
  title: string;
  value: string;
  change: number; // положительное — рост, отрицательное — падение
  trend: number[]; // данные для мини-графика (спарклайна)
}

export interface Campaign {
  id: string;
  name: string;
  source: "google" | "meta" | "tiktok" | "yandex";
  spend: number;
  roas: number;
  roasChange: number;
  cpa: number;
  conversions: number;
  status: "active" | "paused";
}

export type NotificationType = "alert" | "warning" | "info" | "success";

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timeAgo: string;
}

export interface SpendSource {
  id: string;
  name: string;
  amount: number;
  share: number;
  color: string;
}

export const statMetrics: StatMetric[] = [
  {
    id: "spend",
    title: "Расходы",
    value: "124 560 ₽",
    change: 12.5,
    trend: [40, 44, 42, 48, 52, 50, 58, 62, 60, 66],
  },
  {
    id: "roas",
    title: "ROAS",
    value: "6.42",
    change: 21.4,
    trend: [30, 34, 32, 40, 38, 44, 48, 46, 52, 56],
  },
  {
    id: "cpa",
    title: "CPA",
    value: "12.45 ₽",
    change: -14.6,
    trend: [60, 56, 58, 50, 52, 46, 44, 40, 42, 38],
  },
  {
    id: "conversions",
    title: "Конверсии",
    value: "1 247",
    change: 8.3,
    trend: [36, 40, 38, 44, 42, 48, 46, 52, 50, 56],
  },
  {
    id: "clicks",
    title: "Клики",
    value: "25 430",
    change: 11.7,
    trend: [42, 40, 46, 44, 50, 48, 54, 52, 58, 60],
  },
  {
    id: "ctr",
    title: "CTR",
    value: "3.82%",
    change: 6.1,
    trend: [38, 42, 40, 38, 44, 42, 46, 44, 48, 46],
  },
];

export const spendSources: SpendSource[] = [
  {
    id: "google",
    name: "Google Ads",
    amount: 56240,
    share: 45.2,
    color: "#4285F4",
  },
  {
    id: "meta",
    name: "Meta Ads",
    amount: 35360,
    share: 28.4,
    color: "#7C6AF2",
  },
  {
    id: "tiktok",
    name: "TikTok Ads",
    amount: 19420,
    share: 15.6,
    color: "#25D9C8",
  },
  {
    id: "yandex",
    name: "Яндекс Директ",
    amount: 9720,
    share: 7.8,
    color: "#EF4444",
  },
  { id: "other", name: "Прочее", amount: 3820, share: 3.0, color: "#64748B" },
];

export const totalSpend = spendSources.reduce((sum, s) => sum + s.amount, 0);

export const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Поиск | Тренажер для дома",
    source: "google",
    spend: 46560,
    roas: 7.21,
    roasChange: 12.4,
    cpa: 11.24,
    conversions: 632,
    status: "active",
  },
  {
    id: "2",
    name: "Интересы | Кроссовки",
    source: "meta",
    spend: 38120,
    roas: 5.43,
    roasChange: 8.1,
    cpa: 13.21,
    conversions: 482,
    status: "active",
  },
  {
    id: "3",
    name: "Конверсии | Lookalike 1%",
    source: "tiktok",
    spend: 22360,
    roas: 6.71,
    roasChange: 15.7,
    cpa: 9.15,
    conversions: 312,
    status: "active",
  },
  {
    id: "4",
    name: "Поиск | Общие запросы",
    source: "yandex",
    spend: 16900,
    roas: 4.21,
    roasChange: -3.2,
    cpa: 15.45,
    conversions: 198,
    status: "paused",
  },
  {
    id: "5",
    name: "Ретаргетинг | Корзина",
    source: "meta",
    spend: 9450,
    roas: 8.12,
    roasChange: 18.3,
    cpa: 7.21,
    conversions: 145,
    status: "active",
  },
];

export const notifications: AppNotification[] = [
  {
    id: "1",
    type: "alert",
    title: "CPA вырос на 42%",
    description: "Кампания «Facebook | Интересы»",
    timeAgo: "5 мин назад",
  },
  {
    id: "2",
    type: "warning",
    title: "ROAS ниже цели",
    description: "Кампания «Google | Поиск»",
    timeAgo: "1 час назад",
  },
  {
    id: "3",
    type: "info",
    title: "Отчёт готов",
    description: "Еженедельный отчёт",
    timeAgo: "3 часа назад",
  },
  {
    id: "4",
    type: "success",
    title: "Импорт данных завершён",
    description: "Данные за период 20 мая – 19 июня",
    timeAgo: "5 часов назад",
  },
];

export const performanceSeries = {
  labels: ["20 мая", "27 мая", "3 июня", "10 июня", "17 июня"],
  spend: [78000, 92000, 85000, 86800, 108000, 96300, 124560],
  roas: [76500, 102000, 88500, 126000, 130000, 136500, 93500],
  conversions: [79500, 93500, 118000, 117200, 109500, 128500, 122800],
};
