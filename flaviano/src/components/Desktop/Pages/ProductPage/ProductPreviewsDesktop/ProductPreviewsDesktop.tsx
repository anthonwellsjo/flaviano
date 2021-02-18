import React from 'react';
import { useCategoryPreviewQuery } from '../../../../../hooks/queries/useCategoryPreviewQuery';
import ProductPreview from '../ProductPreviewDesktop/ProductPreviewDesktop';
import { useProductQuery } from '../../../../../hooks/queries/useProductQuery';
import { Category, Product, ProductQuery, CategoryQuery } from '../../../../../../types';

const ProductPreviewsDesktop = () => {
  const categoryData: CategoryQuery = useCategoryPreviewQuery();
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



export default ProductPreviewsDesktop;