import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { easeElasticInOut } from "d3-ease";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: any) =>
      setPosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

function AnimatedScrunchie() {
  const position = useMousePosition();
  const [props, animate] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const trans1 = (x: number, y: number): any =>
    `translate3d(${x / 35 + 45}px,${y / 35 + 30}px,0)`;
  const trans2 = (x: number, y: number): any =>
    `translate3d(${x / 30 + 10}px,${y / 30}px,0)`;
  const trans3 = (x: number, y: number): any =>
    `translate3d(${x / 65 + 10}px,${y / 65}px,0)`;
  const trans4 = (x: number, y: number): any =>
    `translate3d(${x / 55 + 18}px,${y / 55}px,0)`;
  const { skewX, skewY } = useSpring({
    from: { skewX: 0, skewY: 0 },
    to: async (next) => {
      while (1) {
        await next({ skewX: Math.random() * 2, skewY: Math.random() * -2 });
        await next({ skewX: Math.random() * -2, skewY: Math.random() * 2 });
      }
    },
    config: {
      tension: 400,
      mass: 400,
      easing: easeElasticInOut,
    },
  });

  useEffect(() => {
    animate({ xy: [position.x, position.y] });
  }, [position]);
  return (
    <div className="relative flex items-center content-center justify-center p-10 bg-local bg-center bg-no-repeat md:mx-16 xl:mx-32 lg:order-last">
      <img
        className="z-10 w-9/12 max-w-xs rounded-full shadow-lg sm:max-w-md"
        src="/scrunchie.jpg"
        alt="Knitted Scrunchie next to yellow and blue yarn"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 393.5 394.6"
        className="absolute z-0 w-full "
      >
        <g id="Layer_2" data-name="Layer 2">
          <animated.path
            d="M360 211c-1-23-19-27-43-66-29-46-17-62-36-82-45-45-147-3-153 0-14 6-105 45-108 115-2 29 13 50 42 94 28 41 65 95 112 93 10-1 23-8 49-22 30-16 61-32 92-63 28-28 46-45 45-69z"
            fill="#d0d3ff"
            id="main-blob"
            style={{ transform: props.xy.to(trans3), skewX, skewY }}
          />
          <animated.g
            id="lines"
            fill="none"
            stroke="#bee2e8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: props.xy.to(trans1) }}
          >
            <path d="M230 31l15 -15 M238 31l23-23M246 31l31-30M255 31l22-21M265 31l12-11M274 31l6-5" />
          </animated.g>
          <animated.path
            d="M3 270c-7 8-3 34 16 39 17 5 34-13 33-23-1-15-39-27-49-16z"
            fill="#ddf1ff"
            id="left-blob"
            style={{ transform: props.xy.to(trans4) }}
          />
          <animated.path
            d="M315 72c-9 9-2 40 16 44 16 3 34-14 32-26-1-17-38-29-48-18z"
            fill="#dac1dd"
            id="right-blob"
            style={{ transform: props.xy.to(trans4) }}
          />
          <animated.path
            d="M70 33c-10 2-15 18-10 25 3 3 9 4 10 4 9 0 19-10 17-19-1-6-10-11-17-10z"
            fill="#90d1db"
            id="top-blob"
            style={{ transform: props.xy.to(trans2) }}
          />
          <g
            id="line"
            fill="none"
            stroke="#84b8e3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <animated.path
              style={{ transform: props.xy.to(trans4) }}
              d="M129 329a219 219 0 01-72-19M261 306a272 272 0 01-89 23 253 253 0 01-27 1M349 227c-15 32-44 55-74 72M356 210l-2 4M354 144a105 105 0 015 51"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default AnimatedScrunchie;
