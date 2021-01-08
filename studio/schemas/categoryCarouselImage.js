export default {
  name: 'categoryCarouselImage',
  title: 'Category Carousel Image',
  type: 'image',
  validation: v => v.required(),
  options: {
    hotspot: true,
    crop: true
  },
}
