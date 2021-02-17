import React from 'react';
import BabaPageDesktopRender from '../../components/Desktop/Pages/Categories/BabaPageDesktopRender';
import BabaPageMobileRender from '../../components/Mobile/Pages/Categories/BabaPageMobileRender';
import BabaPageMobileRenderSmallHeight from '../../components/Mobile/Pages/Categories/BabaPageMobileRenderSmallHeight';
import { useViewport } from '../../hooks/useViewPort';
const BabaPage: React.FC = () => {
  const { width, height } = useViewport();

  if (width > 850) return <BabaPageDesktopRender />
  if (height < 650) return <BabaPageMobileRenderSmallHeight />
  return <BabaPageMobileRender />
}

export default BabaPage;