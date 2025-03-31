<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './components/layout/HeaderPage.vue';
import FooterPage from './components/layout/FooterPage.vue';
</script>

<template>
  <header>
    <HeaderPage />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterPage/>
  </footer>
</template>

<style scoped></style>
