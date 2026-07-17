export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  items: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export const trustedSources = [
  { id: "google", label: "Google Ads" },
  { id: "meta", label: "Meta Ads" },
  { id: "tiktok", label: "TikTok Ads" },
  { id: "yandex", label: "Яндекс Директ" },
];

export const workspaceSourceIcons = [
  { id: "google", color: "#4285F4" },
  { id: "meta", color: "#7C6AF2" },
  { id: "tiktok", color: "#25D9C8" },
  { id: "yandex", color: "#EF4444" },
  { id: "plus", color: "#64748B" },
];

export const problemCards = [
  {
    id: "cpa",
    label: "Facebook Ads",
    title: "CPA вырос",
    value: "+42%",
    trend: [30, 34, 32, 40, 46, 52, 60, 68],
    color: "#F87171",
    action: "Подробнее",
  },
  {
    id: "roas",
    label: "ROAS",
    title: "6.42",
    value: "↑ 21.4%",
    trend: [30, 34, 32, 38, 44, 50, 56, 64],
    color: "#34D399",
    action: null,
  },
];

export const salesFunnel = [
  { label: "Клики", value: "125 430" },
  { label: "Лиды", value: "3.62%", sub: "2.5x" },
  { label: "Продажи", value: "27.3%" },
];

export const marketingFeatures: FeatureCard[] = [
  {
    id: "live-data",
    title: "Live-данные в реальном времени",
    description: "",
    items: [],
  },
];

export const fullPictureBullets = [
  "Live-данные в реальном времени",
  "Гибкие фильтры и сегментация",
  "Экспорт отчётов в один клик",
  "Уведомления о важных изменениях",
];

export const featureGrid = [
  {
    id: "reports",
    title: "Автоматические отчёты",
    description: "Настраивайте отчёты и получайте их на почту автоматически",
    rows: [
      { label: "Отчёт", sub: "Каждый понедельник, 09:00" },
      { label: "Отчёт по кампаниям", sub: "Каждый день, 08:00" },
    ],
  },
  {
    id: "notifications",
    title: "Уведомления",
    description: "Будьте в курсе важных изменений и не упускайте возможности",
    rows: [
      { label: "CPA вырос на 20%", sub: "5 дней назад" },
      { label: "Бюджет исчерпан", sub: "13 мин назад" },
    ],
  },
  {
    id: "filters",
    title: "Фильтрация кампаний",
    description: "Находите нужные данные быстро и легко с гибкими фильтрами",
    rows: [
      { label: "Платформа", sub: "Все платформы" },
      { label: "Период", sub: "Последние 30 дней" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Алексей Петров",
    role: "CEO, Digital Agency",
    company: "Digital Agency",
    initials: "DA",
    quote:
      "Экономим около 6 часов каждую неделю на сборе и анализе данных. atics стал незаменимым инструментом для нашей команды.",
  },
  {
    id: "2",
    author: "Мария Иванова",
    role: "Head of Performance",
    company: "Performance Team",
    initials: "PT",
    quote:
      "Теперь все рекламные кабинеты в одном месте. Наконец-то мы видим полную картину и можем быстро принимать решения.",
  },
];
