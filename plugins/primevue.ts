import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import type { App } from "vue";

export function primeVuePlugin() {
  return {
    install: (app: App) => {
      app.use(PrimeVue, {
        csp: {
          nonce: "testnonce",
        },
        pt: {
          button: () => ({
            root: {
              class: "font-medium py-2 rounded-full",
            },
          }),
          multiselect: () => ({
            token: {
              class: "rounded-full",
            },
          }),
        },
        ripple: false,
      });
    },
  };
}

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  app.use(primeVuePlugin());
  app.directive("tooltip", Tooltip);
});
