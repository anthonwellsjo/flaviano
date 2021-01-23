export default {
  name: 'homePage',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    {
      name: 'quoteHeaderText',
      title: 'Quote Header Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'quoteBelowCarouselText',
      title: 'Quote Below Carousel Text',
      type: 'text',
      validation: v => v.required()
    },
  ]
}