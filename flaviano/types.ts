import { GatsbyGraphQLInputObjectType } from "gatsby";

export enum QuoteStyle {
  "header",
  "paragraph-s",
  "paragraph-m",
  "paragraph-l"
}

export interface ProductPageDataQuery {
  data: {
    sanityProduct: {
      id: string,
      description: string,
      ingredients: string,
      conservation: string,
      category: {
        id: string,
        title: string,
        slug: {
          current: string
        }
      },
      title: string,
      priceEur: number,
      slug: {
        current: string
      },
      productPhoto: {
        asset: {
          fluid: any
        }
      }
    }
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
    categoryParallaxIcon: any,
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

