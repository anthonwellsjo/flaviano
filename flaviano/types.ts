import { GatsbyGraphQLInputObjectType } from "gatsby";

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
        fluid: any
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
  headerImg: {
    asset: {
      fluid: any
    }
  }
  textImg: {
    asset: {
      fixed: any
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
      fluid: any
    }
  },
  albicocceText: string,
  lievitoMadreColor: {
    hex: string
  },
  lievitoMadreImg: {
    asset: {
      fluid: any
    }
  },
  lievitoMadreText: string,
  limoniColor: {
    hex: string
  },
  limoniImg: {
    asset: {
      fluid: any
    }
  },
  limoniText: string,
  melaColor: {
    hex: string
  },
  melaImg: {
    asset: { fluid: any }
  },
  melaText: string,
  mieleColor: {
    hex: string
  },
  mieleImg: {
    asset: {
      fluid: any
    }
  },
  mieleText: string,
  nocciolaColor: {
    hex: string
  },
  nocciolaImg: {
    asset: {
      fluid: any
    }
  },
  nocciolaText: string,
  nociColor: {
    hex: string
  },
  nociImg: {
    asset: {
      fluid: any
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
      fluid: any
    }
  },
  footerImg: {
    asset: {
      fluid: any
    }
  },
  pageText: string,
  quoteHeaderText: string
}


export interface Category {
  node: {
    categoryParallaxIcon: {
      asset: {
        fluid: any
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
    contactImg: {
      asset: {
        fluid: any
      }
    },
  }
}
