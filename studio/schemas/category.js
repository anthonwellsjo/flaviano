export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
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
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'descriptionEng',
      title: 'Description English',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'categoryCarouselImage',
      title: 'Category Carousel Image',
      type: 'categoryCarouselImage',
      validation: Rule => Rule.required()

    },
    {
      name: 'categoryParallaxIcon',
      title: 'Category Parallax Icon',
      type: 'categoryParallaxIcon',
      validation: Rule => Rule.required()
    },
    {
      name: 'previewColorBoxColor',
      title: 'Preview Color Box Color',
      type: 'color',
      validation: Rule => Rule.required()
    }
  ],
}
