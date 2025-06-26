<script setup lang="ts">
import Email from "~/components/icon/Email.vue";
import Password from "~/components/icon/Password.vue";

const { showSnackbar } = useSnackbar();

const creds = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

async function createAccount() {
  const { email, password } = creds;
  const user = await $fetch("/api/auth/register", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
  showSnackbar(`${user}`);
}
</script>

<template>
  <NuxtLayout name="auth">
    <template #title>Create account</template>
    <template #desc>Let’s get you started sharing your links!</template>
    <template #default>
      <form class="form" @submit.prevent="createAccount">
        <FormTextInput
          v-model="creds.email"
          type="email"
          label="Email address"
          placeholder="e.g. alex@email.com"
          :prefixIcon="Email" />
        <FormTextInput
          v-model="creds.password"
          type="password"
          label="Create password"
          placeholder="At least 8 characters"
          :prefixIcon="Password" />
        <FormTextInput
          v-model="creds.confirmPassword"
          type="password"
          label="Confirm password"
          hint="Password must contain at least 8 characters"
          placeholder="At least 8 characters"
          :prefixIcon="Password" />
        <FormButton type="submit">Create new account</FormButton>
      </form>
    </template>
    <template #footer>
      Already have an account?
      <NavigationLink to="/login">Login</NavigationLink>
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
