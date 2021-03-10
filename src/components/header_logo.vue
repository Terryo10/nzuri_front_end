<template>
  <div class="header-area" id="headerArea">
    <div class="container">
      <!-- Paste your Header Content from here-->
      <!-- # Header Five Layout-->
      <!-- # Copy the code from here ...-->
      <!-- Header Content-->
      <div
        class="header-content header-style-five position-relative d-flex align-items-center justify-content-between"
      >
        <!-- Logo Wrapper-->
        <div class="logo-wrapper">
          <a href="/"><img src="template/img/core-img/logo.png" alt="" /></a>
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
      <!-- # Header Five Layout End-->
    </div>
  </div>
</template>

<script>
import SideBar_Nav from "./SideBar.vue";
export default {
  components: { SideBar_Nav },
  name: "header_logo",
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