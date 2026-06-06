export default function Privacy() {
  return (
    <div className="w-full py-8 pt-30 md:pt-40 lg:mb-20">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="font-heading text-5xl md:text-6xl mb-3">Privacy Policy</h1>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            At our driving school, we are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. We comply with the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect information in the following ways:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">Contact Forms:</span>
              <span className="text-gray-700">When you submit an inquiry or booking request, we collect your name, email address, phone number, and any additional information you provide.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">Lesson Bookings:</span>
              <span className="text-gray-700">When you book driving lessons, we collect your contact details, date of birth, driving license information, and preferred lesson times.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">Payment Information:</span>
              <span className="text-gray-700">We collect payment details through secure payment processors. We do not store full credit card information.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">Website Usage:</span>
              <span className="text-gray-700">We may collect information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">Communications:</span>
              <span className="text-gray-700">If you contact us via email or phone, we keep records of those communications.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use your personal information for the following purposes:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>To provide driving lessons and confirm bookings</li>
            <li>To send lesson reminders and updates</li>
            <li>To communicate with you about our services</li>
            <li>To process payments and handle invoicing</li>
            <li>To improve our website and services</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To respond to inquiries and support requests</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">4. Legal Basis for Processing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We process your personal information based on:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Contractual necessity:</span>
              <span className="text-gray-700">To fulfill our service agreement with you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Legitimate interests:</span>
              <span className="text-gray-700">To improve our services and communicate with you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Legal obligation:</span>
              <span className="text-gray-700">To comply with UK driving instruction and safety regulations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Consent:</span>
              <span className="text-gray-700">When you opt-in to receive marketing communications</span>
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">5. Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We take data security seriously and implement appropriate technical and organizational measures to protect your information, including:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Encrypted connections (SSL/TLS) for all data transmission</li>
            <li>Secure password protection for accounts</li>
            <li>Regular security assessments and updates</li>
            <li>Limited access to personal data by authorized staff only</li>
            <li>Secure deletion of data when no longer needed</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">6. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We retain your personal information for as long as necessary to provide our services and fulfill legal obligations. Typically:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Booking and lesson information:</span>
              <span className="text-gray-700">Retained for 3 years after your final lesson</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Payment records:</span>
              <span className="text-gray-700">Retained for 6 years for accounting and tax purposes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Communication records:</span>
              <span className="text-gray-700">Retained for 1 year unless needed for ongoing inquiries</span>
            </li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">7. Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell or share your personal information with third parties, except:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Payment processors:</span>
              <span className="text-gray-700">To process payments securely</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Email providers:</span>
              <span className="text-gray-700">To send confirmations and reminders</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">Legal requirements:</span>
              <span className="text-gray-700">If required by law enforcement or regulatory bodies</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            All third parties are contractually obligated to protect your data and use it only for the purposes we specify.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">8. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
            <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
            <li><strong>Restrict processing:</strong> Limit how we use your information</li>
            <li><strong>Data portability:</strong> Receive your data in a portable format</li>
            <li><strong>Withdraw consent:</strong> Opt-out of marketing communications at any time</li>
            <li><strong>Lodge a complaint:</strong> Contact the Information Commissioner's Office (ICO)</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">9. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use cookies to enhance your experience. These are small files stored on your device that help us understand how you use our site. You can disable cookies in your browser settings, though this may affect functionality.
          </p>
        </div>

        {/* Section 10 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by updating the "Last updated" date and, where appropriate, by sending you a notification.
          </p>
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
