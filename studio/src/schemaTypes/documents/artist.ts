import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artista',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'surname',
      title: 'Cognome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => `${doc.name}-${doc.surname}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Biografia',
      type: 'blockContent',
      description: 'Biografia completa con formattazione ricca',
    }),
    defineField({
      name: 'ruolo',
      title: 'Ruolo',
      type: 'string',
      description: 'Ruolo o posizione dell\'artista',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Link al profilo Instagram',
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Profilo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Testo Alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Galleria Immagini',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          defineField({
            name: 'alt',
            title: 'Testo Alternativo',
            type: 'string',
          }),
          defineField({
            name: 'caption',
            title: 'Didascalia',
            type: 'string',
          }),
        ],
      }],
    }),
    defineField({
      name: 'techniques',
      title: 'Tecniche',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technique'}}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'surname',
      media: 'mainImage',
    },
  },
})
