import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Health Insurance Made Simple
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
            JJ Johnson Health LLC is a licensed health insurance brokerage
            dedicated to helping individuals, families, and businesses find
            affordable, comprehensive health coverage that fits their needs.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/opt-in"
              className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-emerald-800 shadow-lg hover:bg-emerald-50 transition"
            >
              Get a Free Quote
            </Link>
            <a
              href="mailto:johnsonhealthquotes@gmail.com"
              className="rounded-xl border border-emerald-400 px-8 py-4 text-sm font-semibold text-white hover:bg-emerald-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">
            We work with top carriers to find the best rates and coverage for
            your unique situation.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Individual & Family Plans",
                desc: "ACA-compliant plans, short-term coverage, and supplemental options tailored to your budget.",
              },
              {
                title: "Medicare Solutions",
                desc: "Medicare Advantage, Supplement, and Part D plans to ensure you get the care you need.",
              },
              {
                title: "Life Insurance",
                desc: "Term and whole-life policies to protect the people who matter most.",
              },
              {
                title: "Group Health Plans",
                desc: "Affordable group coverage for small businesses and their employees.",
              },
              {
                title: "Dental & Vision",
                desc: "Stand-alone dental and vision plans with competitive rates.",
              },
              {
                title: "Free Consultations",
                desc: "No-obligation quotes and personalized guidance at no cost to you.",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-800">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Find the Right Plan?
          </h2>
          <p className="mt-4 text-gray-600">
            Sign up to receive health insurance tips, open-enrollment
            reminders, and personalized quotes via text message.
          </p>
          <Link
            href="/opt-in"
            className="mt-8 inline-block rounded-xl bg-emerald-700 px-8 py-4 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition"
          >
            Sign Up for SMS Updates
          </Link>
        </div>
      </section>
    </>
  );
}
