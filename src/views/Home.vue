<template>
  <div class="home">
    <div class="page-content-wrapper">
      <Header_nav />
      <Slider_Component />
      <Services_carousel />
      <Bottom_nav />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Bottom_nav from "../components/bottom_nav.vue";
import Header_nav from "../components/header.vue";
import Services_carousel from "../components/services_carousel.vue";
import Slider_Component from "../components/slider.vue";
export default {
  name: "Home",
  components: {
    Bottom_nav,
    Header_nav,
    Services_carousel,
    Slider_Component,
  },
};
</script>
