<template>
  <v-app>
    <v-main>
      <v-container class="fill-height d-flex align-center justify-center bg-blue-lighten-5">
        <v-card class="elevation-6 pa-6" max-width="600">
          <v-card-title class="text-h4 text-center mb-4 text-primary">
            Sistema Pediátrico
          </v-card-title>
          
          <v-card-text class="text-center">
            <v-icon size="100" color="primary" class="mb-4">
              mdi-hospital
            </v-icon>
            
            <p class="text-h6 mb-4">
              Bienvenido al Sistema de Gestión Pediátrica
            </p>
            
            <p class="text-body-1 text-grey-darken-1 mb-6">
              Plataforma integral para la gestión de pacientes, citas y tratamientos pediátricos.
            </p>
            
            <v-row class="d-flex justify-center">
              <v-col cols="12" sm="6">
                <v-card class="elevation-2 pa-4" color="white">
                  <v-icon size="48" color="success" class="mb-2">
                    mdi-server-network
                  </v-icon>
                  <div class="text-subtitle-1 font-weight-bold">Backend</div>
                  <div class="text-caption text-grey">Spring Boot + Groovy</div>
                </v-card>
              </v-col>
              
              <v-col cols="12" sm="6">
                <v-card class="elevation-2 pa-4" color="white">
                  <v-icon size="48" color="info" class="mb-2">
                    mdi-web
                  </v-icon>
                  <div class="text-subtitle-1 font-weight-bold">Frontend</div>
                  <div class="text-caption text-grey">Vue 3 + Vuetify</div>
                </v-card>
              </v-col>
            </v-row>
            
            <v-alert type="success" variant="tonal" class="mt-6">
              Sistema configurado y listo para desarrollo
            </v-alert>
          </v-card-text>
          
          <v-card-actions class="justify-center">
            <v-btn color="primary" variant="elevated" size="large">
              Comenzar
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// Componente de bienvenida
</script>

<style scoped>
.bg-blue-lighten-5 {
  background-color: #e3f2fd;
}
</style>
