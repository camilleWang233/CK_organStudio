<template>
  <div>
    <!-- headers -->
    <TopBar></TopBar>
    <!-- 侧边栏 -->
    <besideMenu></besideMenu>
    <div class="homepage_bg">
      <!-- 轮播图 -->
      <div class="slide_show"></div>
      <!-- 页面内容 -->
      <div class="center_content">
        <tabBasic></tabBasic>
        <workList></workList>
        <!-- <tabClass></tabClass> -->
      </div>
    </div>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import TopBar from "../../components/TopBar";
import besideMenu from "../../components/besideMenu";
import Footer from "../../components/Footer";
import workList from "../../components/work_list";
import tabBasic from "../../components/tablist/tab_basic";
import tabClass from "../../components/tablist/tab_class";
export default {
  name: "HomePage",
  components: {
    TopBar,
    besideMenu,
    tabBasic,
    tabClass,
    Footer,
    workList,
  },
};
</script>

<style>
</style>