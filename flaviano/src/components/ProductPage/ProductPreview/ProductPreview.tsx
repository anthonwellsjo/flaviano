import React from 'react';
import Img from 'gatsby-image';
import { useCategoryPreviewQuery } from '../../../hooks/queries/useCategoryPreviewQuery';

const ProductPreview: React.FC = () => {
  const categoryData = useCategoryPreviewQuery();

  return (
    <>
      {categoryData.allSanityCategory.edges.map((e: any) => {
        return <Img fixed={e.node.categoryParallaxIcon.asset.fixed} alt="Product image"/>
    
      })}
    </>
  )
}

export default ProductPreview;