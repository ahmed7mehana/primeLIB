<script setup>
definePageMeta({
  layout: "Spinner",
});
</script>
<template>
  <div>
    <nuxt-spinner>
      <nuxt-layout>
        <NuxtPage />
        <Toast />
      </nuxt-layout>
    </nuxt-spinner>
  </div>
</template>

<style>
@import "primeicons/primeicons.css";
/* .page-enter-active,
.page-leave-active {
  transition: 1.7s all ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
} */
</style>
