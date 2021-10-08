<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from "vue"
import AuthLayout from '@/layout/AuthLayout'
import MainLayout from '@/layout/MainLayout'

export default {
  components: { AuthLayout, MainLayout },
  setup() {
    const route = useRoute()

    return { layout: computed(() => route.meta.layout) }
  },
}
</script>
