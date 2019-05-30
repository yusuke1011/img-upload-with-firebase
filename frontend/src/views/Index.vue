<template>
  <div id="app">
    <h1>US画像</h1>
    <div>{{errMsg}}</div>
    <div>
      <img src="../assets/logo.png" class="us-image" ref="image">
    </div>
    <div>
      <b-button type="button" size="lg" variant="outline-primary" v-on:click="imgGet">更新</b-button>
    </div>
    <div>
      <label for="user-name">ユーザ名</label>
      <input type="text" id="user-name" v-model="userName">
      <b-button type="button" size="lg" variant="outline-primary" v-on:click="imgStore">保存</b-button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import firestore from "firebase/firestore";
import axios from "axios";
import { db } from "../plugins/firebase";

export default {
  name: "App",
  components: {
    firebase
  },
  data() {
    return {
      email: "",
      pass: "",
      errCode: "",
      errMsg: "",
      userName: ''
    };
  },
  methods: {
    imgGet() {
      axios
        .get("./api/getImg")
        .then(res => {
          const imgData = "data:image/png;base64," + res.data.data;
          this.$refs.image.src = imgData;
        })
        .catch(err => {
          console.log("エラー：", err);
        });
    },
    imgStore() {
      //ストレージの参照を取得
      const storageRef = firebase.storage().ref();

      //画像保存先の参照を作成
      const imageRef = storageRef.child("images/test.png");

      //画像をbase64に変換
      const img = this.$refs.image;
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const base64Img = canvas.toDataURL("image/png");

      //画像をfirebase storageへ保存
      imageRef
        .putString(base64Img, "data_url")
        .then(function(snapshot) {
          console.log("Uploaded a base64 string!");
          return imageRef.getDownloadURL();
        })
        .then(url => {
          //vuexストアへ画像のURLを保存
          this.$store.commit("imgStore", { imgUrl: url });

          //firestoreへ保存
          db.collection("img-user")
            .add({
              user: test,
              image: url
            })
            .then(docRef => {
              console.log(docRef);
            })
            .catch(err => {
              console.log(err);
            });

          //リザルト画面へ遷移
          this.$router.push("/result");
        });
    }
  }
};
</script>

<style scoped>
.us-image {
}
</style>
