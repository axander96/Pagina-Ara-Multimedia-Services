export default {
  name: 'processStep',
  title: 'Pasos del Proceso',
  type: 'document',
  fields: [
    {
      name: 'stepNumber',
      title: 'Número de Paso',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icono (clase FontAwesome)',
      type: 'string',
      description: 'Ejemplo: fa-search, fa-chess, fa-paint-brush, fa-rocket, fa-chart-line',
    },
    {
      name: 'color',
      title: 'Color del Gradient',
      type: 'string',
      options: {
        list: [
          { title: 'Azul a Rojo', value: 'from-ara-blue to-ara-red' },
          { title: 'Morado a Rosa', value: 'from-purple-500 to-pink-500' },
          { title: 'Verde a Turquesa', value: 'from-green-500 to-teal-500' },
          { title: 'Amarillo a Naranja', value: 'from-yellow-500 to-orange-500' },
          { title: 'Rojo a Azul', value: 'from-ara-red to-ara-blue' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'stepNumber',
    },
    prepare(selection: Record<string, any>) {
      const { title, subtitle } = selection;
      return {
        title: `Paso ${subtitle || '?'}: ${title || 'Sin título'}`,
      }
    },
  },
}
