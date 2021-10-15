<template>
  <div class="m-5">
    <button v-on:click="onClick" class="btn btn-primary"> 送信 </button>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function
  }
}
</script>
