<template>
  <div>
    <b-list-group>
        <b-list-group-item v-for="(user, index) in users" :key="index"> {{ user.nickname }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.users
    }
  }
}
</script>
