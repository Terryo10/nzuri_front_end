<template>
  <div>
    <header_back_arrow :detail="service"></header_back_arrow>
    <div class="page-content-wrapper py-3">
      <Services_list :categories="service.service.categories" />
    </div>
  </div>
</template>

<script>
import header_back_arrow from "../components/header_back_arrow.vue";
import global from "@/mixins/global.js";
import Services_list from "../components/services_list.vue";

export default {
  components: { header_back_arrow, Services_list },
  data() {
    return {};
  },

  mounted() {
    this.getUnauthenticatedData(
      this.base_url + this.service_url + this.$route.params.id
    );
  },
  mixins: [global],
  methods: {},
};
</script>

<style>
</style>