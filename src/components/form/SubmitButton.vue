<template>
  <div>
    <button v-on:click="onClick"> 送信 </button>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function
  }
}
</script>
