<template>
  <div id="app">
    <h1>ログイン画面</h1>
    <div>
      <table class="form-table">
        <tr>
          <th><label for="login-email">メールアドレス</label></th>
          <td><input type="text" id="login-email"></td>
        </tr>
        <tr>
          <th><label for="login-pass">パスワード</label></th>
          <td><input type="text" id="login-pass"></td>
        </tr>
      </table>
    </div>
    <div>
      <b-button
        type="button"
        size="lg"
        variant="outline-primary"
        v-on:click="start"
      >ログイン</b-button>
    </div>
    <div class="signup-area">
      <router-link to="/signup">新規登録はこちらから</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    start() {
      //mode_options画面へ遷移
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>

.signup-area {

}

</style>
