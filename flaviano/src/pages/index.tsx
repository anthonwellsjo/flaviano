import React, { useState } from "react"

import IndexPageDesktopRender from "../components/Desktop/Pages/IndexPage/IndexPageDesktopRender";
import IndexPageMobileRender from "../components/Mobile/Pages/IndexPage/IndexPageMobileRender";
import IndexPageMobileRenderSmallHeight from "../components/Mobile/Pages/IndexPage/IndexPageMobileRenderSmallHeight";
import SEO from "../components/SEO/SEO";
import { useViewport } from "../hooks/useViewPort";


const IndexPage = () => {
  const { width, height } = useViewport();

  return (
    <>
      <SEO title="Produzione dolciaria artigianale | Biscotti, babà, colombe e panettoni" />
      {height > 860 && <h1>x-treme size window render</h1>}
      {width > 850 && height <=860 && <IndexPageDesktopRender />}
      {height < 680 && width <= 850 && <IndexPageMobileRenderSmallHeight />}
      {height >= 680 && width <= 850 && <IndexPageMobileRender />}
    </>
  )
}

export default IndexPage;


