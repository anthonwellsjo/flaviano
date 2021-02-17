import React from 'react';
import ColombaPageDesktopRender from '../../components/Desktop/Pages/Categories/ColombaPageDesktopRender';
import ColombaPageMobileRender from '../../components/Mobile/Pages/Categories/ColombaPageMobileRender';
import { useViewport } from '../../hooks/useViewPort';

const ColombaPage: React.FC = () => {
  const { width } = useViewport();

  if (width > 850) return <ColombaPageDesktopRender />
  return <ColombaPageMobileRender />

}

export default ColombaPage;