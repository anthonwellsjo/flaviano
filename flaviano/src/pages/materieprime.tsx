import React from 'react';
import MateriePrimeDesktopRender from '../components/Desktop/Pages/MateriePrime/MateriePrimeDesktopRender';
import MateriePrimeMobileRender from '../components/Mobile/Pages/MateriePrime/MateriePrimeMobileRender';
import MateriePrimeMobileRenderSmallHeight from '../components/Mobile/Pages/MateriePrime/MateriePrimeMobileRenderSmallHeight';
import { useViewport } from '../hooks/useViewPort';

const MateriePrimePage: React.FC = () => {


  const { width, height } = useViewport();

  if (width > 850) return <MateriePrimeDesktopRender />
  if (height < 680) return <MateriePrimeMobileRenderSmallHeight />
  return <MateriePrimeMobileRender />

}

export default MateriePrimePage;