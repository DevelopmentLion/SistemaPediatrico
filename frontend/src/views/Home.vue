<template>
  <v-container class="fill-height d-flex align-center justify-center bg-imss-light">
    <v-card class="elevation-6 pa-6" max-width="600">
      <v-card-title class="text-h4 text-center mb-4 imss-blue">
        SICEP
      </v-card-title>

      <v-card-text class="text-center">
        <v-icon size="100" color="imss-blue" class="mb-4">
          mdi-hospital
        </v-icon>

        <p class="text-h6 mb-4 text-grey-darken-2">
          Sistema de Información y Control de Expedientes Pediátricos
        </p>

        <p class="text-body-1 text-grey-darken-1 mb-6">
          Plataforma integral para la gestión de pacientes, citas y tratamientos pediátricos.
        </p>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn color="imss-blue" variant="elevated" size="large" to="/receta-electronica">
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
.bg-imss-light {
  background: linear-gradient(135deg, #E3F2FD 0%, #F3E5F5 100%);
}

.imss-blue {
  color: #0054A6 !important;
}
</style>
