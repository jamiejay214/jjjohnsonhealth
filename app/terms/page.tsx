export const metadata = {
  title: "Terms of Service | JJ Johnson Health LLC",
};

export default function TermsPage() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-3xl prose prose-gray prose-emerald">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="text-sm text-gray-500">
          Last updated: April 12, 2026
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          1. Agreement to Terms
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          By accessing or using the website and services of JJ Johnson Health
          LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), you agree to be bound by these Terms of Service. If
          you do not agree, please do not use our services.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          2. Services
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          JJ Johnson Health LLC is a licensed health insurance brokerage. We
          help individuals, families, and businesses compare and enroll in
          health insurance plans. We are not an insurance company and do not
          underwrite any policies. All insurance products are offered through
          licensed carriers.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          3. SMS Messaging
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          By opting in to our SMS program, you agree to receive recurring
          marketing text messages from JJ Johnson Health LLC at the mobile
          number you provide. These messages may include health insurance
          quotes, open-enrollment reminders, and promotional offers.
        </p>
        <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
          <li>Message frequency varies.</li>
          <li>Message and data rates may apply.</li>
          <li>
            Reply <strong>STOP</strong> to cancel. Reply <strong>HELP</strong>{" "}
            for help.
          </li>
          <li>
            <strong>
              Consent to receive text messages is not a condition of purchase
              or enrollment.
            </strong>
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          4. No Insurance Advice
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          The information provided through our website and text messages is for
          informational purposes only and does not constitute insurance advice,
          financial advice, or a recommendation to purchase any particular
          insurance product. You should review all plan details and consult with
          a licensed agent before making enrollment decisions.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          5. Accuracy of Information
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          You agree to provide accurate, current, and complete information when
          using our services or opting in to our SMS program. We are not
          responsible for errors resulting from inaccurate information you
          provide.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          6. Limitation of Liability
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          To the maximum extent permitted by law, JJ Johnson Health LLC shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of our services or reliance on
          any information provided.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          7. Changes to Terms
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          We reserve the right to update these Terms at any time. Changes will
          be posted on this page with an updated date. Continued use of our
          services constitutes acceptance of the revised Terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-gray-900">
          8. Contact Us
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          If you have any questions about these Terms, please contact us:
        </p>
        <ul className="mt-2 list-none pl-0 text-gray-700 space-y-1">
          <li>
            <strong>JJ Johnson Health LLC</strong>
          </li>
          <li>Email: johnsonhealthquotes@gmail.com</li>
        </ul>
      </div>
    </section>
  );
}
