<template>
  <div>
    <h2>Welcome to Owl Messenger</h2>

    <b-form v-on:submit.prevent="" inline>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="nickname" placeholder="Choose a nickname"></b-input>
      </b-input-group>
      <b-button variant="info" @click="gotoMessenger()">Go to messenger</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: ""
    }
  },
  methods: {
    gotoMessenger() {
      console.log("nickname selected " + this.nickname)
      this.$router.push({
        name: "messenger",
        params: {
          nickname: this.nickname
          }
        })
    }
  }
}
</script>

<style>
</style>
