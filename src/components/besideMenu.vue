<template>
  <div>
    <div class="beside_menu_div">
      <div class="beside_menu_style">
        <div class="beside_menu_img">
          <img src="../assets/imgs/beside_img.png" />
        </div>
        <div class="beside_menu_text">开始制作</div>
        <div class="beside_menu_text">教师教学</div>
        <div class="beside_menu_text" v-show="cur==1">回到顶部</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "besideMenu",
  setup() {
    const cur = ref(0);
    window.onscroll = function () {
      var scrollT =
        document.documentElement.scrollTop || document.body.scrollTop;
      var scrollH =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      var clientH =
        document.documentElement.clientHeight || document.body.clientHeight;
      // console.log("now scrollT  is", scrollT);
      //console.log(scrollT +"+"+scrollH+"+"+clientH);
      if (scrollT == scrollH - clientH) {
        console.log("到底部了");
        cur.value = 1;
      } else if (scrollT == 0) {
        console.log("到顶部了");
        cur.value = 0;
      } else {
        cur.value = 1;
      }
    };
    return {
      cur,
    };
  },
};
</script>

<style>
</style>