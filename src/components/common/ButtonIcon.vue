<script setup>

const props = defineProps({
  text: String,
  style: String,
  icon: String,
})
</script>

<template>
  <Button :class=style  class="btnn" >
    {{ text }}  
    <i :class=icon></i>
  </Button>
</template>

<style scoped>


button {
  color: var(--White-000);
  padding: 10px;
  border-radius: 5px;
}

.orange{
  background-color: var(--Orange-500);
}

.blue{
  background-color: var(--Blue-900);
}



</style>