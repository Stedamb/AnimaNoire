export default {
  name: 'merch',
  title: 'Merchandise',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome Prodotto',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Prezzo',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'T-Shirts', value: 'tshirts' },
          { title: 'Hoodies', value: 'hoodies' },
          { title: 'Accessories', value: 'accessories' },
        ],
      },
    },
    {
      name: 'available',
      title: 'Disponibile',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
