<template>
  <div class="m-5">
    <InputForm
        :value="userName"
        :on-change="(newUserName) => this.userName = newUserName"
        label="ユーザー名"
    />
    <InputForm
        :value="text"
        :on-change="(newText) => this.text = newText"
        label="テキスト"
    />

    <SubmitButton :on-click="onSubmit" />
  </div>
</template>

<script>
import InputForm from "@/components/form/InputForm";
import SubmitButton from "@/components/form/SubmitButton";
import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'POST';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  console.log('Starting Request: ', request)
  return request
})

export default {
  components: {SubmitButton, InputForm},
  data() {
    return {
      userName: '',
      text: ''
    }
  },
  methods: {
    onSubmit() {
      axios.post("http://localhost:8000/chat", {
        user_name: this.userName,
        text: this.text
      })
    }
  }
}
</script>
