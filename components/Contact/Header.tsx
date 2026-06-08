"use client";

import { IoCaretDownOutline, IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { FaRegEnvelope, FaSpinner } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      form.reset();
      router.push("/contact/formsent");
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 w-full pt-30 mb-10 md:pt-40">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-8">
        <h2
          data-aos="fade-up"
          className="font-heading text-[40px] leading-12 text-center md:text-[50px] md:leadinh-15"
        >
          Get In Touch
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[16px] text-center leading-5 max-w-100 md:max-w-180"
        >
          Whether you're a complete beginner or looking to build your confidence, I'm here to help.
          Send a message and I'll get back to you as soon as possible.
        </p>

        <div className="w-full flex flex-col gap-8 xl:flex-row">
          {/* Contact Form */}
          <form
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col gap-8 bg-[#FFFFFF] px-4 py-6 rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] xl:w-[70%]"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="access_key" value="8297d3e7-70f2-4a56-8757-591036e7189e" />
            <div>
              <div className="w-full flex flex-col md:flex-row">
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

              <div className="w-full flex flex-col md:flex-row">
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

            <button
              type="submit"
              className="bg-[#980000] self-center md:self-start mx-4 w-46 text-white px-8 py-4 rounded-4xl md:px-4 hover:bg-[#760000] transition-colors duration-300 cursor-pointer uppercase font-semibold flex justify-center"
            >
              {/* Submit */}
              {loading ? <FaSpinner className="text-2xl animate-spin" /> : "Submit"}
            </button>
          </form>

          {/* Contact Details */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-[#FFFFFF] flex flex-col items-center text-center xl:items-start xl:text-start gap-4 px-6 py-6 rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] xl:w-[30%] xl:gap-8"
          >
            <h2 className="font-heading text-[40px]">Contact Info</h2>
            <p className="w-[80%]">
              I'm always here to chat! Reach out with any questions or concerns you may have, and
              I'll be happy to help.
            </p>

            <div className="flex flex-col gap-8 md:flex-row md:justify-between xl:flex-col">
              <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                <div className="bg-black p-3 rounded-full">
                  <FaRegEnvelope className="text-2xl xl:text-3xl text-white" />
                </div>
                <Link href="mailto:madrivingnewcastle@outlook.com" className="font-medium text-start xl:text-[20px]">
                  madrivingnewcastle <br />@outlook.com
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-full hover:bg-[#0000003f] transition-colors duration-300 cursor-pointer pr-2">
                <div className="bg-black p-3 rounded-full">
                  <FiPhoneCall className="text-2xl xl:text-3xl text-white" />
                </div>
                <Link href="tel:07903356758" className="font-medium xl:text-[20px]">
                  07903 356758
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-full pr-2">
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
