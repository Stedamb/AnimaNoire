import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Tattoo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'ruolo',
      title: 'Ruolo',
      type: 'string',
      description: 'Ruolo o posizione dell\'opera',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Link al profilo Instagram',
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Artista',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'technique',
      title: 'Tecnica',
      type: 'reference',
      to: [{type: 'technique'}],
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      artist: 'artist.name',
      media: 'image',
    },
    prepare(selection) {
      const {artist} = selection
      return {...selection, subtitle: artist ? `di ${artist}` : 'Nessun artista specificato'}
    },
  },
})
