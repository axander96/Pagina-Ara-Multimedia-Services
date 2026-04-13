import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Configuración del Sitio')
        .child(
          S.document()
            .schemaType('siteConfig')
            .documentId('siteConfig')
        ),
      S.listItem()
        .title('Sección Hero')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
        ),
      S.divider(),
      S.documentTypeListItem('service').title('Servicios'),
      S.documentTypeListItem('project').title('Proyectos'),
      S.documentTypeListItem('processStep').title('Pasos del Proceso'),
      S.documentTypeListItem('testimonial').title('Testimonios'),
      S.divider(),
      S.listItem()
        .title('Sobre Nosotros')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Contacto')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),
    ])
