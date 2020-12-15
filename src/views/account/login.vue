<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="ruleForm">
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
        <div>
          <a href="">忘记密码</a>
          <a href="">注册</a>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "login",
  setup() {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    });

    return {
      formConfig
    };
  }
};
</script>

<style scoped lang="scss">
.account {
  width: 100%;
  height: 100%;
  background: #282828;
  display: flex;
  justify-content: center;
  align-content: center;
  .form-wrap {
    width: 285px;
    color: #fff;
    padding-top: 300px;
  }
  label {
    display: block;
    font-size: 14px;
    color: #fff;
  }
}
</style>
