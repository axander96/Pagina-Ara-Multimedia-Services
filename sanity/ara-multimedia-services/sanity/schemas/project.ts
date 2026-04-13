export default {
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'E-commerce', value: 'E-commerce' },
          { title: 'App Móvil', value: 'App Móvil' },
          { title: 'Campaña Digital', value: 'Campaña Digital' },
          { title: 'Web Corporativa', value: 'Web Corporativa' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Proyecto Propio', value: 'Proyecto Propio' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'metric',
      title: 'Métrica / Resultado',
      type: 'string',
      description: 'Ejemplo: +150% aumento en ventas',
    },
    {
      name: 'isAraProject',
      title: 'Es Proyecto ARA (especial)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
}
