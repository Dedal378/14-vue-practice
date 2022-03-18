<template>
  <div class="filter">
    <div class="form-control">
      <input v-model="name" type="text" placeholder="Начните писать имя" >
    </div>

    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
        <option value="cancelled">Отменен</option>
        <option value="done">Завершен</option>
      </select>
    </div>

    <button v-if="isActive" @click="reset" class="btn warning">Очистить</button>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";

export default {
  name: "RequestFilter",
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const name = ref(null)
    const status = ref(null)

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(() => name.value || status.value)

    return {
      name, status, isActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  },
}
</script>

<style scoped>

</style>
