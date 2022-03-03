<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from "@/components/Footer.vue"
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>WTFBins</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer />

</template>

<style>
@import '@/assets/base.scss';
</style>
