<template>
  <Sidebar/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "MainLayout",
  components: {Sidebar}
}
</script>

<style scoped>

</style>