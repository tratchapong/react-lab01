// https://codesandbox.io/s/basic-carousel-css-js-y4jfke?file=/main.js

import React, { useEffect, useRef } from "react";

let slidesCount 
let maxLeft
let current

function Carousel() {
  const slidesEl = useRef(null)
  
  useEffect(() => {
    slidesCount = slidesEl.current.childElementCount
    maxLeft = (slidesCount - 1) * 100 * -1;
    current = 0
  }, [])

  function changeSlide(next = true) {
    if (next) {
      current += current > maxLeft ? -100 : current * -1;
    } else {
      current = current < 0 ? current + 100 : maxLeft;
    }
  
    slidesEl.current.style.left = current + "%";
  }
  
  return (
    <div className="carousel w-4/5 h-72 rounded overflow-hidden relative shadow-md ">
      <div className="slides peer absolute top-1/2 left-0 -translate-y-1/2 flex w-full transition-all duration-1000" ref={slidesEl}>
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
        <div className="control prev-slide mx-1 flex justify-center items-center h-10 w-10 rounded-full bg-[#fffa] opacity-50 transition-all duration-300 cursor-pointer" onClick={()=>changeSlide(false)}>
          &#9668;
        </div>
        <div className="control next-slide mx-1 flex justify-center items-center h-10 w-10 rounded-full bg-[#fffa] opacity-50 transition-all duration-300 cursor-pointer" onClick={changeSlide}>
          &#9658;
        </div>
      </div>
    </div>
  );
}

export default Carousel;
