<template>
  <div>
    <div>
      Text: {{ text }}
    </div>
    <div>
      UserName: {{ userName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
    text: String,
  }
}
</script>
