import { featuredProducts } from "@/data"
import Image from "next/image"


const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="flex w-max">
        {/* Single Item  */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="flex h-[60vh] w-screen flex-col items-center justify-around p-4 hover:bg-[#e0e0ba] md:w-[50vw] xl:h-[90vh] xl:w-[33vw]"
          >
            {/* Image Container  */}
            {item.img && (
              <div className="relative w-full flex-1 transition-all duration-500 hover:rotate-[25deg]">
                <Image
                  src={item.img}
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* Text Container  */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="rounded-md bg-red-500 p-2 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured