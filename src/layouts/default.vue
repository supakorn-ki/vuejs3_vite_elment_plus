<template>
  <div>
    <el-container class="layout-container-demo" style="max-height: 100vh">
      <Sidebar />
      <Content />
    </el-container>
  </div>
</template>

<script>
import Sidebar from "../components/layouts/sidebar.vue";
// import Header from "../components/layouts/header.vue";
import Content from "../components/layouts/content.vue";
export default {
  components: {
    Sidebar,
    // Header,
    Content,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
