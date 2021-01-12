export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productPhoto',
      title: 'Product Photo',
      type: 'image',
      validation: v => v.required(),
      options: {
        hotspot: true,
        crop: true
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        validation: Rule => Rule.required()
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: Rule => Rule.required(),
      options: {
        layout: 'tags',

      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'conservation',
      title: 'Conservation',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'priceEur',
      title: 'Price Euro €',
      type: 'number',
      validation: n => n.positive().required()
    },
    {
      name: "backGroundColor",
      title: "Background Color",
      type: 'color',
      validation: Rule => Rule.required()
    }
  ],
}
