<script setup>
import { Button, IconField, InputIcon, InputText } from "primevue";
import DialogCom from "~/components/Books/DialogCom.vue";
import { useBooksStore } from "~/Store";

const value1 = ref("");
const store = useBooksStore();
const filteredBooks = computed(() => {
  if (!value1.value) return [];
  return store.Books.filter((book) =>
    book.title.toLowerCase().includes(value1.value.toLowerCase())
  );
});
</script>
<template>
  <div class="container">
    <div class="mb-10 text-center upp">
      <h1 class="h-[100px] bg-red-500 opacity-85 text-center font-mono upp">
        <span class="md:text-[50px] text-[20px]"> Let's find your </span>
        <span class="font-bold md:text-[60px] text-[20px] uppercase text-white"
          >favorite book</span
        >
      </h1>
      <p class="font-serif text-[18px]">
        Here you will find a large collection of books that you can get for free
        and benefit from.
      </p>
    </div>

    <div class="m-10 search">
      <div>
        <IconField class="m-auto mt-10 text-center w-fit">
          <InputIcon class="pi pi-search" />
          <InputText
            class="md:w-[500px] h-[40px]"
            v-model="value1"
            placeholder="Let's find your favorite book"
          />
        </IconField>
      </div>

      <!-- عرض النتائج تحت البحث -->
      <div v-if="value1" class="mt-5 results">
        <h2 v-if="filteredBooks.length" class="font-serif text-xl font-bold">
          Results:
        </h2>
        <div
          v-for="(book, index) in filteredBooks"
          :key="index"
          class="flex flex-col flex-wrap justify-center p-4 mb-4 border rounded-md md:flex-row md:justify-between bg-slate-100 S_Card"
        >
          <img
            v-if="book.image"
            :src="book.image"
            :alt="book.title"
            class="mb-2 h-[100px] w-30"
          />
          <div class="font-mono text">
            <h3 class="font-semibold md:text-lg text-[20px] text-center">
              {{ book.title }}
            </h3>
            <h3 class="font-semibold md:text-lg text-[20px] text-center">
              BY :{{ book.other }}
            </h3>
          </div>
          <DialogCom :id="index" :item="book" />
        </div>
        <p v-if="!filteredBooks.length" class="text-gray-500">
          No results found.
        </p>
      </div>
    </div>

    <div v-if="!value1" class="card">
      <BooksCard />
    </div>
  </div>
</template>
<style>
.S_Card {
  align-items: center;
}
.upp {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  justify-content: center;
}
</style>
