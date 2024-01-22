<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { toggleDark } from "@/utils/toggleDark";

const { locale, t } = useI18n();

/**
 * @description 语言切换
 */
const changeLang = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};

console.log(locale.value);
</script>

<template>
  <div
    class="home .dark:bg-black .dark:text-#fff text-18px h100vh flex flex-col justify-center items-center"
  >
    <div class="text-red">{{ t("hello") }}</div>
    <div class="container flex flex-row items-center justify-center">
      <button @click="toggleDark">
        <!-- <div i-carbon-sun dark:i-carbon-moon cursor-pointer /> -->
        theme
      </button>
      <button @click="changeLang()" cursor-pointer>切换语言</button>
      <router-link to="/404">
        <button cursor-pointer>404</button>
      </router-link>
    </div>
  </div>
</template>
