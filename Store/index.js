import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useBooksStore = defineStore("Books", {
  state: () => ({
    Books: [
      {
        title: "The 24th Hour : Is This the End",
        price: "free",
        other: "James Patterson",
        image: "The 24th Hour.webp",
        rating: "5",
        inventoryStatus: "INSTOCK",
        category:"test"
      },
      {
        title: "Our Souls at Night",
        price: "free",
        other: "Kent Haruf,",
        image: "/Our Souls at Night.webp",
        rating: "4.5",
        inventoryStatus: "INSTOCK",
        category:"test"
      },
      {
        title: "Landline. Segundas Oportunidades / Landline: a Novel",
        price: "free",
        other: "Rainbow Rowell",
        image: "/Landline.jpg",
        rating: "3",
        inventoryStatus: "INSTOCK",
        category:"test"
      },
      {
        title: "The Belton Estate",
        price: "free",
        other: "Anthony Trollope",
        image: "/The Belton Estate.jpg",
        rating: "4",
        inventoryStatus: "LOWSTOCK",
        category:"test"
      },
      {
        title: "Winter",
        price: "free",
        other: "Marissa Meyer",
        image: "/Winter.webp",
        rating: "3.5",
        inventoryStatus: "LOWSTOCK",
        category:"test"
      },
      {
        title: "Cursed",
        price: "free",
        other: "Marissa Meyer",
        image: "/Cursed.jpg",
        rating: "2.5",
        inventoryStatus: "LOWSTOCK",
        category:"test"
      },
      {
        title: "The Queen's Assassin",
        price: "free",
        other: "Melissa de la Cruz",
        image: "/The Queen's Assassin.jpg",
        rating: "4",
        inventoryStatus: "OUTOFSTOCK",
        category:"test"
      },
      {
        title: "A Song of Wraiths and Ruin",
        price: "free",
        other: "Roseanne A. Brown",
        image: "/Song.webp",
        rating: "5",
        inventoryStatus: "OUTOFSTOCK",
        category:"test"
      },
      {
        title: "Selp-Helf",
        price: "free",
        other: "Miranda Sings",
        image: "/Selp-Helf.jpg",
        rating: "4.5",
        inventoryStatus: "INSTOCK",
        category:"test"
      },
      {
        title: "Reasons to Vote for Democrats : A Comprehensive Guide",
        price: "free",
        other: "Michael J. Knowles",
        image: "/vote.webp",
        rating: "5",
        inventoryStatus: "INSTOCK",
        category:"test"
      },
    ],
  }),
});
