import React from 'react';
// import Image from "gatsby-plugin-sanity-image";
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby';
import { useCategoryImagesQuery } from '../../hooks/useCategoryImagesQuery';

const CategoryCarousel: React.FC = () => {

  const data = useCategoryImagesQuery();

  console.group(data);


  return (
    <p>{data.allSanityCategory.edges.map(e => e.node.id)}</p>
    // <Img fluid={data.allSanityCategory.edges.node.categoryCarouselImage.asset.fluid} alt="ok"/>
  )
}

export default CategoryCarousel;

