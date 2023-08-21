<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
import { useDark, useToggle } from "@vueuse/core";

/**
 * @description 语言切换
 */
const changeLang = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="home .dark:bg-black .dark:text-#fff">
    <span class="text-red">home</span>
    <span class="bg-red" @click="changeLang()">{{ t("hello") }}</span>
    <router-link to="/404">notFound</router-link>
    <span @click="toggleDark()">主题切换</span>
    <span text-red>预设</span>
    <span bg="blue-400 hover:blue-500">预设</span>
  </div>
</template>

<style>
.home {
  font-family: "CascadiaCode";
}
</style>
