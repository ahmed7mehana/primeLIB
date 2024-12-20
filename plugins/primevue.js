import { Ripple } from "primevue";
import PrimeVue from "primevue/config";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue,{Ripple:true});
});
