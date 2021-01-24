import React, { useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { useCategoryPreviewQuery } from '../../../hooks/queries/useCategoryPreviewQuery';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import ProductPreview from '../ProductPreview/ProductPreview';
import { useProductQuery } from '../../../hooks/queries/useProductQuery';
import { Category, Product, ProductQuery, CategoryQuery } from '../../../../types';


const ProductPreviews = () => {
  const categoryData: CategoryQuery = useCategoryPreviewQuery();
  let parallax;
  const productData: ProductQuery = useProductQuery();

  return (
    <div>
      {categoryData.allSanityCategory.edges.map((e: Category, index: number) => {
        const products = productData.allSanityProduct.edges.filter((p: Product) => p.node.category.id == e.node.id);
        return (
          <div key={e.node.id}>
            <div style={{ height: "50px" }}></div>
            <ProductPreview
              key={e.node.slug.current}
              categorySlug={e.node.slug.current}
              categoryDescription={e.node.description}
              products={products}
              title={e.node.title}
              color={e.node.previewColorBoxColor.hex}
              img={e.node.categoryParallaxIcon.asset.fluid} />
          </div>
        )
      })}
    </div>

  )
}


export default ProductPreviews;