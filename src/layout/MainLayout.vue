<template>
  <the-navbar />
  <the-sidebar />

  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheSidebar from "@/components/TheSidebar"
import AppMessage from '@/components/ui/AppMessage'

export default {
  name: "MainLayout",
  components: { TheNavbar, AppMessage, TheSidebar },
}
</script>

<style scoped>

</style>
