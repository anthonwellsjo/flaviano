import { Link } from 'gatsby';
import React, { useState, useContext, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';
import { PageContext } from '../../../contexts/pageContext';
import classes from './AnimLogoPiccoloMobile.module.css';

const AnimLogoPiccoloMobile: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [page, setPage] = useContext(PageContext);

  const FlowerProps = useSpring({
    reverse: hover,
    to: { transform: "scale(2)" },
    from: { transform: "scale(3)" },
    config: {
      mass: 1,
      friction: 15,
      tension: 100
    }
  });
  const CircleProps = useSpring({
    reverse: hover,
    to: { transform: "scale(0)" },
    from: { transform: "scale(0)" },
    delay: 100,
    config: {
      mass: 5,
      friction: 60,
      tension: 200,
    }
  });


  return (
    <Link to="/">
      <animated.div className={classes.container}>
        <animated.svg style={{ transform: "translateX(-10px) translateY(-50px)" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} width="243" height="235" viewBox="0 0 243 235" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className={classes.logo}>
            <animated.g style={{ ...FlowerProps, transformOrigin: "center", transformBox: "fill-box" }} className={classes.titleFlower}>
              <path id="Vector_29" d="M131.365 107.901C131.365 107.901 134.746 110.335 141.794 105.439C141.794 105.439 135.198 103.362 131.365 107.901Z" fill="#CA8860" />
              <path id="Vector_30" d="M129.065 99.8988C129.065 99.8988 125.89 101.834 130.004 107.874C130.009 107.874 133.327 103.559 129.065 99.8988Z" fill="#D3B9A7" stroke="white" strokeWidth="0.5969" strokeMiterlimit="10" />
            </animated.g>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="84.1096" y1="129.197" x2="160.089" y2="129.197" gradientUnits="userSpaceOnUse">
              <stop stopColor="#009245" />
              <stop offset="0.5264" stopColor="#F2F2F2" />
              <stop offset="1" stopColor="#FF0000" />
            </linearGradient>
          </defs>
        </animated.svg>
      </animated.div>
    </Link>
  )
}

export default AnimLogoPiccoloMobile;