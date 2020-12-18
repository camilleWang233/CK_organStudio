<template>
  <div class="navigator_bar">
    <div class="navigator_bar_content">
      <div class="navigator_bar_logo">羚羊创客</div>
      <div>登录</div>
      <button @click="test_ajax">发送ajax请求</button>
    </div>
  </div>
</template>

<script>
import { postProjectListByStudio } from "../api/http";
export default {
  name: "TopBar",
  setup() {
    async function test_ajax() {
      const res = await postProjectListByStudio();
      console.log("res:", res.data);
    }
    return {
      test_ajax,
    };
  },
};
</script>

