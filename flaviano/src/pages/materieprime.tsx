import React from 'react';
import MateriePrimeDesktopRender from '../components/Desktop/Pages/MateriePrime/MateriePrimeDesktopRender';
import MateriePrimeMobileRender from '../components/Mobile/Pages/MateriePrime/MateriePrimeMobileRender';
import { useViewport } from '../hooks/useViewPort';

const MateriePrimePage: React.FC = () => {


  const { width } = useViewport();

  if (width > 850) return <MateriePrimeDesktopRender />

  return <MateriePrimeMobileRender />

}

export default MateriePrimePage;