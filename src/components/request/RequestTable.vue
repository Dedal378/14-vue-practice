<template>
  <h4 v-if="requests.length === 0" class="text-center">
    Заявок пока нет
  </h4>

  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(request, idx) in requests" :key="request.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ request.fio }}</td>
      <td>{{ request.phone }}</td>
      <td>{{ currency(request.amount) }}</td>
      <td>
        <AppStatus :type="request.status" />
      </td>
      <td>
        <router-link
          v-slot="{ navigate }"
          :to="{name: 'Request', params: { id: request.id }}"
          custom
        >
          <button @click="navigate" class="btn">Открыть</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import { currency } from '@/utils/currency.js'
import AppStatus from '@/components/ui/AppStatus.vue'

export default {
  name: 'RequestTable',
  components: { AppStatus },
  props: ['requests'],
  setup() {
    return { currency }
  },
}
</script>
