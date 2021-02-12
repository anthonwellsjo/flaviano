import React from 'react';
import BiscottiPageDesktopRender from '../../components/Desktop/Pages/Categories/BiscottiPageDesktopRender';
import BiscottiPageMobileRender from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRender';
import { useViewport } from '../../hooks/useViewPort';


const BiscottiPage: React.FC = () => {
  const { width } = useViewport();

  if (width > 850) return <BiscottiPageDesktopRender />
  return <BiscottiPageMobileRender />


}

export default BiscottiPage;