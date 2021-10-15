<template>
  <div class="m-5">
    <label class="form-label">{{ label }}</label>
    <input
        :value="value"
        v-on:input="onChange($event.target.value)"
        class="form-control"
        :placeholder="label"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    onChange: Function
  }
}
</script>
