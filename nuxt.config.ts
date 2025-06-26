// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],

  runtimeConfig: {
    pasetoPublicKey: "k4.public.B-UDgdNUo1wqlfoe7YhXuZq1gggGIFVQoOCZ44iRy7w",
    pasetoSecret:
      "k4.secret.7B3y3G0cQS23SYuJaWZhAh9IMwAuOUbgz7orqPE70KoH5QOB01SjXCqV-h7tiFe5mrWCCAYgVVCg4JnjiJHLvA",
  },

  modules: ["nuxt-auth-utils"],
});