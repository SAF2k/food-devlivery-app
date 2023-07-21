import Image from "next/image"

const CartPage = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col text-red-500 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Products Container */}
      <div className="flex h-1/2 flex-col justify-center overflow-scroll p-4 lg:h-full lg:w-2/3 lg:px-20 xl:px-40 2xl:w-1/2">
        {/* Single Item  */}
        <div className="mb-4 flex items-center justify-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="mb-4 flex items-center justify-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="mb-4 flex items-center justify-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container  */}
      <div className="bg-[#b5be98] h-1/2 p-4 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">SubTotal (3 Items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Deliver Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">Total (INCL.GST)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="w-1/2 self-end rounded-md bg-red-500 p-3 text-white">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartPage