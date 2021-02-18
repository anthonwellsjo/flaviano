import React, { useState } from "react"

import IndexPageDesktopRender from "../components/Desktop/Pages/IndexPage/IndexPageDesktopRender";
import IndexPageMobileRender from "../components/Mobile/Pages/IndexPage/IndexPageMobileRender";
import IndexPageMobileRenderSmallHeight from "../components/Mobile/Pages/IndexPage/IndexPageMobileRenderSmallHeight";
import { useViewport } from "../hooks/useViewPort";


const IndexPage = () => {
  const { width, height } = useViewport();

  if (width > 850) return <IndexPageDesktopRender />;
  if (height < 680) return <IndexPageMobileRenderSmallHeight />;
  return <IndexPageMobileRender />;
}

export default IndexPage;


