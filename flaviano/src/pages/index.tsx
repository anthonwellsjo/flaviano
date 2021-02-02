import React, { useState } from "react"

import IndexPageDesktopRender from "../components/IndexPage/IndexPageDesktopRender";
import { useViewport } from "../hooks/useViewPort";


const IndexPage = () => {
  const { width } = useViewport();

  if (width > 850) return <IndexPageDesktopRender />;
  return <h1>Mobile</h1>
}

export default IndexPage;


