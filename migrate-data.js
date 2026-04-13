const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'ddona00k',
  dataset: 'production',
  apiVersion: '2024-03-12',
  token: 'sknqmJWQYR8jnlFpUlZtfxKyE879NuPqMzCXS3z1bA8X507ncmZCLipSdL9Rq0ytl777K5XP6LZZfEMVi9vghvyGnYk0HQyUo5013bVRyDR61b0Wp4t8yrTvXbxD7aBcHc1J7jnrwxUuUpPrrzLOFHXbmxWNpTnj5C87Zcs6BqopoBViGYA7',
  useCdn: false,
});

const data = {
  siteConfig: {
    _type: 'siteConfig',
    siteName: 'ARA Multimedia Services',
    slogan: 'Tu evolución digital en movimiento',
    logo: 'ARA',
    email: 'info@aranultimedias.com',
    phone: '+1234567890',
    whatsapp: '1234567890',
  },
  hero: {
    _type: 'hero',
    titleLine1: 'TRANSFORMA TU',
    titleLine2: 'PRESENCIA DIGITAL',
    subtitle: 'Creamos experiencias digitales que convierten visitantes en clientes reales. Desde tu primera web hasta tu app empresarial.',
    ctaPrimary: 'Quiero cotizar mi proyecto',
    ctaSecondary: 'Ver nuestros proyectos',
    animatedWords: ['Desarrollo Web', 'Social Media', 'SEO', 'Apps Móviles'],
  },
  about: {
    _type: 'about',
    title: 'No creamos solo páginas web, creamos máquinas de ventas digitales',
    description: 'Nacimos de la necesidad de ver negocios locales crecer en el mundo digital. En ARA no somos solo proveedores, somos socios estratégicos en tu evolución digital.',
    stats: {
      projects: 50,
      years: 5,
      satisfaction: 98,
    },
    features: [
      { title: 'Resultados Rápidos', description: 'Entregas en semanas, no meses' },
      { title: 'Enfoque en Conversiones', description: 'Cada elemento diseñado para vender' },
      { title: 'Calidad Comprobada', description: 'Estándares internacionales' },
      { title: 'Crecimiento Mensual', description: 'Tu proyecto mejora cada mes' },
    ],
  },
  services: [
    {
      _type: 'service',
      title: 'Desarrollo Web',
      description: 'Sitios que venden mientras duermes. Webs rápidas, seguras y diseñadas para convertir.',
      icon: 'fa-code',
      gradient: 'from-ara-blue to-ara-red',
      features: ['100% Responsivo', 'Optimización velocidad', 'CMS fácil de gestionar'],
      order: 1,
    },
    {
      _type: 'service',
      title: 'Publicidad Digital',
      description: 'Campañas en Meta Ads, Google Ads y TikTok que maximizan cada peso invertido.',
      icon: 'fa-chart-line',
      gradient: 'from-ara-red to-orange-500',
      features: ['ROI medible', 'A/B testing continuo', 'Reportes en tiempo real'],
      order: 2,
    },
    {
      _type: 'service',
      title: 'Social Media',
      description: 'No solo posteamos, construimos comunidades. Estrategia de contenido profesional.',
      icon: 'fa-share-nodes',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Engagement real', 'Calendario estratégico', 'Crisis management'],
      order: 3,
    },
    {
      _type: 'service',
      title: 'Apps Móviles',
      description: 'Lleva tu negocio al bolsillo de tus clientes. Apps nativas iOS/Android o PWA.',
      icon: 'fa-mobile-alt',
      gradient: 'from-green-500 to-teal-500',
      features: ['UX intuitiva', 'Notificaciones push', 'Integración con sistemas'],
      order: 4,
    },
    {
      _type: 'service',
      title: 'SEO',
      description: 'Aparece en la primera página de Google cuando busquen lo que ofreces.',
      icon: 'fa-search',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Palabras clave rentables', 'Link building natural', 'Auditoría mensual'],
      order: 5,
    },
    {
      _type: 'service',
      title: 'Correos Empresariales',
      description: 'Profesionaliza tu comunicación con dominios propios (@tuempresa.com).',
      icon: 'fa-envelope',
      gradient: 'from-blue-400 to-blue-600',
      features: ['Anti-spam garantizado', 'Soporte técnico', 'Escalabilidad'],
      order: 6,
    },
    {
      _type: 'service',
      title: 'Promociones Online',
      description: 'Campañas promocionales, cupones digitales y sistemas de referidos.',
      icon: 'fa-tag',
      gradient: 'from-ara-red to-pink-600',
      features: ['Viralización controlada', 'Métricas de conversión', 'Automatización'],
      order: 7,
    },
  ],
  projects: [
    {
      _type: 'project',
      title: 'Tienda Online Moda',
      category: 'E-commerce',
      metric: '+150% aumento en ventas online',
      isAraProject: false,
      order: 1,
    },
    {
      _type: 'project',
      title: 'App Delivery Local',
      category: 'App Móvil',
      metric: '10K descargas primera semana',
      isAraProject: false,
      order: 2,
    },
    {
      _type: 'project',
      title: 'Restaurante Cadena',
      category: 'Campaña Digital',
      metric: '+300% tráfico en redes sociales',
      isAraProject: false,
      order: 3,
    },
    {
      _type: 'project',
      title: 'Consultora Financiera',
      category: 'Web Corporativa',
      metric: 'Posicionamiento #1 en Google',
      isAraProject: false,
      order: 4,
    },
    {
      _type: 'project',
      title: 'Startup Tecnológica',
      category: 'Branding',
      metric: 'Identidad completa + Web',
      isAraProject: false,
      order: 5,
    },
    {
      _type: 'project',
      title: 'Proyecto ARA',
      category: 'Proyecto Propio',
      metric: 'Nuestra plataforma de gestión',
      isAraProject: true,
      order: 6,
    },
  ],
  processSteps: [
    {
      _type: 'processStep',
      stepNumber: 1,
      title: 'Descubrimiento',
      description: 'Entendemos tu negocio mejor que tú. Análisis de competencia, buyer persona y objetivos claros.',
      icon: 'fa-search',
      color: 'from-ara-blue to-ara-red',
    },
    {
      _type: 'processStep',
      stepNumber: 2,
      title: 'Estrategia',
      description: 'Plan de ataque personalizado. Elegimos las herramientas y canales perfectos para tu industria.',
      icon: 'fa-chess',
      color: 'from-purple-500 to-pink-500',
    },
    {
      _type: 'processStep',
      stepNumber: 3,
      title: 'Creación',
      description: 'Diseño + Código = Magia. Desarrollamos con tecnología de punta y atención al detalle.',
      icon: 'fa-paint-brush',
      color: 'from-green-500 to-teal-500',
    },
    {
      _type: 'processStep',
      stepNumber: 4,
      title: 'Lanzamiento',
      description: 'Tu bebé digital nace. Deploy seguro, pruebas exhaustivas y puesta en marcha.',
      icon: 'fa-rocket',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      _type: 'processStep',
      stepNumber: 5,
      title: 'Crecimiento',
      description: 'Optimización continua. Análisis de datos, mejoras constantes y escalabilidad.',
      icon: 'fa-chart-line',
      color: 'from-ara-red to-ara-blue',
    },
  ],
  testimonials: [
    {
      _type: 'testimonial',
      name: 'Carlos Mendoza',
      position: 'CEO',
      company: 'TechStart',
      quote: 'Ventas aumentaron 80% en 3 meses. ARA transformó completamente nuestra presencia digital.',
      rating: 5,
      order: 1,
    },
    {
      _type: 'testimonial',
      name: 'María González',
      position: 'Dueña',
      company: 'Moda Local',
      quote: 'La app que desarrollaron superó todas nuestras expectativas. Nuestros clientes la adoran.',
      rating: 5,
      order: 2,
    },
    {
      _type: 'testimonial',
      name: 'Roberto Silva',
      position: 'Director',
      company: 'Consultora ABC',
      quote: 'El equipo de ARA entiende perfectamente lo que necesitamos. Resultados medibles desde el primer mes.',
      rating: 5,
      order: 3,
    },
    {
      _type: 'testimonial',
      name: 'Ana López',
      position: 'Marketing Manager',
      company: 'Foodie Co',
      quote: 'Su estrategia de redes sociales duplicó nuestro engagement en semanas. Profesionales de verdad.',
      rating: 5,
      order: 4,
    },
  ],
};

async function migrate() {
  console.log('🚀 Iniciando migración de datos...\n');

  try {
    // Site Config
    console.log('📋 Creando Configuración del Sitio...');
    await client.create(data.siteConfig);
    console.log('✅ Configuración del Sitio creada\n');

    // Hero
    console.log('🎨 Creando Hero...');
    await client.create(data.hero);
    console.log('✅ Hero creado\n');

    // About
    console.log('👥 Creando Sobre Nosotros...');
    await client.create(data.about);
    console.log('✅ Sobre Nosotros creado\n');

    // Services
    console.log('💼 Creando Servicios...');
    for (const service of data.services) {
      await client.create(service);
      console.log(`  ✅ ${service.title}`);
    }
    console.log('');

    // Projects
    console.log('📁 Creando Proyectos...');
    for (const project of data.projects) {
      await client.create(project);
      console.log(`  ✅ ${project.title}`);
    }
    console.log('');

    // Process Steps
    console.log('📊 Creando Pasos del Proceso...');
    for (const step of data.processSteps) {
      await client.create(step);
      console.log(`  ✅ Paso ${step.stepNumber}: ${step.title}`);
    }
    console.log('');

    // Testimonials
    console.log('💬 Creando Testimonios...');
    for (const testimonial of data.testimonials) {
      await client.create(testimonial);
      console.log(`  ✅ ${testimonial.name}`);
    }
    console.log('');

    console.log('🎉 ¡Migración completada exitosamente!');
    console.log('\n📌 Ahora puedes:');
    console.log('   1. Ver el contenido en: https://ara-multimedia-ddona00k.sanity.studio/');
    console.log('   2. Ejecutar: npm run dev');
    console.log('   3. Ver la web en: http://localhost:3000');

  } catch (error) {
    console.error('❌ Error en la migración:', error.message);
    process.exit(1);
  }
}

migrate();
