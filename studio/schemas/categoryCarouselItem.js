export default {
  name: 'categoryCarouselItem',
  title: 'Category Carousel Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name:'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        validation: v => v.Required(),
        hotspot: true,
        crop: true
      }
    },
  ],
}
