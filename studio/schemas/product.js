export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  validation: Rule => Rule.custom(fields => {
    console.log(fields.category._ref);
    if (fields.category._ref == "42ff39b0-35fd-4e32-81eb-cb8a585fd225" && (fields.productDetailPhoto1 == undefined || fields.productDetailPhoto2 == undefined || fields.productDetailPhoto3 == undefined)) return "Babà product requires three product detail photos."
    if (fields.category._ref == "1527d51f-a0be-4c77-9f7e-05adc3533533" && (fields.productDetailPhoto1 == undefined || fields.productDetailPhoto2 == undefined || fields.productDetailPhoto3 == undefined)) return "Biscotti product requires three product detail photos."
    return true;
  }),
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
      name: 'productDetailPhoto1',
      title: 'Product Detail Photo1',
      type: 'image',
      options: {
        hotspot: true,
        crop: true
      },
    },
    {
      name: 'productDetailPhoto2',
      title: 'Product Detail Photo2',
      type: 'image',
      options: {
        hotspot: true,
        crop: true
      },
    },
    {
      name: 'productDetailPhoto3',
      title: 'Product Detail Photo3',
      type: 'image',
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
      name: 'ingredientsTwo',
      title: 'Ingredients Two',
      type: 'text'
    },
    {
      name: 'conservation',
      title: 'Conservation',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'weightGr',
      title: 'Weight in Grams',
      type: 'number',
      validation: n => n.positive().required()
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
