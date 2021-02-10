import React from 'react';
import MateriePrimeDesktopRender from '../components/Desktop/Pages/MateriePrime/MateriePrimeDesktopRender';
import { useViewport } from '../hooks/useViewPort';

const MateriePrimePage: React.FC = () => {


  const { width } = useViewport();

  if (width > 850) return <MateriePrimeDesktopRender />

  return (<h1>No mobile yet!</h1>)

}

export default MateriePrimePage;