# ARA Multimedia Services - Next.js + Sanity

Sitio web profesional con CMS headless (Sanity) y despliegue en Netlify.

## 🚀 Tecnologías

- **Next.js 15** - Framework React con Server Components
- **Sanity CMS** - Headless CMS para gestión de contenido
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **TypeScript** - Tipado estático

## 📋 Requisitos Previos

1. Node.js 18+ instalado
2. Cuenta en [Sanity.io](https://www.sanity.io/)
3. Cuenta en [Netlify](https://www.netlify.com/)
4. Cuenta en [GitHub](https://github.com/)

## 🛠️ Configuración Local

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=tu-api-token
```

### 3. Obtener Sanity Project ID y Token

1. Ve a [sanity.io/manage](https://www.sanity.io/manage)
2. Crea un nuevo proyecto o selecciona el existente
3. Copia el **Project ID**
4. Ve a **API > Tokens** y crea un nuevo token con permisos de **Editor**

### 4. Configurar Sanity Studio

Instala Sanity CLI globalmente:

```bash
npm install -g @sanity/cli
```

Inicia sesión:

```bash
sanity login
```

### 5. Desplegar Sanity Studio

```bash
cd sanity
sanity deploy
```

Esto creará tu studio en: `https://tu-proyecto.sanity.studio`

### 6. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📦 Estructura del Proyecto

```
ara-multimedia-web/
├── sanity/                 # Sanity Studio
│   ├── schemas/           # Esquemas de contenido
│   ├── sanity.config.ts   # Configuración
│   └── sanity.cli.ts      # CLI config
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── components/    # Componentes React
│   │   ├── layout.tsx     # Layout raíz
│   │   ├── page.tsx       # Página principal
│   │   └── globals.css    # Estilos globales
│   └── lib/               # Utilidades
│       ├── sanity.ts      # Cliente Sanity
│       └── queries.ts     # Consultas GROQ
├── public/                # Archivos estáticos
├── .env.local             # Variables de entorno
├── next.config.js         # Configuración Next.js
├── tailwind.config.ts     # Configuración Tailwind
└── package.json
```

## 📝 Esquemas de Contenido (Sanity)

### Site Config
- Nombre del sitio
- Eslogan
- Logo
- Email, teléfono, WhatsApp
- Redes sociales

### Hero
- Título (línea 1 y 2)
- Subtítulo
- Botones CTA
- Palabras animadas

### Services
- Título
- Descripción
- Icono (FontAwesome)
- Gradiente de color
- Características

### Projects
- Título
- Categoría
- Imagen
- Métrica/Resultado
- Flag para proyecto ARA

### Process Steps
- Número de paso
- Título
- Descripción
- Icono
- Color del gradiente

### Testimonials
- Nombre
- Cargo
- Empresa
- Foto
- Testimonio
- Calificación (1-5)

### About
- Título
- Descripción
- Imagen del equipo
- Estadísticas
- Características/Diferenciadores

## 🚀 Despliegue en Netlify

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/Pagina-Ara-Multimedia-Services.git
git push -u origin main
```

### 2. Importar en Netlify

1. Ve a [app.netlify.com](https://app.netlify.com/)
2. Selecciona **Add new project > Import an existing project**
3. Importa el repositorio `axander96/Pagina-Ara-Multimedia-Services` desde GitHub
4. Netlify detectará `netlify.toml`; configura las variables de entorno:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
  - `RESEND_API_KEY`
5. Haz clic en **Deploy site**

### 3. Configurar Webhook de Revalidación (Opcional)

La web consulta Sanity y se revalida cada 10 segundos. Para forzar una nueva compilación cuando publiques cambios estructurales:

1. En Netlify, ve a **Project configuration > Build & deploy > Build hooks** y crea un hook
2. En Sanity, ve a **API > Webhooks** y crea un webhook con ese hook
3. Pega la URL del Deploy Hook

### 4. Panel de administración

El panel editable es Sanity Studio, no `admin/index.html` (ese archivo antiguo solo descargaba JSON localmente).

```bash
cd sanity
npm run dev
```

También puedes publicar el Studio con `npm run deploy` desde `sanity/`. Desde el Studio puedes crear y editar proyectos, incluyendo título, categoría, imagen, métrica y orden.

## 🎨 Personalización

### Colores
Edita `tailwind.config.ts`:

```typescript
colors: {
  'ara-blue': '#0066FF',
  'ara-red': '#FF4433',
  'ara-dark': '#003D99',
  'ara-gray': '#F5F7FA',
}
```

### Fuentes
Por defecto usa Inter. Para cambiar, edita `layout.tsx`:

```typescript
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})
```

## 📱 Funcionalidades

- ✅ Diseño 100% responsive
- ✅ Animaciones con Framer Motion
- ✅ Typewriter effect en Hero
- ✅ Timeline animado en Proceso
- ✅ Carrusel infinito de testimonios
- ✅ Contadores animados
- ✅ Formulario de contacto
- ✅ WhatsApp flotante
- ✅ Widget ARA Pulse
- ✅ SEO optimizado
- ✅ Carga optimizada de imágenes

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en modo producción
npm start

# Linting
npm run lint

# Deploy Sanity Studio
cd sanity && sanity deploy
```

## 🆘 Solución de Problemas

### Error: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de imágenes de Sanity

Verifica que las variables de entorno `NEXT_PUBLIC_SANITY_PROJECT_ID` y `NEXT_PUBLIC_SANITY_DATASET` estén correctamente configuradas.

### Las animaciones no funcionan

Asegúrate de tener habilitado JavaScript en el navegador.

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta al equipo de desarrollo.

---

**ARA Multimedia Services** - Tu evolución digital en movimiento 🚀
