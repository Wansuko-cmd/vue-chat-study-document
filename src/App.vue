<template>
  <div>
    <MessageList />
    <MessageForm />
  </div>
</template>

<script>
import MessageList from "@/components/show/MessageList";
import MessageForm from "@/components/form/MessageForm";

export default {
  name: 'App',
  components: {
    MessageForm,
    MessageList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
