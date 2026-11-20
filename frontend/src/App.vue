<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable">
      <v-app-bar-title>SICEP</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text">Inicio</v-btn>
      <v-btn to="/receta-electronica" variant="text">Receta Electrónica</v-btn>
      <v-btn to="/soporte-tecnico" variant="text">Soporte Técnico</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// Componente principal con navegación
</script>
