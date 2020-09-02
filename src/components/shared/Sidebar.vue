<template>
  <div>
    <b-list-group>
        <b-list-group-item v-for="(user, index) in users" :key="index">
          {{ user.nickname }}
          <b-badge variant="info" pill v-if="isCurrentUser(user)">You</b-badge>
        </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.users
    },
    currentUser() {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    isCurrentUser(user) {
      return (this.currentUser === user)
    }
  }
}
</script>
