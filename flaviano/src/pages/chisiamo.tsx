import React, { } from 'react';
import ChiSiamoDesktopRender from '../components/Desktop/Pages/ChiSiamoDesktopRender/ChiSiamoDesktopRender';
import ChiSiamoMobileRender from '../components/Mobile/Pages/ChiSiamo/ChiSiamoMobileRender';
import ChiSiamoMobileRenderSmallHeight from '../components/Mobile/Pages/ChiSiamo/ChiSiamoMobileRenderSmallHeight';
import { useViewport } from '../hooks/useViewPort';

const ChiSiamoPage = () => {

  const { width, height } = useViewport();

  if (width > 850) return <ChiSiamoDesktopRender />
  if (height < 680) return <ChiSiamoMobileRenderSmallHeight />
  return <ChiSiamoMobileRender />

}

export default ChiSiamoPage;