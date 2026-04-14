# 📊 Admin Dashboard

Dashboard administrativo moderno construido con **Angular 17+**, **Angular Material** y **RxJS**. Aplicación standalone con arquitectura escalable, routing con lazy loading y servicios reactivos.

## 🚀 Características

- ✅ **Angular 17+** - Framework moderno con componentes standalone
- ✅ **Angular Material** - Diseño Material 3 integrado
- ✅ **RxJS** - Manejo reactivo del estado con Observables
- ✅ **Routing con Lazy Loading** - Carga dinámica de módulos
- ✅ **Sidebar Navigation** - Navegación lateral responsive
- ✅ **KPI Dashboard** - Métricas e indicadores en tiempo real
- ✅ **CRUD Usuarios** - Gestión completa de usuarios
- ✅ **TypeScript 5+** - Type-safe development
- ✅ **Servicios Inyectables** - Arquitectura con inyección de dependencias

---

## 📁 Estructura del Proyecto

```
src/app/
├── core/
│   ├── services/
│   │   ├── dashboard.service.ts      # Servicio de KPIs y datos
│   │   ├── user.service.ts           # Servicio de gestión de usuarios
│   │   └── notification.service.ts   # Servicio de notificaciones
│   └── models/
│       ├── kpi.model.ts              # Interfaz de KPI
│       └── user.model.ts             # Interfaz de Usuario
├── shared/
│   └── components/
│       ├── kpi-card/                 # Tarjeta de KPI
│       └── page-header/              # Encabezado de página
├── features/
│   ├── dashboard/
│   │   └── dashboard/
│   │       ├── dashboard.ts          # Componente Dashboard
│   │       ├── dashboard.html
│   │       └── dashboard.scss
│   └── users/
│       └── users/
│           ├── users.ts              # Componente Usuarios
│           ├── users.html
│           └── users.scss
├── layout/
│   ├── sidebar/
│   │   ├── sidebar.ts                # Navegación lateral
│   │   ├── sidebar.html
│   │   └── sidebar.scss
│   └── topbar/
│       ├── topbar.ts                 # Barra superior
│       ├── topbar.html
│       └── topbar.scss
├── app.ts                             # Componente raíz
├── app.routes.ts                      # Configuración de rutas
├── app.config.ts                      # Configuración de la app
└── app.scss
```

---

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js 18+
- Angular CLI 17+
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <url-repo>

# 2. Instalar dependencias
npm install

# 3. Instalar Angular Material
ng add @angular/material

# 4. Iniciar servidor de desarrollo
npm start
```

---

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm start                  # Inicia servidor en http://localhost:4200

# Testing
npm test                   # Ejecuta pruebas unitarias con Vitest

# Build
ng build                   # Compila para producción

# Generar componentes
ng generate component <name> --standalone --skip-tests
```

---

## 🎨 Tema y Estilos

**Configuración Material Design en `src/styles.scss`:**

- **Color Primario:** Indigo 700 (`#3f51b5`)
- **Color Acentuado:** Blue A200 (`#03a9f4`)
- **Color de Alerta:** Red (default)
- **Fuente Principal:** Syne (Google Fonts)
- **Densidad:** -1 (compacta)

Variables CSS globales disponibles:
```scss
:root {
  --sidebar-width: 240px;
  --topbar-height: 64px;
}
```

---

## 📊 Servicios Principales

### DashboardService
Gestiona datos de KPIs y métricas de la aplicación.

```typescript
// Recibir KPIs
dashboardService.kpis$.subscribe(kpis => {
  console.log(kpis);
});

// Datos en tiempo real (actualiza cada 5s)
dashboardService.realtimeKpis$.subscribe(kpis => {
  console.log(kpis);
});

// Ventas mensuales
dashboardService.monthlySales$.subscribe(sales => {
  console.log(sales);
});
```

### UserService
Gestión completa de usuarios con operaciones CRUD.

```typescript
// Obtener todos los usuarios
userService.users$.subscribe(users => {
  console.log(users);
});

// Agregar usuario
userService.addUser({
  name: 'Nuevo Usuario',
  email: 'email@example.com',
  role: 'user',
  isActive: true
});

// Actualizar usuario
userService.updateUser('1', { name: 'Nombre Actualizado' });

// Eliminar usuario
userService.deleteUser('1');
```

### NotificationService
Sistema de notificaciones toast.

```typescript
// Notificaciones rápidas
notificationService.success('Operación exitosa');
notificationService.error('Error en la operación');
notificationService.warning('Advertencia');
notificationService.info('Información');

// Notificación personalizada
notificationService.showNotification({
  message: 'Mensaje personalizado',
  type: 'success',
  duration: 3000
});
```

---

## 🗂️ Componentes Principales

### App Component
Componente raíz con layout mat-sidenav que contiene:
- Sidebar (navegación lateral)
- Topbar (barra superior)
- Area de contenido con router-outlet

### Sidebar Component
Navegación con items:
- Dashboard (`/dashboard`)
- Usuarios (`/users`)
- Ventas (`/sales`)
- Reportes (`/reports`)

### Dashboard Feature
Página principal con:
- Tarjetas KPI
- Gráficas de datos
- Indicadores en tiempo real

### Users Feature
Gestión de usuarios con:
- Tabla de usuarios
- Operaciones CRUD
- Búsqueda y filtrado

### PageHeader Component (Shared)
Componente reutilizable de encabezado de página con:
- Título configurable
- Subtítulo opcional
- Ícono personalizable
- Fondo con gradiente

### KpiCard Component (Shared)
Tarjeta para mostrar KPI con:
- Imagen/Ícono
- Valor y etiqueta
- Tendencia (↑/↓)
- Porcentaje de cambio

---

## 🔄 Routing

Configurado con **lazy loading** en `app.routes.ts`:

```
/                 → Redirecciona a /dashboard
/dashboard        → Carga DashboardComponent
/users            → Carga UsersComponent
```

---

## 🧪 Testing

El proyecto incluye tests unitarios con **Vitest**.

```bash
# Ejecutar tests
npm test

# Ejecutar tests en watch mode
ng test --watch

# Cobertura de tests
ng test --coverage
```

**Archivos de test incluidos:**
- `*.service.spec.ts` - Tests de servicios
- `*.spec.ts` - Tests de componentes

---

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "@angular/common": "^17.0.0",
    "@angular/material": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "@angular/router": "^17.0.0",
    "rxjs": "^7.8.0"
  },
  "devDependencies": {
    "@angular/cli": "^17.0.0",
    "typescript": "^5.2.0",
    "vitest": "^0.34.0"
  }
}
```

---

## 🎯 Flujo de Desarrollo

1. **Componentes:** Mantén componentes pequeños y reutilizables
2. **Servicios:** Centraliza lógica en servicios inyectables
3. **Observables:** Usa RxJS para manejo reactivo del estado
4. **Rutas:** Lazy loading para mejorar performance
5. **Testing:** Escribe tests para servicios y componentes

---

## 📝 Convenciones del Código

- **Componentes:** `component-name.ts` (standalone)
- **Servicios:** `service-name.service.ts`
- **Modelos:** `model-name.model.ts`
- **Selectores:** `app-component-name`
- **Imports:** Material, RouterLink, CommonModule al inicio

---

## 🚀 Deploy

### Construcción para Producción

```bash
ng build --configuration production
```

Genera archivos optimizados en `dist/` listos para producción.

---

## 🤝 Contribución

1. Crea una rama para tu feature: `git checkout -b feature/nueva-feature`
2. Commit con mensajes descriptivos: `git commit -m "feat: descripción"`
3. Push a la rama: `git push origin feature/nueva-feature`
4. Abre un Pull Request

---

## 📄 Licencia

MIT License - Libre para usar y modificar

---

## 👨‍💻 Autor

Admin Dashboard v1.0 - Creado con ❤️ usando Angular 17+

---

## 📞 Soporte

Para reportar bugs o sugerencias, crea un issue en el repositorio.

---

**Última actualización:** 14 de abril de 2026


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
