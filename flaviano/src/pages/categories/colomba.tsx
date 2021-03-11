import React from 'react';
import { MediaPort } from '../../../types';
import ColombaPageDesktopRender from '../../components/Desktop/Pages/Categories/ColombaPageDesktopRender';
import ColombaPageMobileRender from '../../components/Mobile/Pages/Categories/ColombaPageMobileRender';
import SEO from '../../components/SEO/SEO';
import useGetMediaPort from '../../hooks/useGetMediaPort';
import { useViewport } from '../../hooks/useViewPort';
import NotFoundPage from '../404';

const ColombaPage: React.FC = () => {
  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });


  return (
    <>
      <SEO title="Dolce tipico della tradizione pasquale italiana|Prodotto artigianale" />
      {mediaPort == MediaPort.xtremeDesktop && <NotFoundPage />}
      {mediaPort == MediaPort.desktop && <NotFoundPage />}
      {mediaPort == MediaPort.mobile && <NotFoundPage />}
      {mediaPort == MediaPort.mobileSmallHeight && <NotFoundPage />}
      {mediaPort == MediaPort.mobileHorizontal && <NotFoundPage />}


      {/* {width > 850 && <ColombaPageDesktopRender />} */}
      {/* {height < 680 && width <= 850 && <BiscottiPageMobileRenderSmallHeight />} */}
      {/* {height >= 680 && width <= 850 && <BiscottiPageMobileRender />} */}
      {/* {width <= 850 && <ColombaPageMobileRender />} */}
    </>
  )
}

export default ColombaPage;