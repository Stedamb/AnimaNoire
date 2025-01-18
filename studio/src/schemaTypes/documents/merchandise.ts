import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'merchandise',
  title: 'Merchandising',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Prezzo',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'link',
      title: 'Collegamento di Acquisto',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Immagine del Prodotto',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Testo Alternativo',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
    },
    prepare(selection) {
      const {title, media, price} = selection
      return {
        title: title,
        subtitle: `$${price}`,
        media: media,
      }
    },
  },
})
