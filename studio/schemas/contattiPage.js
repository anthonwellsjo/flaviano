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
  ]
}