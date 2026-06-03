import Image from "next/image";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#F3F3F3_0%,#FEF6F7_10.58%,#E99AA3_96.15%)] flex flex-col items-center">
      <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col items-center gap-8">
            {/* Logo, Heading, Social Links */}
            <div className="flex flex-col items-center gap-2">
              <a href="/">
                <Image
                  src={"/assets/Logo.png"}
                  alt=""
                  height={100}
                  width={100}
                  className="w-20 lg:w-25 h-auto"
                />
              </a>
              <h2 className="font-heading text-[40px] text-center md:text-[50px]">
                MA Driving School
              </h2>
              {/* Social Links */}
              <div className="flex items-center justify-center gap-8 w-full">
                <a href="">
                  <FaFacebook className="text-5xl text-black hover:text-[#2e2e2e] transition-colors duration-300 cursor-pointer" />
                </a>
                <a href="">
                  <BiLogoInstagramAlt className="text-6xl text-black hover:text-[#2e2e2e] transition-colors duration-300 cursor-pointer" />
                </a>
                <a href="">
                  <AiFillGoogleCircle className="text-5xl text-black hover:text-[#2e2e2e] transition-colors duration-300 cursor-pointer" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 w-full xl:justify-between">
              {/* Quick Links */}
              <div className="flex flex-col gap-2">
                <h3 className="underline font-bold">Quick Links</h3>
                <div className="flex flex-col gap-1">
                  <FooterLink text="About" href="/about" />
                  <FooterLink text="Prices" href="/" />
                  <FooterLink text="Reviews" href="/" />
                  <FooterLink text="Contact" href="/" />
                  <FooterLink text="Privacy Policy" href="/" />
                  <FooterLink text="Terms and Conditions" href="/" />
                </div>
              </div>

              {/* Useful Links */}
              <div className="flex flex-col gap-2">
                <h3 className="underline font-bold">Useful Links</h3>
                <div className="flex flex-col gap-1">
                  <FooterLink text="Show Me Tell Me Questions" href="/" />
                  <FooterLink text="The Highway Code" href="/" />
                  <FooterLink text="Apply for your first provisional driving licence" href="/" />
                  <FooterLink text="Renew your driving licence" href="/" />
                  <FooterLink text="Book your theory test" href="/" />
                  <FooterLink text="Book your driving test" href="/" />
                </div>
              </div>

              {/* Get in Touch */}
              <div className="flex flex-col gap-4">
                <h3 className="underline font-bold">Get in Touch</h3>
                <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                  <MdOutlineEmail className="text-4xl text-white bg-black px-2 rounded-full" />
                  <span className="font-medium">info@test.com</span>
                </div>
                <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                  <FiPhone className="text-4xl text-white bg-black px-2 rounded-full" />
                  <a href="tel:07903356758" className="font-medium">07903 356758</a>
                </div>
                <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                  <IoLocationOutline className="text-4xl text-white bg-black px-2 rounded-full" />
                  <span className="font-medium">Newcastle upon Tyne</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <span className="flex w-full font-medium justify-center pl-4 pr-4 pb-2">
        Copyright @ 2026 MA Driving School, All Rights Reserved
      </span>
    </footer>
  );
}

interface FooterLinkProps {
  text: string;
  href: string;
}

function FooterLink({ text, href }: FooterLinkProps) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-2">
        <IoIosArrowForward className="text-[rgba(152,0,0,0.43)]" />
        <span className="font-medium">{text}</span>
      </div>
    </Link>
  );
}
