import React from 'react';
// import Image from "gatsby-plugin-sanity-image";
import Img from 'gatsby-image'
import { useCategoryImagesQuery } from '../../hooks/queries/useCategoryImagesQuery';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

const CategoryCarousel: React.FC = () => {

  const data = useCategoryImagesQuery();

  console.log(data.allSanityCategory.edges[0]);

  return (
    <Carousel showStatus={false} swipeable emulateTouch infiniteLoop>
      {data.allSanityCategory.edges.map(e => {
        return (
          <div>
            <Img fluid={e.node.categoryCarouselImage.asset.fluid} alt="Category image" />
            <p className="legend">{e.node.title}</p>
          </div>
        )
      })}
    </Carousel >
  )
}

export default CategoryCarousel;

