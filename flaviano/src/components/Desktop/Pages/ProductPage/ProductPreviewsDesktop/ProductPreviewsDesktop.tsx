import React from 'react';
import { useCategoryPreviewQuery } from '../../../../../hooks/queries/useCategoryPreviewQuery';
import ProductPreview from '../ProductPreviewDesktop/ProductPreviewDesktop';
import { useProductQuery } from '../../../../../hooks/queries/useProductQuery';
import { Category, Product, ProductQuery, CategoryQuery } from '../../../../../../types';
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';
import ProductPreviewMobile from '../../../../Mobile/Components/ProductPreviewMobile/ProductPreviewMobile';


interface Props {
  mobile?: boolean
}

const ProductPreviewsDesktop = ({ mobile }: Props) => {
  const categoryData: CategoryQuery = useCategoryPreviewQuery();
  const productData: ProductQuery = useProductQuery();

  if (mobile) return (
    <div style={{ position: "relative", left: 0, right: 0 }}>
      <Centralizer space>
        {categoryData.allSanityCategory.edges.map((e: Category, index: number) => {
          const products = productData.allSanityProduct.edges.filter((p: Product) => p.node.category.id == e.node.id);
          return (
            <div key={e.node.id}>
              <ProductPreviewMobile
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
      </Centralizer>
    </div>
  )


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