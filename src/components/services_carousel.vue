<template>
  <div>
    <div class="container">
      <!-- Element Heading-->
      <div class="element-heading">
        <h6></h6>
      </div>
    </div>
    <div class="affan-features-wrap py-3">
      <div class="container">
        <div class="row g-3">
          <div class="col-6" v-for="service in services" :key="service.id">
            <router-link :to="'/service/' + service.id">
              <div
                class="card text-center shadow-sm wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="card-body">
                  <img src="template/img/demo-img/bootstrap.png" alt="" />
                  <h6 class="mb-0">{{ service.name }}</h6>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Services_Slide",

  mounted() {
    this.getServices();
  },

  data() {
    return {
      services: null,
    };
  },

  methods: {
    getServices() {
      axios
        .get("http://192.168.8.107:5000/api/services")
        .then((response) => (this.services = response.data.services));
    },
  },
};
</script>

<style>
</style>