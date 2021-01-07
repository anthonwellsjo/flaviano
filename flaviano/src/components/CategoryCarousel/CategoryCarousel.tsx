import React from 'react';
// import Image from "gatsby-plugin-sanity-image";
import Img from 'gatsby-image'
import { useCategoryImagesQuery } from '../../hooks/queries/useCategoryImagesQuery';

const CategoryCarousel: React.FC = () => {

  const data = useCategoryImagesQuery();

  console.log(data.allSanityCategory.edges[0].node.categoryCarouselImage.asset.fluid);

  return (
      <Img fluid={data.allSanityCategory.edges[0].node.categoryCarouselImage.asset.fluid} alt="Category image" />
    // <Img fluid={data.allSanityCategory.edges.node.categoryCarouselImage.asset.fluid} alt="ok"/>
  )
}

export default CategoryCarousel;

