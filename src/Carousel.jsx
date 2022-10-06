// https://codesandbox.io/s/basic-carousel-css-js-y4jfke?file=/main.js

import React, { useEffect, useRef } from "react";

function Carousel() {
  const slidesEl = useRef(null);
  const slidesCount = useRef();
  const maxLeft = useRef();
  const activeSlide = useRef(0);
  const autoShow = useRef();

  useEffect(() => {
    slidesCount.current = slidesEl.current.childElementCount;
    maxLeft.current = (slidesCount.current - 1) * 100 * -1;
    activeSlide.current = 0;
    autoShow.current = setInterval(changeSlide, 3000);
    return () => {
      clearInterval(autoShow.current);
    };
  }, []);

  const changeSlide = (next = true) => {
    if (next) {
      activeSlide.current +=
        activeSlide.current > maxLeft.current ? -100 : activeSlide.current * -1;
    } else {
      activeSlide.current =
        activeSlide.current < 0 ? activeSlide.current + 100 : maxLeft;
    }
    slidesEl.current.style.left = activeSlide.current + "%";
  };

  const restart = () => {
    clearInterval(autoShow.current);
    autoShow.current = setInterval(changeSlide, 3000);
  };

  return (
    <div className="carousel w-4/5 h-72 rounded overflow-hidden relative shadow-md ">
      <div
        className="slides peer absolute top-1/2 left-0 -translate-y-1/2 flex w-full transition-all duration-1000"
        ref={slidesEl}
      >
        <img
          src="https://picsum.photos/1280/720?random=1"
          alt="slide "
          className="slide min-w-full min-h-min"
        />
        <img
          src="https://picsum.photos/1280/720?random=2"
          alt="slide "
          className="slide min-w-full min-h-min"
        />
        <img
          src="https://picsum.photos/1280/720?random=3"
          alt="slide "
          className="slide min-w-full min-h-min"
        />
        <img
          src="https://picsum.photos/1280/720?random=4"
          alt="slide "
          className="slide min-w-full min-h-min"
        />
      </div>
      <div className="controls w-full peer-hover:opacity-100 hover:opacity-100 opacity-0 flex absolute top-1/2 left-0 justify-between z-20 transition-all duration-500">
        <div
          className="control prev-slide mx-1 flex justify-center items-center h-10 w-10 rounded-full bg-[#fffa] opacity-50 transition-all duration-300 cursor-pointer"
          onClick={() => {
            changeSlide(false);
            restart();
          }}
        >
          &#9668;
        </div>
        <div
          className="control next-slide mx-1 flex justify-center items-center h-10 w-10 rounded-full bg-[#fffa] opacity-50 transition-all duration-300 cursor-pointer"
          onClick={() => {
            changeSlide();
            restart();
          }}
        >
          &#9658;
        </div>
      </div>
    </div>
  );
}

export default Carousel;
