<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ButtonComponent from '../common/ButtonComponent.vue';

const isMobile = ref(window.innerWidth <= 768);

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', checkIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile);
});

const activeItem = ref(null);

const setActive = (item) => {
  activeItem.value = item;
};
</script>

<template>
  <main>
    <!-- Versão MOBILE com MENU LATERAL -->
    <section v-if="isMobile" class="container">
      <div class="d-flex justify-content-between align-items-center p-3">
        <h1 class="text-primary"><span class="text-dark">Soft</span>Company</h1>
        <!-- Botão para abrir o menu lateral -->
        <button class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
          ☰
        </button>
      </div>

      <!-- MENU LATERAL -->
      <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group">
            <li 
              v-for="item in ['Ínicio', 'Sobre', 'Serviços', 'Contato']" 
              :key="item"
              :class="{ active: activeItem === item }"
              @click="setActive(item)"
              class="list-group-item"
            >
              {{ item }}
            </li>
            <li class="list-group-item">
              <ButtonComponent :title="'Faça o seu orçamento'" :style="'blue'" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Versão DESKTOP -->
    <section v-else>
      <div class="p-2 header d-flex justify-content-around">
        <div class="header-div">
          <h1 class="text-primary"><span class="text-dark">Soft</span>Company</h1>
        </div>
        <div class="header-div">
          <nav>
            <ul class="gap-3 d-flex align-items-center">
              <li 
                v-for="item in ['Ínicio', 'Sobre', 'Serviços', 'Contato']" 
                :key="item"
                :class="{ active: activeItem === item }"
                @click="setActive(item)"
                class="li-item"
              >
                {{ item }}
              </li>
              <ButtonComponent :title="'Faça o seu orçamento'" :style="'blue'" />
            </ul> 
          </nav>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
ul, h1 {
  margin: 0;
  padding: 0;
}

.li-item, .list-group-item {
  cursor: pointer;
}

.active {
  text-decoration: underline;
  font-weight: bold;
  color: var(--primary);
}
</style>
