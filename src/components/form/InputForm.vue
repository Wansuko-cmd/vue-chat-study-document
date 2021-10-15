<template>
  <div>
    <input :value="value" v-on:input="onChange($event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    onChange: Function
  }
}
</script>
