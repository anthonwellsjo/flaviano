export default {
  name: 'categoryCarouselImage',
  title: 'Category Carousel Image',
  type: 'image',
  options: {
    validation: v => v.required(),
    hotspot: true,
    crop: true
  },
}
