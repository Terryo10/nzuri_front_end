<template>
  <div>
    <header_back_arrow :detail="service_name"></header_back_arrow>
    <div class="page-content-wrapper">
      <br>
      <div class="top-products-area product-list-wrap">
        <div class="container">
          <div class="row g-3">
            <!-- Single Top Product Card-->
            <div
              class="col-12"
              v-for="products in service_products"
              :key="products.id"
            >
              <div class="card single-product-card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="card-side-img">
                      <!-- Product Thumbnail--><a
                        class="product-thumbnail d-block"
                        href="page-shop-details.html"
                        ><img src="/template/img/bg-img/p1.jpg" alt="" />
                        <!-- Badge--><span class="badge bg-primary"
                          >Sale</span
                        ></a
                      >
                    </div>
                    <div class="card-content px-4 py-2">
                      <!-- Product Title--><a
                        class="product-title d-block text-truncate mt-0"
                        href="page-shop-details.html"
                        >{{ products.name }}</a
                      >
                      <!-- Product Price-->
                      <p class="sale-price">$9.89<span>$13.42</span></p>
                      <a class="btn btn-danger btn-sm disabled" href="#"
                        >Out of Stock</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom_nav></Bottom_nav>
  </div>
</template>

<script>
import Bottom_nav from "../components/bottom_nav.vue";
import header_back_arrow from "../components/header_back_arrow.vue";
import global from "@/mixins/global.js";

export default {
  components: { header_back_arrow, Bottom_nav },
  data() {
    return {
      service_name: "servicethangy",
    };
  },

  mounted() {
    this.getServiceProducts(
      this.base_url + this.service_products_url + this.$route.params.id
    );
  },
  mixins: [global],
};
</script>

<style>
</style>