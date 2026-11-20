<template>
  <v-app>
    <v-app-bar color="imss-blue" density="comfortable">
      <v-app-bar-title class="text-white font-weight-bold">SICEP</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text" class="text-white">Inicio</v-btn>
      <v-btn to="/receta-electronica" variant="text" class="text-white">Receta Electrónica</v-btn>
      <v-btn to="/soporte-tecnico" variant="text" class="text-white">Soporte Técnico</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="d-flex flex-column">
      <div class="guinda-line"></div>
      <div class="pa-4 text-center bg-white">
        <div class="text-subtitle-2 text-grey-darken-1">
          Sistema de Información y Control de Expedientes Pediátricos
        </div>
        <div class="text-caption text-grey mt-1">
          © 2026 SICEP - Todos los derechos reservados
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
// Componente principal con navegación
</script>

<style scoped>
.guinda-line {
  height: 8px;
  background: linear-gradient(90deg, #E31C79 0%, #C41E3A 100%);
}

.text-white {
  color: white !important;
}
</style>
