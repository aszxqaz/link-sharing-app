<script setup lang="ts">
import { IconPassword, PlatformDevTo } from "#components";
import { z } from "zod";
import { emailSchema } from "~/shared/schema/creds";

const { loggedIn, user, fetch: refreshSession } = useUserSession();

const { showSnackbar } = useSnackbar();

const credsSchema = z.object({
  email: emailSchema,
});

const credentials = reactive({
  email: "",
  password: "",
});

function login() {
  $fetch("/api/auth/login", {
    method: "POST",
    body: credentials,
  })
    .then(async () => {
      await refreshSession();
      await navigateTo("/profile");
    })
    .catch((err) => {
      showSnackbar(err);
    });
}
</script>

<template>
  <NuxtLayout name="auth">
    <template #title>Login</template>
    <template #desc>Add your details below to get back into the app</template>
    <template #default>
      <form class="form" @submit.prevent="login">
        <FormTextInput
          v-model="credentials.email"
          type="email"
          label="Email address"
          placeholder="e.g. alex@email.com"
          :prefixIcon="PlatformDevTo" />
        <FormTextInput
          v-model="credentials.password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          :prefixIcon="IconPassword" />
        <FormButton type="submit">Login</FormButton>
      </form>
    </template>
    <template #footer>
      Don't have an account?
      <NavigationLink to="/register">Create account</NavigationLink>
    </template>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
}
</style>
