<template>
  <div>
    <div v-for="message in messages" :key="message">
      <MessageCard :text="message.text" :user-name="message.user_name"/>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import MessageCard from "@/components/show/MessageCard";

export default {
  components: {MessageCard},
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    axios.get("http://localhost:8000/chat")
        .then(response => {
          this.messages = response.data
        })
  },
}
</script>
