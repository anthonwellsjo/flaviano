export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'categoryCarouselImage',
      title: 'Category Carousel Image',
      type: 'categoryCarouselImage'
    },
    { 
      name: 'categoryParallaxIcon',
      title: 'Category Parallax Icon',
      type: 'categoryParallaxIcon'
    }
  ],
}
