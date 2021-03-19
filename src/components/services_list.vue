<template>
  <div class="top-products-area">
    <div class="container">
      <div class="row g-3">
        <!-- Single Top Product Card-->
        <div class="col-6 col-sm-4 col-lg-3">
          <div
            v-for="category in categories"
            :key="category.id"
            class="card single-product-card"
          >
            <div class="card-body p-3">
              <!-- Product Thumbnail--><router-link
                :to="'/service_products/' + category.id"
                class="product-thumbnail d-block"
                ><img src="/template/img/bg-img/p1.jpg" alt="" />
                <!-- Badge--><span class="badge bg-warning"
                  >Sale</span
                ></router-link
              >
              <!-- Product Title--><router-link
                class="product-title d-block text-truncate"
                to=""
                >{{ category.name }}</router-link
              >
              <!-- Product Price-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceList",
  props: ["categories"],
};
</script>

<style>
</style>