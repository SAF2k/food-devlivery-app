'use client'

import Image from 'next/image'
import { use, useEffect, useState } from 'react'

interface SliderProps {
    data : {
        id: number,
        title: string,
        image: string,
    }[]
}

const Slider = ({data} : SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
      const interval = setInterval(
        () =>
          setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
        4000,
      );
      return () => clearInterval(interval);
    }, [data.length]);

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col bg-fuchsia-50 md:h-[calc(100vh-9rem)] lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-[#e4e4da] font-bold text-red-500">
        <h1 className="p-4 text-center text-5xl uppercase md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="rounded bg-red-500 px-8 py-4 text-white">
          Order Now
        </button>
      </div>
      {/* Image Container  */}
      <div className="relative w-full flex-1">
        <Image
          src={data[currentSlide].image}
          alt="image"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Slider   