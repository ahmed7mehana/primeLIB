<template>
  <div class="card">
    <div class="text-center border-t-8 border-red-500">
      <h1 class="text-[40px] font- uppercase font-monos">Explore our collections</h1>
      <p class="text-[20px] mt-6 font-serif">
        Discover the unique holdings of our Library.
      </p>
    </div>
    <Carousel
      :value="products"
      :numVisible="4"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div
          class="p-4 m-2 border rounded border-surface-200 dark:border-surface-700"
        >
          <div class="mb-4 ">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.title"
                class="w-full h-[250px] rounded"
              />
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data?.inventoryStatus)"
                class="absolute"
                style="left: 5px; top: 5px"
              />
            </div>
          </div>
          <div class="mb-4 font-medium font-monos">{{ slotProps.data.title }}</div>
          <div class="flex items-center justify-between">
            <div class="mt-0 font-serif text-xl font-semibold">
              ${{ slotProps.data.price }}
            </div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-download" class="ml-2" />
            </span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Button, Carousel, Tag } from "primevue";
import { useBooksStore } from "~/Store";

let store = useBooksStore();
onMounted(() => {
  products.value = store.Books.slice(0, 9);
});

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>
<style>

</style>