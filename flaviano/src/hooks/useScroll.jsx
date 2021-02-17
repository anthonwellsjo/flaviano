import React, { useEffect, useState } from 'react';

const useScroll = (parallax) => {
  const [currentScroll, setCurrentScroll] = useState(0);

  let timer = null;

  const onScrollEventHandler = () => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      setCurrentScroll(parallax.current.current);
    }, 150);
  }

  useEffect(() => {
    if (!parallax.current || !parallax.current.container) return
    parallax.current.container.onscroll = onScrollEventHandler;

    return (() => {
      parallax.current.container.onscroll = null;
    })
  })

  return [currentScroll];
}

export default useScroll;