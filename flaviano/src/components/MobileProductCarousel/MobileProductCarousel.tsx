import React from 'react';
// import Image from "gatsby-plugin-sanity-image";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import { useCategoryPreviewQuery } from '../../hooks/queries/useCategoryPreviewQuery';
import { Category, CategoryQuery, Product, ProductQuery } from '../../../types';
import { useProductQuery } from '../../hooks/queries/useProductQuery';
import ProductPreviewMobile from '../ProductPage/ProductPreviewMobile/ProductPreviewMobile';
import Centralizer from '../StructureComponents/Centralizer/Centralizer';

const MobileProductCarousel: React.FC = () => {
  const categoryData: CategoryQuery = useCategoryPreviewQuery();
  const productData: ProductQuery = useProductQuery();

  return (
      <Carousel dynamicHeight width={"100vw"} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} swipeable emulateTouch infiniteLoop autoPlay>
        {categoryData.allSanityCategory.edges.map((e: Category, index: number) => {
          const products = productData.allSanityProduct.edges.filter((p: Product) => p.node.category.id == e.node.id);
          return (
              <div style={{ width: "100vw", backgroundColor:"white"}} key={e.node.id}>
                <Centralizer>
                  <ProductPreviewMobile
                    key={e.node.slug.current}
                    categorySlug={e.node.slug.current}
                    categoryDescription={e.node.description}
                    products={products}
                    title={e.node.title}
                    color={e.node.previewColorBoxColor.hex}
                    img={e.node.categoryParallaxIcon.asset.fluid} />
                </Centralizer>
              </div>
          )
        })}
      </Carousel >
  )
}

export default MobileProductCarousel;

