<template>
  <div id="app" class="home">
    <NoSidebarLayout>
      <HomeScreen />
    </NoSidebarLayout>
  </div>
</template>

<script>
import NoSidebarLayout from "../components/shared/layout/NoSidebarLayout"
import HomeScreen from "../components/HomeScreen"

export default {
  name: "home",
  components: {
    NoSidebarLayout,
    HomeScreen
  }
}
</script>
