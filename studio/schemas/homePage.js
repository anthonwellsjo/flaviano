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
      name: 'mobileHeaderText',
      title: 'Mobile Header Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'quoteBelowCarouselText',
      title: 'Quote Below Carousel Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'quoteHeaderTextEng',
      title: 'Quote Header Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'mobileHeaderTextEng',
      title: 'Mobile Header Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'quoteBelowCarouselTextEng',
      title: 'Quote Below Carousel Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'contactImg',
      title: 'Contact Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
  ]
}