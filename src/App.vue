<script setup lang="ts">
import { onMounted, nextTick } from "vue";

onMounted(() => {
  nextTick(() => {
    document.body.classList.remove("page-loading");
  });
});
</script>

<template>
  <routerView />
</template>

<style lang="scss">
@import "normalize.css";
@import "@/assets/styles/normal.css";
</style>
