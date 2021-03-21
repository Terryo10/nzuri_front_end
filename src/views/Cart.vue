<template>
  <div>
    <Header_back_arrow :detail="pageName"></Header_back_arrow>
    <bottom_nav></bottom_nav>
  </div>
</template>

<script>
import bottom_nav from "../components/bottom_nav.vue";
import Header_back_arrow from "../components/header_back_arrow.vue";
export default {
  components: { bottom_nav, Header_back_arrow },
  data() {
    return {
      pageName: "Cart",
    };
  },
  mounted() {},
};
</script>

<style>
</style>