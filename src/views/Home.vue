<template>
  <div class="home">
    <Bottom_nav />
  </div>
</template>

<script>
// @ is an alias to /src

import Bottom_nav from "../components/bottom_nav.vue";
export default {
  name: "Home",
  components: {
    Bottom_nav,
  },
};
</script>
