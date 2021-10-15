<template>
  <div>
    <div class="m-5 text-left card p-3 col-10 col-lg-7 border-dark">
      <div>
        Text: {{ text }}
      </div>
      <div>
        UserName: {{ userName }}
      </div>

      <div>
        <div>
          <button class="btn btn-danger" v-on:click="onDeleteClick">削除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
    text: String,
    onDeleteClick: Function,
  }
}
</script>
