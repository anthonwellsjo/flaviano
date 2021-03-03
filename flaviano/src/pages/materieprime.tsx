import React from 'react';
import MateriePrimeDesktopRender from '../components/Desktop/Pages/MateriePrime/MateriePrimeDesktopRender';
import MateriePrimeMobileRender from '../components/Mobile/Pages/MateriePrime/MateriePrimeMobileRender';
import MateriePrimeMobileRenderSmallHeight from '../components/Mobile/Pages/MateriePrime/MateriePrimeMobileRenderSmallHeight';
import SEO from '../components/SEO/SEO';
import { useViewport } from '../hooks/useViewPort';

const MateriePrimePage: React.FC = () => {


  const { width, height } = useViewport();

  return (
    <>
      <SEO title="Materie prime pregiate, di qualità delle ricche terre campane" />
      {width > 850 && <MateriePrimeDesktopRender />}
      {height < 680 && width <= 850 && <MateriePrimeMobileRenderSmallHeight />}
      {height >= 680 && width <= 850 && <MateriePrimeMobileRender />}
    </>
  )
}

export default MateriePrimePage;