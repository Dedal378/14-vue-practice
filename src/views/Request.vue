<template>
  <app-loader v-if="loading"></app-loader>

  <app-page title="Заявка" v-else-if="request">
    {{ request }}
  </app-page>

  <h3 v-else class="text-center text-white">
    Заявки с ID = {{ $route.params.id }} нет
  </h3>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import AppPage from "@/components/ui/AppPage.vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";

export default {
  name: "Request",
  components: { AppPage, AppLoader, AppStatus },
  setup() {
    const route = useRoute()
    const store = useStore()
    const loading = ref(false)
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadOne', route.params.id)
      loading.value = false
    })

    return { loading, request }
  },
}
</script>

<style scoped>

</style>
