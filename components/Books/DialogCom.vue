<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const prop = defineProps({
  id: {
    type: Number,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});

const toast = useToast();
const visible = ref(false);

const showToast = () => {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "This is a success message!",
    life: 3000,
    styleClass: " text-center p-0 mr-[1500px]",
  });
};
</script>

<template>
  <div class="flex justify-center card">
    <Button
      label="Download"
      class="h-[50px] font-mono"
      @click="visible = true"
    />
    <Dialog
      v-model:visible="visible"
      header="Details"
      :style="{ width: '25rem' }"
    >
      <div class="flex flex-row flex-wrap justify-center">
        <img
          class="mx-auto rounded w-[200px]"
          :src="item.image"
          :alt="item.title"
        />
        <div class="text">
          <span
            class="block mb-8 font-mono text-surface-500 dark:text-surface-400"
          >
            name: {{ item.title }}
          </span>
          <div
            class="flex items-center justify-center gap-2 px-2 py-1 bg-surface-0"
            style="
              border-radius: 30px;
              box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04),
                0px 1px 2px rgba(0, 0, 0, 0.06);
            "
          >
            <span class="text-sm font-medium text-surface-900">{{
              item.rating
            }}</span>
            <i class="text-yellow-500 pi pi-star-fill"></i>
          </div>
          <span
            class="block mb-2 font-mono text-surface-500 dark:text-surface-400"
          >
            category: {{ item.category }}
          </span>
          <div class="bg-white rounded-border">
            <Tag :value="item.inventoryStatus"></Tag>
          </div>
          <span
            class="block mt-2 mb-3 font-mono text-surface-500 dark:text-surface-400"
          >
            BY: {{ item.other }}
          </span>
        </div>
        <p class="m-5 font-serif text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          laudantium labore.
        </p>
      </div>
      <div class="flex justify-end gap-2 btn">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        />
        <Button
          type="button"
          label="Download Now"
          @click="showToast(), (visible = false)"
        />
      </div>
    </Dialog>
  </div>
</template>
