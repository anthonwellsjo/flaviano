import React, { useState } from "react"

import IndexPageDesktopRender from "../components/IndexPage/IndexPageDesktopRender";
import IndexPageMobileRender from "../components/IndexPage/IndexPageMobileRender";
import { useViewport } from "../hooks/useViewPort";


const IndexPage = () => {
  const { width } = useViewport();

  if (width > 850) return <IndexPageDesktopRender />;
  return <IndexPageMobileRender/>
}

export default IndexPage;


