<template>
  <Header/>
  <div class="content">
    <SidebarNav/>
    <main>
      <router-view/>
    </main>
    <SidebarProfile/>
  </div>
</template>

<script>
import SidebarNav from "@/components/SidebarNav.vue";
import Header from "@/components/Header.vue";
import SidebarProfile from "@/components/SidebarProfile.vue";

export default {
  name: "MainLayout",
  components: { SidebarProfile, Header, SidebarNav }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
}

main {
  width: calc(100% - 18.563vw - 24.688vw);
  height: calc(100vh - (5.2770448vh - 12px) - 3.1106vh - 6vw);
  padding-bottom: 15px;
  margin-top: calc(5.2770448vh - 12px);
  overflow: hidden auto;

  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>