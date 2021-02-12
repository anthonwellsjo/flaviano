import React from 'react';
import BabaPageDesktopRender from '../../components/Desktop/Pages/Categories/BabaPageDesktopRender';
import BabaPageMobileRender from '../../components/Mobile/Pages/Categories/BabaPageMobileRender';
import { useViewport } from '../../hooks/useViewPort';
const BabaPage: React.FC = () => {
  const { width } = useViewport();

  if (width > 850) return <BabaPageDesktopRender />
  return <BabaPageMobileRender />
}

export default BabaPage;