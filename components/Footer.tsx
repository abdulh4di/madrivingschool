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
            </div>

            <div className="flex flex-wrap gap-8 w-full xl:justify-between">
              {/* Quick Links */}
              <div className="flex flex-col gap-2">
                <h3 className="underline font-bold">Quick Links</h3>
                <div className="flex flex-col gap-1">
                  <FooterLink text="About" href="/about" />
                  <FooterLink text="Prices" href="/prices" />
                  <FooterLink text="Reviews" href="/reviews" />
                  <FooterLink text="Contact" href="/contact" />
                  <FooterLink text="Privacy Policy" href="/privacy" />
                  <FooterLink text="Terms and Conditions" href="/terms" />
                </div>
              </div>

              {/* Useful Links */}
              <div className="flex flex-col gap-2">
                <h3 className="underline font-bold">Useful Links</h3>
                <div className="flex flex-col gap-1">
                  <FooterLink
                    text="Show Me Tell Me Questions"
                    href="https://www.gov.uk/government/publications/car-show-me-tell-me-vehicle-safety-questions/car-show-me-tell-me-vehicle-safety-questions"
                    external
                  />
                  <FooterLink
                    text="The Highway Code"
                    href="https://www.gov.uk/guidance/the-highway-code"
                    external
                  />
                  <FooterLink
                    text="Apply for your first provisional driving licence"
                    href="https://www.gov.uk/apply-first-provisional-driving-licence"
                    external
                  />
                  <FooterLink
                    text="Renew your driving licence"
                    href="https://www.gov.uk/renew-driving-licence"
                    external
                  />
                  <FooterLink
                    text="Book your theory test"
                    href="https://www.gov.uk/book-theory-test"
                    external
                  />
                  <FooterLink
                    text="Book your driving test"
                    href="https://www.gov.uk/book-driving-test"
                    external
                  />
                </div>
              </div>

              {/* Get in Touch */}
              <div className="flex flex-col gap-4">
                <h3 className="underline font-bold">Get in Touch</h3>
                <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                  <MdOutlineEmail className="text-4xl text-white bg-black px-2 rounded-full" />
                  <a href="mailto:madrivingnewcastle@outlook.com" className="font-medium">
                    madrivingnewcastle@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                  <FiPhone className="text-4xl text-white bg-black px-2 rounded-full" />
                  <a href="tel:07903356758" className="font-medium">
                    07903 356758
                  </a>
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
  external?: boolean
}

function FooterLink({ text, href, external = false }: FooterLinkProps) {
  return (
    <div>
      <Link
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="inline-flex items-center gap-2"
      >
        <IoIosArrowForward className="text-[rgba(152,0,0,0.43)]" />
        <span className="font-medium">{text}</span>
      </Link>
    </div>
  );
}
