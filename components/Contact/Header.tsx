"use client";
import { IoCaretDownOutline, IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function Header() {
  const [reason, setReason] = useState("");

  return (
    <div className="relative z-10 w-full pt-30 mb-10 md:pt-40">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-8">
        <h2 className="font-heading text-[40px] leading-12 text-center md:text-[50px] md:leadinh-15">
          Get In Touch
        </h2>
        <p className="text-[16px] text-center leading-5 max-w-100 md:max-w-180">
          Whether you’re a complete beginner or looking to build your confidence, I’m here to help.
          Send a message and I’ll get back to you as soon as possible.
        </p>

        <div className="w-full flex flex-col gap-8 xl:flex-row ">
          {/* Contact Form */}
          <div className="flex flex-col gap-8 bg-[#FFFFFF] px-4 py-6 rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] xl:w-[70%]">
            <div>
              {/* Row 1 */}
              <div className="w-full flex flex-col md:flex-row">
                {/* Name Field */}
                <div className="flex-1 flex flex-col gap-2 text-[14px] px-4 py-2">
                  <label htmlFor="" className="font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Your full name"
                    className="p-4 bg-[#F1F0F0] rounded-lg placeholder:text-[#AAAAAA] text-[16px]"
                  />
                </div>

                {/* Email Field */}
                <div className="flex-1 flex flex-col gap-2 text-[14px] px-4 py-2">
                  <label htmlFor="" className="font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="p-4 bg-[#F1F0F0] rounded-lg placeholder:text-[#AAAAAA] text-[16px]"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="w-full flex flex-col md:flex-row">
                {/* Number Field */}
                <div className="flex-1 flex flex-col gap-2 text-[14px] px-4 py-2">
                  <label htmlFor="" className="font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="Phone Number"
                    required
                    placeholder="+44 71 2345 6789"
                    className="p-4 bg-[#F1F0F0] rounded-lg placeholder:text-[#AAAAAA] text-[16px]"
                  />
                </div>

                {/* Reason Field */}
                <div className="flex-1 flex flex-col gap-2 text-[14px] px-4 py-2">
                  <label htmlFor="reason" className="font-medium">
                    Reason for Contact
                  </label>
                  <div className="relative">
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className={`w-full p-4 bg-[#F1F0F0] rounded-lg text-[16px] appearance-none cursor-pointer ${reason === "" ? "text-[#AAAAAA]" : "text-black"}`}
                    >
                      <option value="" disabled>
                        Choose an enquiry type
                      </option>
                      <option value="booking">Book a Lesson</option>
                      <option value="pricing">Pricing Enquiry</option>
                      <option value="general">General Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                    <IoCaretDownOutline className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#AAAAAA]" />
                  </div>
                </div>
              </div>

              {/* Message  Field */}
              <div className="flex-1 flex flex-col gap-2 text-[14px] px-4 py-2">
                <label htmlFor="" className="font-medium">
                  Message
                </label>
                <textarea
                  name="Message"
                  rows={8}
                  required
                  placeholder="Write your message here..."
                  className="p-4 bg-[#F1F0F0] rounded-lg resize-none placeholder:text-[#AAAAAA] text-[16px]"
                />
              </div>
            </div>

            <span className="bg-[#980000] self-center md:self-start  mx-4 w-fit text-white px-8 py-4 rounded-4xl md:w-62.5 md:px-4 hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
              <a href="" className="uppercase font-semibold flex justify-center">
                Start Learning Today
              </a>
            </span>
          </div>

          {/* Contact Details */}
          <div className="bg-[#FFFFFF] flex flex-col items-center text-center xl:items-start xl:text-start gap-4 px-4 py-6 rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] xl:w-[30%] xl:gap-8">
            <h2 className="font-heading text-[40px]">Contact Info</h2>
            <p className="w-[80%]">
              I’m always here to chat! Reach out with any questions or concerns you may have, and
              I’ll be happy to help.
            </p>

            <div className="flex flex-col gap-8 md:flex-row md:justify-between xl:flex-col ">
              <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                <div className="bg-black p-3 rounded-full">
                  <FaRegEnvelope className="text-2xl xl:text-3xl text-white" />
                </div>
                <span className="font-medium xl:text-[20px]">info@test.com</span>
              </div>
              <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                <div className="bg-black p-3 rounded-full">
                  <FiPhoneCall className="text-2xl xl:text-3xl text-white"  />
                </div>
                <span className="font-medium xl:text-[20px]">07123456789</span>
              </div>
              <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                <div className="bg-black p-3 rounded-full">
                  <IoLocationOutline className="text-2xl xl:text-3xl text-white" />
                </div>
                <span className="font-medium xl:text-[20px]">Newcastle upon Tyne</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// xs: 390px
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px

// Container
// className="w-full py-20"

// Row
// className="max-w-7xl mx-auto px-5"

// Container & Row
{
  /* <div className="w-full py-6 md:py-20">
  <div className="max-w-7xl mx-auto px-5">

  </div>
</div> */
}
