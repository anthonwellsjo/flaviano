export default {
  name: 'materiePrimePage',
  title: 'Materie Prime Page Settings',
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
    {
      name: 'lievitoMadreText',
      title: 'Lievito Madre Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'lievitoMadreTextEng',
      title: 'Lievito Madre Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'lievitoMadreTextMobile',
      title: 'Lievito Madre Text Mobile',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'lievitoMadreTextMobileEng',
      title: 'Lievito Madre Text Mobile English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'lievitoMadreImg',
      title: 'Lievito Madre Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: "lievitoMadreColor",
      title: "Lievito Madre Color",
      type: 'color',
      validation: Rule => Rule.required()
    },
    {
      name: 'limoniText',
      title: 'Limoni Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'limoniTextEng',
      title: 'Limoni Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'limoniTextMobile',
      title: 'Limoni Text Mobile',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'limoniTextMobileEng',
      title: 'Limoni Text Mobile English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'limoniImg',
      title: 'Limoni Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: "limoniColor",
      title: "Limoni Color",
      type: 'color',
      validation: Rule => Rule.required()
    },
    {
      name: 'melaText',
      title: 'Mela Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'melaTextEng',
      title: 'Mela Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'melaTextMobile',
      title: 'Mela Text Mobile',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'melaTextMobileEng',
      title: 'Mela Text Mobile English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'melaImg',
      title: 'Mela Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: "melaColor",
      title: "Mela Color",
      type: 'color',
      validation: Rule => Rule.required()
    },
    {
      name: 'nociText',
      title: 'Noci Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nociTextEng',
      title: 'Noci Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nociTextMobile',
      title: 'Noci Text Mobile',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nociTextMobileEng',
      title: 'Noci Text Mobile English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nociImg',
      title: 'Noci Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: "nociColor",
      title: "Noci Color",
      type: 'color',
      validation: Rule => Rule.required()
    },
    {
      name: 'nocciolaText',
      title: 'Nocciola Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nocciolaTextEng',
      title: 'Nocciola Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nocciolaTextMobile',
      title: 'Nocciola Text Mobile',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nocciolaTextMobileEng',
      title: 'Nocciola Text Mobile English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'nocciolaImg',
      title: 'Nocciola Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: "nocciolaColor",
      title: "Nocciola Color",
      type: 'color',
      validation: Rule => Rule.required()
    },
    {
      name: 'mieleText',
      title: 'Miele Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'mieleTextEng',
      title: 'Miele Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'mieleTextMobile',
      title: 'Miele Text Mobile',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'mieleTextMobileEng',
      title: 'Miele Text Mobile English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'mieleImg',
      title: 'Miele Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: "mieleColor",
      title: "Miele Color",
      type: 'color',
      validation: Rule => Rule.required()
    },
    {
      name: 'albicocceText',
      title: 'Albicocce Text',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'albicocceTextEng',
      title: 'Albicocce Text English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'albicocceTextMobile',
      title: 'Albicocce Text Mobile',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'albicocceTextMobileEng',
      title: 'Albicocce Text Mobile English',
      type: 'text',
      validation: v => v.required()
    },
    {
      name: 'albicocceImg',
      title: 'Albicocce Image',
      type: 'image',
      validation: v => v.required(),
      options:
      {
        crop: true,
        hotspot: true
      }
    },
    {
      name: "albicocceColor",
      title: "Albicocce Color",
      type: 'color',
      validation: Rule => Rule.required()
    }
  ]
}