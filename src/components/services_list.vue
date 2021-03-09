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
              <!-- Product Thumbnail--><a
                class="product-thumbnail d-block"
                href="page-shop-details.html"
                ><img src="/template/img/bg-img/p1.jpg" alt="" />
                <!-- Badge--><span class="badge bg-warning">Sale</span></a
              >
              <!-- Product Title--><a
                class="product-title d-block text-truncate"
                href="page-shop-details.html"
                >{{ category.name }}</a
              >
              <!-- Product Price-->
              <p class="sale-price">$9.89<span>$13.42</span></p>
              <a class="btn btn-primary btn-sm" href="#">Add to Cart</a>
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