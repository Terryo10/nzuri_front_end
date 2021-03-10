<template>
  <div>
    <div class="header-area" id="headerArea">
      <div class="container">
        <!-- Header Content-->
        <div
          class="header-content header-style-five position-relative d-flex align-items-center justify-content-between"
        >
          <!-- Back Button-->
          <div class="back-button">
            <a @click="$router.go(-1)"
              ><svg
                width="32"
                height="32"
                viewBox="0 0 16 16"
                class="bi bi-arrow-left-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                /></svg
            ></a>
          </div>
          <!-- Page Title-->
          <div class="page-heading">
            <h6 class="mb-0">{{ detail.service.name }}</h6>
          </div>
          <!-- Navbar Toggler-->
          <div
            @click="toggleNav()"
            class="navbar--toggler"
            id="affanNavbarToggler"
          >
            <span class="d-block"></span><span class="d-block"></span
            ><span class="d-block"></span>
          </div>
        </div>
        <SideBar_Nav />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar_Nav from "./SideBar.vue";
export default {
  components: { SideBar_Nav },
  name: "Header_back_arrow",
  props: ["detail"],
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      document.getElementById("sidenavWrapper").classList.add("nav-active");
      document.getElementById("overlay").classList.add("active");
    },
  },
};
</script>

<style>
</style>