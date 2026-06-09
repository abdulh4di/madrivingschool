"use client";

import Link from "next/link";
import { MdKeyboardArrowRight, MdOutlineClose } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";

const Menu = ({ menuOpen, onClose }: MenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 h-full w-full z-60 bg-[#FFFFFF] px-6 py-4 flex flex-col gap-4 transition-all duration-300 ease-in-out ${
        menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
      }`}
    >
      <div className="flex justify-end">
        <MdOutlineClose
          className="text-3xl cursor-pointer hover:text-[#980000] transition-colors duration-300"
          onClick={onClose}
        />
      </div>
      
      <nav className="flex flex-col gap-8 items-start mt-10">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <MenuLink text="Home" href="/" onClose={onClose} />
          <MenuLink text="About" href="/about" onClose={onClose} />
          <MenuLink text="Pricing" href="/prices" onClose={onClose} />
          <MenuLink text="Reviews" href="/reviews" onClose={onClose} />
          <MenuLink text="Contact" href="/contact" onClose={onClose} />
        </div>
        <span className="bg-[#980000] text-white px-8 py-4 rounded-lg hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
          <a href="/contact" className="uppercase font-semibold flex justify-center">
            Book a Lesson
          </a>
        </span>
      </nav>
    </div>
  );
};

export default Menu;

interface MenuProps {
  menuOpen: boolean;
  onClose: () => void;
}

interface MenuLinkProps {
  text: string;
  href: string;
  onClose: () => void;
}

function MenuLink({ text, href, onClose }: MenuLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="text-[20px] text-gray-600 w-full font-medium py-3 px-2 transition-colors duration-300 hover:text-[#980000] rounded-lg hover:bg-[#efefef] flex items-center justify-between"
    >
      {text}
      <MdKeyboardArrowRight className="text-3xl" />
    </Link>
  );
}
