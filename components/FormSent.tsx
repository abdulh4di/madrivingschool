import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";

export default function FormSent() {
  return (
    <div className="relative z-10 w-full pt-30 mb-10 md:pt-40">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] px-8 py-12 flex flex-col items-center text-center gap-6 max-w-xl w-full">
          <div className="text-[#980000] p-4 rounded-full">
            <BsCheckCircle className="text-6xl" />
          </div>

          <h2 className="font-heading text-[40px] leading-tight">Message Sent!</h2>

          <p className="text-[16px] leading-6 text-gray-600">
            Thank you for getting in touch. Your message has been received and I'll get back to you
            within the next <span className="font-semibold text-black">few days</span>.
          </p>

          <p className="text-[14px] text-gray-400">
            If your enquiry is urgent, feel free to call or email directly.
          </p>

          <Link
            href="/"
            className="bg-[#980000] text-white px-8 py-4 rounded-4xl hover:bg-[#760000] transition-colors duration-300 uppercase font-semibold text-[14px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
