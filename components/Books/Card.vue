<template>
  <div class="card">
    <DataView :value="products" paginator :rows="5" class="cursor-pointer">
      <template #list="slotProps">
        <div class="flex flex-col font-monos">
          <div
            v-for="(item, index) in slotProps.items"
            :key="index"
            class="transition-all hover:bg-red-500"
          >
            <div>
              <div
                class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center"
                :class="{
                  'border-t border-surface-200 dark:border-surface-700':
                    index !== 0,
                }"
              >
                <div class="relative md:w-40">
                  <img
                    class="block w-full mx-auto rounded xl:block"
                    :src="item.image"
                    :alt="item.title"
                  />
                  <div
                    class="absolute bg-black/70 rounded-border"
                    style="left: 4px; top: 4px"
                  >
                    <Tag
                      :value="item.inventoryStatus"
                      :severity="getSeverity(item)"
                    ></Tag>
                  </div>
                </div>
                <div
                  class="flex flex-col justify-between flex-1 gap-6 md:flex-row md:items-center"
                >
                  <div
                    class="flex flex-row items-start justify-between gap-2 md:flex-col"
                  >
                    <div>
                      <span
                        class="font-mono text-sm font-medium text-surface-500 dark:text-surface-400"
                        >{{ item?.category }}</span
                      >
                      <div class="mt-2 font-mono text-lg font-medium">
                        {{ item.title }}
                      </div>
                    </div>
                    <div class="p-1 bg-surface-100" style="border-radius: 30px">
                      <div
                        class="flex items-center justify-center gap-2 px-2 py-1 bg-surface-0"
                        style="
                          border-radius: 30px;
                          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                            0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                        "
                      >
                        <span
                          class="font-serif text-sm font-medium text-surface-900"
                          >{{ item.rating }}</span
                        >
                        <i class="text-yellow-500 pi pi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-8 md:items-end">
                    <span class="font-serif text-xl font-semibold"
                      >${{ item.price }}</span
                    >
                    <div
                      class="flex flex-row-reverse gap-2 font-mono md:flex-row"
                    >
                      <Button icon="pi pi-heart" outlined></Button>
                      <DialogCom :id="index" :item="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Button, DataView, Tag } from "primevue";
import { useBooksStore } from "~/Store";
import DialogCom from "./DialogCom.vue";

let store = useBooksStore();

onMounted(() => {
  products.value = store.Books.slice(0, 9);
});

const products = ref();
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
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
