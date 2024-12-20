<script setup>
import { IconField, InputIcon, InputText } from "primevue";
import Chart from "~/components/Home/Chart.vue";
import Collection from "~/components/Home/Collection.vue";

const value1 = ref(null);
</script>
<template>
  <div>
    <div class="main w-full h-[630px]">
      <h1 class="h-[250px] bg-red-500 opacity-85 text-center font-mono txt">
        <span class="md:text-[50px] text-[30px]">welcome to </span>
        <span class="font-bold md:text-[70px] text-[40px] uppercase text-white"
          >Library.prime</span
        >
      </h1>
      <div class="search">
        <IconField class="m-auto text-center mt-[-32px] w-fit">
          <InputIcon class="pi pi-search" />
          <InputText
            class="md:w-[500px] h-[60px]"
            v-model="value1"
            placeholder="Search"
          />
        </IconField>
      </div>
      <p class="text-center text-white text-[20px] mt-7 font-bold font-serif">
        HOLLIS is the library catalog. You can also browse all services & tools.
      </p>
    </div>
    <div>
      <Collection />
      <Chart />
    </div>
  </div>
</template>
<style>
.main {
  background-image: url("/library.webp");
}
.txt{
  align-content: center;
}
</style>
