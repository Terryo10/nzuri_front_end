<template>
  <div>
    <header_back_arrow :detail="service.service.name"></header_back_arrow>
    <div class="page-content-wrapper py-3">
      <div v-if="loading">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <Services_list v-else :categories="service.service.categories" />
      <Bottom_nav />
    </div>
  </div>
</template>

<script>
import header_back_arrow from "../components/header_back_arrow.vue";
import global from "@/mixins/global.js";
import Services_list from "../components/services_list.vue";
import Bottom_nav from "../components/bottom_nav.vue";

export default {
  components: { header_back_arrow, Services_list, Bottom_nav },
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