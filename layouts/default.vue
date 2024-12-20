<script setup>
import Footer from "~/components/Footer.vue";
import NavBar from "~/components/NavBar.vue";
</script>
<template>
  <div class="layout">
    <NavBar />
    <slot></slot>
    <Footer />
  </div>
</template>
<style></style>
