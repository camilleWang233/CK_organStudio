<template>
  <div class="navigator_main">
    <div class="navigator_bar">
      <div class="navigator_bar_content">
        <a href="http://steam.leadersir.com/">
          <div class="navigator_bar_logo cursor_pointer"></div>
        </a>
        <div class="cursor_pointer">工作室首页</div>
        <div class="cursor_pointer">最新活动</div>
        <div class="cursor_pointer">在线课程</div>
        <div class="cursor_pointer">作品展示</div>
        <div class="cursor_pointer">边玩边学</div>
        <div class="cursor_pointer">素材库</div>
        <div class="cursor_pointer">赛事活动</div>
        <div @click="display_login" class="cursor_pointer">登录 /</div>
        <div @click="display_register" class="cursor_pointer">注册</div>
        <div class="avast_homepage cursor_pointer">
          <img src width="100%" />
        </div>
        <!-- <button @click="test_ajax">发送ajax请求</button> -->
      </div>
    </div>
    <div>
      <div v-show="show_login==1">
        <div class="login_div">
          <div class="login_main">
            <div class="login_header">
              <h2 @click="cur=0" :class="{active:cur==0}" class="cursor_pointer">登录</h2>
              <h2 @click="cur=1" :class="{active:cur==1}" class="cursor_pointer">注册</h2>
              <div></div>

              <svg
                @click="hide_login"
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="cursor_pointer"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
            <!-- 登录div -->
            <div v-show="cur==0" class="login">
              <div class="login_content">
                <div>
                  <input
                    type="text"
                    v-model.trim="login_item.username"
                    class="input_style"
                    placeholder="用户名"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    v-model.trim="login_item.password"
                    class="input_style"
                    placeholder="密码"
                  />
                </div>
              </div>
              <div class="login_reg_bottom">
                <button @click="login" class="btn_style">登录</button>
              </div>
            </div>
            <!-- 注册div -->
            <div v-show="cur==1" class="register">
              <div class="register_content">
                <div>
                  <input
                    type="text"
                    v-model.trim="reg_item.username"
                    class="input_style"
                    placeholder="用户名"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    v-model.trim="reg_item.nickname"
                    class="input_style"
                    placeholder="昵称"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    v-model.trim="reg_item.password"
                    class="input_style"
                    placeholder="密码"
                  />
                </div>
              </div>
              <div class="login_reg_bottom">
                <button @click="register" class="btn_style">注册</button>
              </div>
            </div>
          </div>
        </div>
        <div class="login_backdrop" @click="hide_login"></div>
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
    const show_login = ref(0);
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
    // 显示登录
    const display_login = () => {
      cur.value = 0;
      show_login.value = 1;

      console.log("i am show");
    };

    // 显示注册
    const display_register = () => {
      cur.value = 1;
      show_login.value = 1;

      console.log("i am show");
    };

    const hide_login = () => {
      console.log("i am hide");
      show_login.value = 0;
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
      display_login,
      display_register,
      show_login,
      hide_login,
      login,
      register,
      ...toRefs(state),
      cur,
    };
  },
};
</script>

