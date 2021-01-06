export default {
  name: 'categoryCarouselImage',
  title: 'Category Carousel Image',
  type: 'image',
  options: {
    validation: v => v.required(),
    hotspot: true,
    crop: true
  },
  fields: [
    {
      name:'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
      options:{
        isHighlighted: true,
        validation: t => t.required()
      }
    },
  ],
}
