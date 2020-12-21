<template>
  <div>
    <div class="navigator_bar">
      <div class="navigator_bar_content">
        <div class="navigator_bar_logo">羚羊创客</div>
        <div @click="display_login" class="cursor_pointer">登录</div>
        <div class="cursor_pointer">注册</div>
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
                class="bi bi-x"
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
                  <input type="text" v-model.trim="login_item.username" class="input_style" />
                </div>
                <div>
                  <input type="pwd" v-model.trim="login_item.password" class="input_style" />
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
    const display_login = () => {
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

