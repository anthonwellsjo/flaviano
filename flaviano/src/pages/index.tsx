import React, { useState } from "react"
import { MediaPort, ScreenSize } from "../../types";

import IndexPageDesktopRender from "../components/Desktop/Pages/IndexPage/IndexPageDesktopRender";
import IndexPageXtremeDesktopRender from "../components/Desktop/Pages/IndexPage/IndexPageXtremeDesktopRender";
import IndexPageMobileRender from "../components/Mobile/Pages/IndexPage/IndexPageMobileRender";
import IndexPageMobileRenderSmallHeight from "../components/Mobile/Pages/IndexPage/IndexPageMobileRenderSmallHeight";
import SEO from "../components/SEO/SEO";
import useGetMediaPort from "../hooks/useGetMediaPort";
import { useViewport } from "../hooks/useViewPort";


const IndexPage = () => {
  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });

  return (
    <>
      <SEO title="Produzione dolciaria artigianale | Biscotti, babà, colombe e panettoni" />
      {mediaPort == MediaPort.xtremeDesktop && <IndexPageXtremeDesktopRender />}
      {mediaPort == MediaPort.desktop && <IndexPageDesktopRender />}
      {mediaPort == MediaPort.mobile && <IndexPageMobileRender />}
      {mediaPort == MediaPort.mobileSmallHeight && <IndexPageMobileRenderSmallHeight />}
      {mediaPort == MediaPort.mobileHorizontal && <h1>horizontal mobile</h1>}
    </>
  )
}

export default IndexPage;


