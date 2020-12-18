<template>
  <div>
    <!-- headers -->
    <TopBar></TopBar>
    <!-- 轮播图 -->
    <div class="slide_show"></div>
    <!-- 页面内容 -->
    <div class="center_content">
      <tabBasic></tabBasic>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import TopBar from "../../components/TopBar";
import tabBasic from "../../components/tablist/tab_basic";
export default {
  name: "HomePage",
  components: {
    TopBar,
    tabBasic,
  },
};
</script>

<style>
</style>