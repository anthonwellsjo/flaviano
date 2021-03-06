export default {
  name: 'contattiPage',
  title: 'Contatti Page Settings',
  type: 'document',
  fields: [
    {
      name: 'quoteHeaderText',
      title: 'Quote Header Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'quoteHeaderTextEng',
      title: 'Quote Header Text English',
      type: 'text',
      validation: v => v.required()
    },
  ]
}