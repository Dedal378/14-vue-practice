<template>
  <app-loader v-if="loading"></app-loader>

  <app-page v-else-if="request" back title="Заявка">
    <p><strong>Статус:
      <app-status :type="request.status" />
    </strong></p>
    <p><strong>Имя владельца: {{ request.fio }}</strong></p>
    <p><strong>Телефон: {{ request.phone }}</strong></p>
    <p><strong>Сумма: {{ currency(request.amount) }}</strong></p>

    <div class="form-control">
      <label>Статус</label>
      <select v-model="status">
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
      </select>
    </div>

    <button @click="remove" class="btn danger">Удалить</button>
    <button v-if="hasChanged" @click="update" class="btn">Обновить</button>
  </app-page>

  <h3 v-else class="text-center text-white">
    Заявки с ID = {{ $route.params.id }} нет
  </h3>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { currency } from "@/utils/currency.js";
import AppPage from "@/components/ui/AppPage.vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";

export default {
  name: "Request",
  components: { AppPage, AppLoader, AppStatus },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const status = ref()

    const hasChanged = computed(() => request.value.status !== status.value)

    const remove = async() => {
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }
    const update = async() => {
      const data = { ...request.value, status: status.value, id: route.params.id }
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }

    onMounted(async() => {
      loading.value = true
      request.value = await store.dispatch('request/loadOne', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    return { loading, request, currency, remove, update, status, hasChanged }
  },
}
</script>

<style scoped>

</style>
