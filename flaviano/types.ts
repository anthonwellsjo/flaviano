import { GatsbyGraphQLInputObjectType } from "gatsby";
import { FixedObject, FluidObject } from "gatsby-image";

export enum QuoteStyle {
  "header",
  "paragraph-s",
  "paragraph-m",
  "italic"
}

export interface SanityProduct {
  category: {
    id: string,
    title: string
  },
  description: string,
  priceEur: number,
  slug: {
    current: string
  },
  title: string,
  backGroundColor: {
    hex: string
  },
  id: string,
  conservation: string,
  ingredients: string,
  ingredientsTwo: string,
  conservationEng: string,
  ingredientsEng: string,
  ingredientsTwoEng: string,
  weightGr: number,
  productPhoto: {
    asset: {
      fluid: FluidObject,
      fixed: FixedObject
    }
  },
  productDetailPhoto1: {
    asset: {
      fixed: FixedObject
    }
  },
  productDetailPhoto2: {
    asset: {
      fixed: FixedObject
    }
  },
  productDetailPhoto3: {
    asset: {
      fixed: FixedObject
    }
  },
}

export interface ProductPageDataQuery {
  data: {
    sanityProduct: SanityProduct
  }
}
export interface Product {
  node: SanityProduct
}

export interface ProductQuery {
  allSanityProduct: {
    edges: Array<Product>
  }
}

export interface BabaPageQuery {
  sanityBabaPage: BabaPage
}

export interface BabaPage {
  pageText: string,
  pageTextMobile: string,
  pageTextEng: string,
  pageTextMobileEng: string,
  headerImg: {
    asset: {
      fluid: FluidObject
    }
  }
  textImg: {
    asset: {
      fluid: FluidObject
    }
  }
}

export interface MateriePrimeQuery {
  sanityMateriePrimePage: MateriePrimePage
}

export interface MateriePrimePage {
  albicocceColor: {
    hex: string
  },
  albicocceImg: {
    asset: {
      fluid: FluidObject
    }
  },
  albicocceText: string,
  albicocceTextMobile: string,
  albicocceTextEng: string,
  albicocceTextMobileEng: string,
  lievitoMadreColor: {
    hex: string
  },
  lievitoMadreImg: {
    asset: {
      fluid: FluidObject
    }
  },
  lievitoMadreTextEng: string,
  lievitoMadreTextMobileEng: string,
  limoniColor: {
    hex: string
  },
  limoniImg: {
    asset: {
      fluid: FluidObject
    }
  },
  limoniText: string,
  limoniTextMobile: string,
  limoniTextEng: string,
  limoniTextMobileEng: string,
  melaColor: {
    hex: string
  },
  melaImg: {
    asset: { fluid: FluidObject }
  },
  melaText: string,
  melaTextMobile: string,
  melaTextEng: string,
  melaTextMobileEng: string,
  mieleColor: {
    hex: string
  },
  mieleImg: {
    asset: {
      fluid: FluidObject
    }
  },
  mieleText: string,
  mieleTextMobile: string,
  mieleTextEng: string,
  mieleTextMobileEng: string,
  nocciolaColor: {
    hex: string
  },
  nocciolaImg: {
    asset: {
      fluid: FluidObject
    }
  },
  nocciolaText: string,
  nocciolaTextMobile: string,
  nocciolaTextEng: string,
  nocciolaTextMobileEng: string,
  nociColor: {
    hex: string
  },
  nociImg: {
    asset: {
      fluid: FluidObject
    }
  },
  nociText: string,
  nociTextMobile: string,
  nociTextEng: string,
  nociTextMobileEng: string,
  quoteHeaderText: string,
  quoteHeaderTextEng: string
}

export interface ChiSiamoPageQuery {
  sanityChiSiamoPage: ChiSiamoPage
}

export interface ChiSiamoPage {
  headerImg: {
    asset: {
      fluid: FluidObject
    }
  },
  footerImg: {
    asset: {
      fluid: FluidObject
    }
  },
  pageText: string,
  quoteHeaderText: string
  pageTextEng: string,
  quoteHeaderTextEng: string
}


export interface Category {
  node: {
    categoryParallaxIcon: {
      asset: {
        fluid: FluidObject
      }
    },
    id: string,
    previewColorBoxColor: {
      hex: string
    },
    slug: {
      current: string
    },
    title: string,
    description: string,
    descriptionEng: string,
  }
}

export interface CategoryQuery {
  allSanityCategory: {
    edges: Array<Category>
  }
}

export interface HomePageQuery {
  sanityHomePage: {
    quoteHeaderText: string,
    quoteBelowCarouselText: string,
    mobileHeaderText: string,
    quoteHeaderTextEng: string,
    quoteBelowCarouselTextEng: string,
    mobileHeaderTextEng: string,
    contactImg: {
      asset: {
        fixed: FixedObject
      }
    },
  }
}
export interface ContactPageQuery {
  sanityContattiPage: {
    quoteHeaderText: string,
    quoteHeaderTextEng: string,
  }
}

export interface ContactInfoQuery {
  sanityGeneralSettings: {
    mailFlaviano: string,
    phoneFlaviano: string,
    urlFacebook: string,
    urlInsta: string,
    urlPinterest: string
  }
}
