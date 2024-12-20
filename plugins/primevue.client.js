import { defineNuxtPlugin } from "#app";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Tag from "primevue/tag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Tag", Tag);
  nuxtApp.vueApp.use(ToastService);
});
