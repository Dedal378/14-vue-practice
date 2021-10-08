<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary">
        Создать
      </button>
    </template>

    <RequestTable />
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue'
import RequestTable from "@/components/request/RequestTable.vue";

export default {
  name: 'Home',
  components: { RequestTable, AppPage }
}
</script>
