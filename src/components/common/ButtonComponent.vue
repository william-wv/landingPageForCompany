<script setup>
  const props = defineProps({
    title: String,
    style: String,
  })
</script>

<template>
  <Button class="btn" type="submit" :class=style >{{ title }}</Button>
</template>

<style scoped>

button{
  height: 5vh;
}

.blue {
  color: var(--white) !important;
  padding: 5px 5px !important;
  background-color: var(--btns-blue);
}

.red{
  color: var(--White-000) !important;
  padding: 10px 15px;
  background-color: var(--Red-500);
}

.orange{
  color: var(--White-000) !important;
  padding: 10px 15px;
  background-color: var(--Orange-500);
}
</style>