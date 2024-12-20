<template>
  <div>
    <div v-if="isVisible" class="loading-overlay">
      <div class="bg-black spinner">
        <img src="/favicon.ico" />
      </div>
    </div>
    <NuxtPage />
    <Toast />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

// حالة التحكم في السبينر
const isVisible = ref(false);

// الوصول إلى نظام التنقل
const router = useRouter();

let timer;
router.beforeEach(() => {
  timer = setTimeout(() => {
    isVisible.value = true;
  }, 5000); // إظهار السبينر بعد 100 مللي ثانية
});

router.afterEach(() => {
  clearTimeout(timer); // إيقاف المؤقت إذا اكتمل التنقل بسرعة
  isVisible.value = false;
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
