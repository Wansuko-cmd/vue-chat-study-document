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
