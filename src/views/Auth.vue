<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div :class="['form-control', { invalid: pError }]">
      <label for="email">Email</label>
      <input v-model="email" @blur="eBlur" id="email" type="email">
      <small v-if="eError">{{ eError }}</small>
    </div>

    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Пароль</label>
      <input v-model="password" @blur="pBlur" id="password" type="password">
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button :disabled="isSubmitting || isTooManyAttempts" class="btn primary" type="submit">
      Войти
    </button>
    <div v-if="isTooManyAttempts" class="text-danger">
      Вы слишком часто пытаетесь войти в систему. Попробуйте позже
    </div>
  </form>
</template>

<script>
import { useLoginForm } from "@/use/login-form.js";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { error } from "@/utils/error.js";

export default {
  name: "Auth",
  setup() {
    const route = useRoute()
    const store = useStore()

    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning'
      })
    }

    return { ...useLoginForm() }
  },
}
</script>

<style scoped>

</style>
