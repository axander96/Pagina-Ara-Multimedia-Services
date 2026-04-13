export default {
  name: 'testimonial',
  title: 'Testimonios',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Cargo',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Empresa',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      title: 'Testimonio',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Calificación (1-5)',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image',
    },
  },
}
