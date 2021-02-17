import React from 'react';
import BiscottiPageDesktopRender from '../../components/Desktop/Pages/Categories/BiscottiPageDesktopRender';
import BiscottiPageMobileRender from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRender';
import BiscottiPageMobileRenderSmallHeight from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRenderSmallHeight';
import { useViewport } from '../../hooks/useViewPort';


const BiscottiPage = () => {
  const { width, height } = useViewport();

  if (width > 850) return <BiscottiPageDesktopRender />
  if (height < 680) return <BiscottiPageMobileRenderSmallHeight />
  return <BiscottiPageMobileRender />


}

export default BiscottiPage;