import { GatsbyGraphQLInputObjectType } from "gatsby";

export enum QuoteStyle {
  "header",
  "paragraph-s",
  "paragraph-m",
  "paragraph-l"
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
    title: string
  }
}

export interface CategoryQuery {
  allSanityCategory: {
    edges: Array<Category>
  }
}