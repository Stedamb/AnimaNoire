import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technique',
  title: 'Tecnica',
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
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
