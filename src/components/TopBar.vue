<template>
  <div>
    <div class="navigator_bar">
      <div class="navigator_bar_content">
        <div class="navigator_bar_logo">羚羊创客</div>
        <div @click="show_login">登录</div>
        <div>注册</div>
        <!-- <button @click="test_ajax">发送ajax请求</button> -->
      </div>
    </div>
    <div>
      <div class="login_div">
        <div class="login_main">
          <div class="login_header">
            <h1 @click="cur=0" :class="{active:cur==0}">登录</h1>
            <h1 @click="cur=1" :class="{active:cur==1}">注册</h1>
            <button>close</button>
          </div>
          <!-- 登录div -->
          <div v-show="cur==0" class="login">
            <div class="login_content">
              <div>
                <input type="text" v-model.trim="login_item.username" />
              </div>
              <div>
                <input type="pwd" v-model.trim="login_item.password" />
              </div>
            </div>
            <div class="login_reg_bottom">
              <button @click="login">登录</button>
            </div>
          </div>
          <!-- 注册div -->
          <div v-show="cur==1" class="register">
            <div class="register_content">
              <div>
                <input type="text" v-model.trim="reg_item.username" />
              </div>
              <div>
                <input type="text" v-model.trim="reg_item.nickname" />
              </div>
              <div>
                <input type="pwd" v-model.trim="reg_item.password" />
              </div>
            </div>
            <div class="login_reg_bottom">
              <button @click="register">注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  postProjectListByStudio,
  getloginByAjax,
  getregisterByAjax,
} from "../api/http";
import { reactive, ref, toRefs } from "vue";
export default {
  name: "TopBar",
  setup() {
    // async function test_ajax() {
    //   const res = await postProjectListByStudio();
    //   console.log("res:", res.data);
    // }
    const cur = ref(0);
    const state = reactive({
      login_item: {
        username: "",
        password: "",
      },
      reg_item: {
        username: "",
        nickname: "",
        password: "",
      },
    });
    // 登录框
    const show_login = () => {
      console.log("login");
    };

    // 登录方法
    const login = async () => {
      const res = await getloginByAjax(
        state.login_item.username,
        state.login_item.password
      );
      console.log("res is", res);
      if (res.data.success) {
        alert("登陆成功");
      } else {
        alert(res.data.msg);
      }
    };
    // 注册方法
    const register = async () => {
      const res = await getregisterByAjax(
        state.reg_item.username,
        state.reg_item.nickname,
        state.reg_item.password
      );
      console.log("res is", res);
      if (res.data.success) {
        alert("注册成功");
      } else {
        alert(res.data.msg);
      }
    };
    return {
      // test_ajax,
      show_login,
      login,
      register,
      ...toRefs(state),
      cur,
    };
  },
};
</script>

