<template>
  <div>
    <div class="tab_list">
      <div>作品集</div>
    </div>
    <div class="tab_content">
      <div class="work_card" v-for="item in dataList" :key="item">
        <div class="work_cover">
          <img :src="`${item.sb3ImagePath}`" class="work_cover_img" />
        </div>
        <div class="work_content">
          <div class="work_title">{{item.projectName}}</div>
          <div class="work_time">{{item.publishTimeString}}</div>
          <div class="work_avast">
            <img :src="`${item.authorAvatar}`" />
            <span>{{item.authorUserName}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount } from "vue";
import { postProjectListByStudio } from "../api/http";
export default {
  name: "work_list",
  setup() {
    const state = reactive({
      dataList: [],
    });
    onBeforeMount(async () => {
      const res = await postProjectListByStudio(1);
      console.log(res.data.result);

      state.dataList = res.data.result;
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>