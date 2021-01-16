export default {
  name: 'babaPage',
  title: 'Baba Page Settings',
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
      name: 'pageText',
      title: 'Page Text',
      type: 'text',
      validation: v => v.required().min(90)    
    },
    {
      name: 'textImg',
      title: 'Small Text Image',
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