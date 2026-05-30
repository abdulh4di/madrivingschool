"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Menu from "./Menu";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Menu menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <nav className=" absolute top-0 left-0 z-50 w-full mx-auto px-5 py-4.5 sm:px-10 lg:py-5 flex items-center justify-between">
        <a href="/">
          <Image
            src={"/assets/Logo.png"}
            alt=""
            height={100}
            width={100}
            className="w-20 lg:w-25 h-auto"
          />
        </a>
        <div className="flex gap-20">
          <NavLink text="Home" href="/" />
          <NavLink text="About" href="/about" />
          <NavLink text="Prices" href="/prices" />
          <NavLink text="Reviews" href="/reviews" />
          <NavLink text="Contact" href="/contact" />
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
          <HiOutlineMenuAlt2 size={30} className="cursor-pointer md:hidden" />
          <HiOutlineMenuAlt2 size={40} className="cursor-pointer hidden md:block" />
        </button>
      </nav>
    </>
  );
}

interface NavLinkProps {
  text: string;
  href: string;
}

function NavLink({ text, href }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hidden text-[14px] font-sans font-bold hover:text-[#980000] transition-colors duration-300 ease-in-out lg:block ${isActive ? "text-[#980000] underline" : ""}`}
    >
      {text}
    </Link>
  );
}
