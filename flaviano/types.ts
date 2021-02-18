import { GatsbyGraphQLInputObjectType } from "gatsby";
import { FixedObject, FluidObject } from "gatsby-image";

export enum QuoteStyle {
  "header",
  "paragraph-s",
  "paragraph-m",
  "italic"
}

export interface ProductPageDataQuery {
  data: {
    sanityProduct: Product
  }
}
export interface Product {
  node: {
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
    weightGr: number,
    productPhoto: {
      asset: {
        fluid: FluidObject
      }
    }
  }
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
  lievitoMadreColor: {
    hex: string
  },
  lievitoMadreImg: {
    asset: {
      fluid: FluidObject
    }
  },
  lievitoMadreText: string,
  limoniColor: {
    hex: string
  },
  limoniImg: {
    asset: {
      fluid: FluidObject
    }
  },
  limoniText: string,
  melaColor: {
    hex: string
  },
  melaImg: {
    asset: { fluid: FluidObject }
  },
  melaText: string,
  mieleColor: {
    hex: string
  },
  mieleImg: {
    asset: {
      fluid: FluidObject
    }
  },
  mieleText: string,
  nocciolaColor: {
    hex: string
  },
  nocciolaImg: {
    asset: {
      fluid: FluidObject
    }
  },
  nocciolaText: string,
  nociColor: {
    hex: string
  },
  nociImg: {
    asset: {
      fluid: FluidObject
    }
  },
  nociText: string,
  quoteHeaderText: string
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
    description: string
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
    contactImg: {
      asset: {
        fixed: FixedObject
      }
    },
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
