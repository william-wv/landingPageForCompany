<script setup>
import ButtonComponent from '../common/ButtonComponent.vue';

import Json from '@/data/IconsHomeComp.json';
</script>

<template>
  <main>
    <section class="hero-section text-white py-5 py-md-6">
      <div class="contain">
        <div class="row align-items-center">
          
          <div class="col-lg-6 div-txts">
            <h1 class="display-4 fw-bold mb-4">Transformamos a sua idéia em realidade para o seu negócio!</h1>
            <p class="lead mb-4">realidade para
              Projetamos e desenvolvemos sites personalizados que geram resultados para o seu negócio. Modernos, responsivos e construídos com as tecnologias mais recentes.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-2">
              <ButtonComponent class="btn btn-light text-primary"
              :title="'Veja nossos planos'"
              :style="'white'"
              />
              <ButtonComponent class="btn btn-outline-light" 
              :title="'Entre em contato'"
              :style="'transparent'"
              />
            </div>
          </div>

          <div class="section-cards p-5 col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center">
            <div class="rounded shadow-lg cards-container">
              <div class="cards">
                <div v-for="card in Json" class="card-i" :key="card.id">
                  <i :class=card.i></i>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </main>
</template>


<style scoped>

i{
  font-size: 2rem !important;
}

.hero-section {
  background: linear-gradient(to right, #2563eb, #4338ca);
}

.py-md-6 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

.gap-2 {
  gap: 0.5rem;
}

.contain{
  max-width: 1400px;
  margin: 0 auto;
}


.cards-container {
  padding: 50px 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}


.cards {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
}

.card-i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 2px 4px 6px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

@media (max-width:450px) {
  .cards {
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  }

  .cards-container {
  padding: 50px 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  }

  .div-txts{
    padding: 0 50px;
  }
}

@media (min-width:700px) {
  .div-txts{
    padding: 0 50px;
  }
}
</style>
