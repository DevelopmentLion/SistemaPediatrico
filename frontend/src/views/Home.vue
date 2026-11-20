<template>
  <v-container class="fill-height d-flex align-center justify-center bg-blue-lighten-5">
    <v-card class="elevation-6 pa-6" max-width="600">
      <v-card-title class="text-h4 text-center mb-4 text-primary">
        SICEP
      </v-card-title>

      <v-card-text class="text-center">
        <v-icon size="100" color="primary" class="mb-4">
          mdi-hospital
        </v-icon>

        <p class="text-h6 mb-4">
          Sistema de Información y Control de Expedientes Pediátricos
        </p>

        <p class="text-body-1 text-grey-darken-1 mb-6">
          Plataforma integral para la gestión de pacientes, citas y tratamientos pediátricos.
        </p>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn color="primary" variant="elevated" size="large" to="/receta-electronica">
          Receta Electrónica
          <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
// Vista principal de bienvenida
</script>

<style scoped>
.bg-blue-lighten-5 {
  background-color: #e3f2fd;
}
</style>
