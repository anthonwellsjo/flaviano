import React, { } from 'react';
import ChiSiamoDesktopRender from '../components/Desktop/Pages/ChiSiamoDesktopRender/ChiSiamoDesktopRender';
import ChiSiamoMobileRender from '../components/Mobile/Pages/ChiSiamo/ChiSiamoMobileRender';
import { useViewport } from '../hooks/useViewPort';

const ChiSiamoPage = () => {

  const { width } = useViewport();

  if (width > 850) return <ChiSiamoDesktopRender />

  return <ChiSiamoMobileRender />

}

export default ChiSiamoPage;