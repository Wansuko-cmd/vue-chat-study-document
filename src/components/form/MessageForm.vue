<template>
  <div>
    <InputForm :value="userName" :on-change="(newUserName) => this.userName = newUserName"/>
    <InputForm :value="text" :on-change="(newText) => this.text = newText"/>

    <SubmitButton :on-click="onSubmit"/>
  </div>
</template>

<script>
import InputForm from "@/components/form/InputForm";
import SubmitButton from "@/components/form/SubmitButton";
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
      console.log(this.userName)
      console.log(this.text)
    }
  }
}
</script>
