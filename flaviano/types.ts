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
    title: string
  }
}