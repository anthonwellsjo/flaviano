import React from 'react';
// import Image from "gatsby-plugin-sanity-image";
import Img from 'gatsby-image'
import { useCategoryCarouselImagesQuery } from '../../../hooks/queries/useCategoryCarouselImagesQuery';
import '../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import { GatsbyGraphQLContext } from 'gatsby-source-sanity/lib-es5/types/gatsby';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

const CategoryCarousel: React.FC = () => {

  const data = useCategoryCarouselImagesQuery();

  console.log(data.allSanityCategory.edges[0]);

  return (
      <Carousel showIndicators showArrows={false} showThumbs={false} showStatus={false} swipeable emulateTouch infiniteLoop autoPlay>
        {data.allSanityCategory.edges.map((e: any) => {
          return (
            <div key={e.node.slug} style={{ maxWidth: "100%", height: "30vw", maxHeight: "400px", overflow: "hidden" }}>
              <Img fluid={e.node.categoryCarouselImage.asset.fluid} alt="Category image" />
              {/* <p className="legend">{e.node.title}</p> */}
            </div>
          )
        })}
      </Carousel >
  )
}

export default CategoryCarousel;

