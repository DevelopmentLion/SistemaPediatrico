# Sistema Pediátrico

Sistema de gestión pediátrica con backend en Spring Boot (Groovy) y frontend en Vue 3 + Vuetify.

## Stack Tecnológico

### Backend
- Java 21
- Groovy 5.1.3
- Gradle 8.5
- Spring Boot 3.2.0
- MariaDB

### Frontend
- Node.js v24.22.1
- npm 11.19.1
- Vue 3
- Vuetify 4.3.0
- Vite

## Estructura del Proyecto

```
SistemaPediatrico/
├── backend/                 # API REST con Spring Boot + Groovy
│   ├── src/
│   │   └── main/
│   │       ├── groovy/      # Código fuente Groovy
│   │       └── resources/   # Configuración
│   ├── build.gradle         # Dependencias Gradle
│   ├── gradlew              # Wrapper Gradle (versión 8.5)
│   └── .env.example         # Ejemplo de variables de entorno
└── frontend/                # Aplicación Vue 3 + Vuetify
    ├── src/
    │   ├── components/      # Componentes Vue
    │   ├── views/           # Páginas/Vistas
    │   ├── plugins/         # Plugins (Vuetify)
    │   └── styles/          # Estilos globales
    ├── package.json         # Dependencias npm
    └── vite.config.js       # Configuración Vite
```

## Configuración del Backend

### 1. Configurar MariaDB

Instalar MariaDB en tu servidor:
```bash
sudo apt update
sudo apt install mariadb-server
sudo systemctl start mariadb
sudo systemctl enable mariadb
```

### 2. Configurar variables de entorno

Crear archivo `.env` en el directorio `backend/`:
```bash
cd backend
cp .env.example .env
# Editar .env con tu contraseña de MariaDB
```

### 3. Instalar dependencias y ejecutar

El proyecto incluye el wrapper de Gradle 8.5, no necesitas instalar Gradle globalmente:

```bash
cd backend
./gradlew build
./gradlew bootRun
```

En Windows:
```bash
cd backend
gradlew.bat build
gradlew.bat bootRun
```

El backend estará disponible en: `http://localhost:8080/api`

## Configuración del Frontend

### 1. Instalar dependencias

```bash
cd frontend
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

### 3. Construir para producción

```bash
npm run build
```

Los archivos de producción estarán en `frontend/dist/`

## Despliegue en Producción

### Backend

```bash
cd backend
export SPRING_PROFILES_ACTIVE=prod
export DB_URL=jdbc:mariadb://tu-servidor:3306/sistema_p pediatrico
export DB_USERNAME=tu_usuario
export DB_PASSWORD=tu_password
./gradlew bootRun
```

### Frontend

```bash
cd frontend
npm run build
# Desplegar el contenido de dist/ en tu servidor web
```

## Endpoints del Backend

- `GET /api/welcome` - Endpoint de bienvenida (test)

## Ambiente de Desarrollo

Para desarrollo local:
- Backend usa `application-dev.yml` (DDL auto-update, SQL logging activado)
- Frontend está configurado con proxy a `http://localhost:8080/api`

## Ambiente de Producción

Para producción:
- Backend usa `application-prod.yml` (DDL validate, SQL logging desactivado)
- Variables de entorno requeridas: `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`

## Nota sobre Gradle

El proyecto usa Gradle 8.5 (incluido como wrapper) para compatibilidad. La versión 9.8.0 tuvo problemas con plugins dañados.

## Correcciones aplicadas

- Backend: Paquete renombrado a `com.sistemap pediatrico` (sin espacios en el nombre del directorio)
- Frontend: Vuetify configurado correctamente con componentes y directivas explícitos
