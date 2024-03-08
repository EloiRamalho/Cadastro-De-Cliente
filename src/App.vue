<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <h1>Meu Sistema</h1>
<br>
 <a href="/cliente/novo">NOVO CLIENTE</a> - 
 <a href="/produto/listar">PRODUTOS</a>
<br><br>
  <RouterView />
</template>

<style scoped>

</style>
