<script setup lang="ts">
import LandingHeader from "@/components/landing/LandingHeader.vue";
import HeroSection from "@/components/landing/HeroSection.vue";
import UnifiedWorkspaceSection from "@/components/landing/UnifiedWorkspaceSection.vue";
import FindProblemsSection from "@/components/landing/FindProblemsSection.vue";
import FullPictureSection from "@/components/landing/FullPictureSection.vue";
import FeatureGridSection from "@/components/landing/FeatureGridSection.vue";
import TestimonialsSection from "@/components/landing/TestimonialsSection.vue";
import CtaSection from "@/components/landing/CtaSection.vue";
import LandingFooter from "@/components/landing/LandingFooter.vue";
</script>

<template>
  <div class="min-h-screen bg-[#0a0c11]">
    <LandingHeader />
    <HeroSection />
    <UnifiedWorkspaceSection />
    <FindProblemsSection />
    <FullPictureSection />
    <FeatureGridSection />
    <TestimonialsSection />
    <CtaSection />
    <LandingFooter />
  </div>
</template>
