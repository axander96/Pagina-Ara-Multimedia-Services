export default {
  name: 'service',
  title: 'Servicios',
  type: 'document',
  fields: [
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
      description: 'Ejemplo: fa-code, fa-chart-line, fa-share-nodes',
    },
    {
      name: 'gradient',
      title: 'Gradiente',
      type: 'string',
      options: {
        list: [
          { title: 'Azul a Rojo', value: 'from-ara-blue to-ara-red' },
          { title: 'Rojo a Naranja', value: 'from-ara-red to-orange-500' },
          { title: 'Morado a Rosa', value: 'from-purple-500 to-pink-500' },
          { title: 'Verde a Turquesa', value: 'from-green-500 to-teal-500' },
          { title: 'Amarillo a Naranja', value: 'from-yellow-500 to-orange-500' },
          { title: 'Azul', value: 'from-blue-400 to-blue-600' },
          { title: 'Rojo a Rosa', value: 'from-ara-red to-pink-600' },
        ],
      },
    },
    {
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
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
      subtitle: 'description',
    },
  },
}
