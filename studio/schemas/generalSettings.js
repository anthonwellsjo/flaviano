export default {
  name: 'generalSettings',
  title: 'General Settings',
  type: 'document',
  fields: [
    {
      name: 'phoneFlaviano',
      title: 'Flaviano Phone Number',
      type: 'string',
      validation: v => v.required()
    },
    {
      name: 'mailFlaviano',
      title: 'Flaviano Mail',
      type: 'email',
      validation: v => v.required()
    },
    {
      name: 'urlFacebook',
      title: 'Facebook URL',
      type: 'url',
      validation: v => v.required()
    },
    {
      name: 'urlInsta',
      title: 'Instagram URL',
      type: 'url',
      validation: v => v.required()
    },
    {
      name: 'urlPinterest',
      title: 'Pinterest URL',
      type: 'url',
      validation: v => v.required()
    },
  ]
}