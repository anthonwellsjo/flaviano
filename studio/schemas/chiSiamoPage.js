export default {
  name: 'chiSiamoPage',
  title: 'Chi Siamo Page Settings',
  type: 'document',
  fields: [
    {
      name: 'headerImg',
      title: 'Big Header Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: 'quoteHeaderText',
      title: 'Quote Header Text',
      type: 'text',
      validation: v => v.required().min(90)    
    },
    {
      name: 'pageText',
      title: 'Page Text',
      type: 'text',
      validation: v => v.required().min(90)    
    },
    {
      name: 'quoteHeaderTextEng',
      title: 'Quote Header Text English',
      type: 'text',
      validation: v => v.required().min(90)    
    },
    {
      name: 'pageTextEng',
      title: 'Page Text English',
      type: 'text',
      validation: v => v.required().min(90)    
    },
    {
      name: 'footerImg',
      title: 'Footer Image',
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