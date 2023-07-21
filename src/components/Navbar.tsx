import Image from "next/image";
import Link from "next/link";

import CartIcon from "@/components/CartIcon";
import Menu from "@/components/Menu";

const Navbar = () => {
  const user = true;
  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* LIFT LINKS  */}
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO  */}
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href="/">Pizzo</Link>
      </div>
      {/* Mobile Menu  */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links  */}
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <div className="top-3 flex cursor-pointer items-center gap-2 rounded-md bg-orange-300 px-1 md:absolute lg:static">
          <Image src="/phone.png" alt="image" width={20} height={20} />
          <span>+91 9876543210</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
