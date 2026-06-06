
export default function Terms() {
  return (
    <div className="w-full py-8 pt-30 md:pt-40 lg:mb-20">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="font-heading text-5xl md:text-6xl mb-3">
            Terms & Conditions
          </h1>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions set out the rules and expectations for using our
            website and booking driving lessons with our driving school. By using our
            website or booking a lesson, you agree to these terms.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">2. Driving Lessons</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Driving lessons are provided by a qualified driving instructor and are subject
            to instructor availability, location coverage, and suitable lesson times.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Lesson duration:
              </span>
              <span className="text-gray-700">
                Lesson lengths will be confirmed at the time of booking.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Pick-up location:
              </span>
              <span className="text-gray-700">
                Pick-up and drop-off points must be agreed in advance with the instructor.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Service areas:
              </span>
              <span className="text-gray-700">
                Lessons are available in selected areas only. Please contact us to confirm
                whether we cover your location.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">3. Bookings</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All lesson bookings are subject to availability. A booking is only confirmed
            once the date, time, location, and payment requirements have been agreed.
          </p>

          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>You must provide accurate contact details when making a booking.</li>
            <li>You must be legally entitled to take driving lessons in the UK.</li>
            <li>You may be asked to provide your provisional driving licence details.</li>
            <li>The instructor may refuse a lesson if you are unfit to drive.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">4. Payments</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Payment terms will be confirmed before your lesson. Payments may be required
            in advance or at the time of the lesson, depending on the arrangement with
            the instructor.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Lesson fees:
              </span>
              <span className="text-gray-700">
                Prices may vary depending on lesson type, duration, and any block booking
                offers available at the time.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Block bookings:
              </span>
              <span className="text-gray-700">
                Block bookings must be paid for as agreed and used within a reasonable
                period unless otherwise confirmed.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Failed payments:
              </span>
              <span className="text-gray-700">
                If payment is not received when due, future lessons may be delayed or
                cancelled until payment is made.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">5. Cancellations and Rescheduling</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you need to cancel or rearrange a lesson, you should give as much notice
            as possible. Late cancellations may result in a charge.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Notice period:
              </span>
              <span className="text-gray-700">
                We recommend giving at least 24 to 48 hours’ notice when cancelling or
                rearranging a lesson.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Late cancellation:
              </span>
              <span className="text-gray-700">
                If you cancel at short notice, you may still be charged for the lesson.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Instructor cancellation:
              </span>
              <span className="text-gray-700">
                If the instructor needs to cancel due to illness, vehicle issues, weather,
                or other unavoidable reasons, the lesson will be rearranged.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">6. Pupil Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You are responsible for ensuring that you are ready and legally able to take
            your lesson.
          </p>

          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>You must hold a valid UK provisional or full driving licence.</li>
            <li>You must bring your licence if requested by the instructor.</li>
            <li>You must be fit to drive and not under the influence of alcohol or drugs.</li>
            <li>You must wear suitable footwear and clothing for driving.</li>
            <li>You must follow the instructor’s safety instructions during the lesson.</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">7. Instructor Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The instructor will aim to provide professional, safe, and structured driving
            lessons suited to your experience and progress.
          </p>

          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Lessons will be delivered in a roadworthy and insured vehicle.</li>
            <li>The instructor will provide guidance based on your ability and learning needs.</li>
            <li>The instructor may end a lesson early if there are safety concerns.</li>
            <li>The instructor will treat pupils respectfully and professionally.</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">8. Practical Driving Tests</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Use of the instructor’s vehicle for a practical driving test is subject to
            availability and the instructor’s agreement.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Test readiness:
              </span>
              <span className="text-gray-700">
                The instructor may refuse use of the vehicle for a test if they believe
                you are not ready or there are safety concerns.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                Test booking:
              </span>
              <span className="text-gray-700">
                You are responsible for booking your own driving test unless otherwise
                agreed with the instructor.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#980000] font-semibold min-w-fit">
                DVSA changes:
              </span>
              <span className="text-gray-700">
                We are not responsible for cancellations or changes made by the DVSA.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">9. Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            Refunds will be considered on a case-by-case basis. Any unused prepaid lessons
            may be refunded where appropriate, unless charges apply for late cancellations,
            missed lessons, or other agreed terms.
          </p>
        </div>

        {/* Section 10 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">10. Website Use</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to use this website lawfully and not to misuse, damage, or interfere
            with the website or its functionality.
          </p>

          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>You must not submit false or misleading information.</li>
            <li>You must not attempt to gain unauthorised access to the website.</li>
            <li>You must not copy website content without permission.</li>
            <li>Website content is provided for general information only.</li>
          </ul>
        </div>

        {/* Section 11 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">11. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            We will not be liable for any loss, damage, delay, or inconvenience caused by
            events outside our reasonable control. This includes severe weather, vehicle
            issues, traffic delays, illness, DVSA cancellations, or other unexpected events.
          </p>
        </div>

        {/* Section 12 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">12. Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms and Conditions from time to time. Any changes will
            be posted on this page. By continuing to use our website or services after
            changes are made, you agree to the updated terms.
          </p>
        </div>

        {/* Section 13 */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl mb-4">13. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us
            using the details provided on our website.
          </p>
        </div>
      </div>
    </div>
  );
}
