<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="fio">ФИО</label>
      <input v-model="fio" @blur="fBlur" id="fio" type="text">
      <small v-if="fError">{{ fError }}</small>
    </div>

    <div class="form-control">
      <label for="phone">Телефон</label>
      <input v-model="phone" @blur="pBlur" id="phone" type="text">
      <small v-if="pError">{{ pError }}</small>
    </div>

    <div :class="{invalid: aError}" class="form-control">
      <label for="amount">Сумма</label>
      <input @blur="aBlur" id="amount" type="text" v-model.number="amount">
      <small v-if="aError">{{ aError }}</small>
    </div>

    <div class="form-control">
      <label>Статус</label>
      <select v-model="status" id="status">
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
      </select>
    </div>

    <button :disabled="isSubmitting" class="btn primary">Создать</button>
  </form>
</template>

<script>
import { useRequestForm } from "@/use/request-form.js";

export default {
  name: "RequestModal",
  emits: ['created'],
  setup(_, { emit }) {
    const submit = async values => {
      console.log(values)
      emit('created')
    }

    return {
      ...useRequestForm(submit)
    }
  },
}
</script>

<style scoped>

</style>
