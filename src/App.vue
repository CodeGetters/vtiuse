<script setup lang="ts">
import { onMounted, onBeforeMount } from "vue";

const loading = document.querySelector("#loading");

onBeforeMount(() => {
  if (loading) {
    loading.classList.add("loading");
  }
});

onMounted(() => {
  setTimeout(() => {
    if (loading) {
      loading.classList.remove("loading");
    }
  }, 3000);
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "normalize.css";
@import "@/assets/styles/normal.css";
</style>
