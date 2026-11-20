import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#0054A6',
          'imss-blue': '#0054A6',
          'imss-green': '#009640',
          'imss-orange': '#FF6B00',
          'imss-guinda': '#E31C79',
          secondary: '#E31C79',
        }
      }
    }
  }
})
