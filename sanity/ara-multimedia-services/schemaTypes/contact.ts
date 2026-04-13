export default {
  name: 'contact',
  title: 'Contacto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ej: ¿LISTO PARA TU EVOLUCIÓN DIGITAL?',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      description: 'Ej: Cuéntanos sobre tu proyecto y te enviaremos una propuesta gratuita en menos de 24 horas.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'emailPlaceholder',
      title: 'Placeholder del Email',
      type: 'string',
      initialValue: 'Tu correo electrónico',
    },
    {
      name: 'messagePlaceholder',
      title: 'Placeholder del Mensaje',
      type: 'string',
      initialValue: 'Cuéntanos sobre tu proyecto...',
    },
    {
      name: 'buttonText',
      title: 'Texto del Botón',
      type: 'string',
      initialValue: 'Quiero mi propuesta',
    },
    {
      name: 'pulse',
      title: 'ARA Pulse Widget',
      type: 'object',
      fields: [
        {
          name: 'projects',
          title: 'Proyectos en desarrollo',
          type: 'string',
          initialValue: '+12',
        },
        {
          name: 'growth',
          title: 'Crecimiento promedio',
          type: 'string',
          initialValue: '+340%',
        },
        {
          name: 'response',
          title: 'Tiempo de respuesta',
          type: 'string',
          initialValue: '< 2h',
        },
      ],
    },
  ],
}
