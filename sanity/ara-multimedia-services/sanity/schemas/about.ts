export default {
  name: 'about',
  title: 'Sobre Nosotros',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'text',
      initialValue: 'No creamos solo páginas web, creamos máquinas de ventas digitales',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      initialValue: 'Nacimos de la necesidad de ver negocios locales crecer en el mundo digital. En ARA no somos solo proveedores, somos socios estratégicos en tu evolución digital.',
    },
    {
      name: 'image',
      title: 'Imagen del Equipo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'stats',
      title: 'Estadísticas',
      type: 'object',
      fields: [
        { name: 'projects', title: 'Proyectos Completados', type: 'number', initialValue: 50 },
        { name: 'years', title: 'Años de Experiencia', type: 'number', initialValue: 5 },
        { name: 'satisfaction', title: '% Satisfacción', type: 'number', initialValue: 98 },
      ],
    },
    {
      name: 'features',
      title: 'Características/Diferenciadores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'string' },
          ],
        },
      ],
      initialValue: [
        { title: 'Resultados Rápidos', description: 'Entregas en semanas, no meses' },
        { title: 'Enfoque en Conversiones', description: 'Cada elemento diseñado para vender' },
        { title: 'Calidad Comprobada', description: 'Estándares internacionales' },
        { title: 'Crecimiento Mensual', description: 'Tu proyecto mejora cada mes' },
      ],
    },
  ],
}
