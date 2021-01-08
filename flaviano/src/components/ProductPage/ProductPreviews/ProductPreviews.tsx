import React, { useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { useCategoryPreviewQuery } from '../../../hooks/queries/useCategoryPreviewQuery';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import ProductPreview from '../ProductPreview/ProductPreview';
import { useProductQuery } from '../../../hooks/queries/useProductQuery';


const ProductPreviews: React.FC = () => {
  const categoryData = useCategoryPreviewQuery();
  let parallax;

  const productData = useProductQuery();


  return (


    categoryData.allSanityCategory.edges.map((e: any, index: number) => {
      return (
        <>
          <div style={{ height: "50px" }}></div>
          <ProductPreview
            key={e.node.slug.current}
            title={e.node.title}
            img={e.node.categoryParallaxIcon.asset.fixed} />
        </>
      )
    })


  )
}


export default ProductPreviews;