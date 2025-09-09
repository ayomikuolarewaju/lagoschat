import { FaMapMarkedAlt, FaUserSecret, FaChartLine } from "react-icons/fa";
import { MdOutlineSpeed } from "react-icons/md";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pb-24 pt-36 px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 max-w-3xl">
          Find your perfect store location with storescopeAI
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Harness the power of AI and Google Maps to discover high density
          retail opportunities. Analyze demographics, foot traffic, and
          competitor insights in seconds.
        </p>
        <a href="/info">
          <button className="mt-8 px-8 py-4 cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg hover:scale-105 transition">
            Start Analyzing Locations
          </button>
        </a>
      </section>

      {/* Why Choose storescopeAI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Why Choose storescopeAI
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Because smarter location decisions lead to smarter business growth.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaMapMarkedAlt className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Smart Location Analysis</h3>
              <p className="mt-2 text-gray-600">
                Pinpoint the most profitable retail zones using AI-driven
                insights and real-world data.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaUserSecret className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Competitor Intelligence</h3>
              <p className="mt-2 text-gray-600">
                See how competitors are performing in your target locations and
                identify gaps to exploit.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaChartLine className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
              <p className="mt-2 text-gray-600">
                Get instant, actionable analytics on foot traffic, demographics,
                and local demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section - Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            How storescopeAI Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple 3-step process to unlock your next best store location.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <MdOutlineSpeed className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Search</h3>
              <p className="mt-2 text-gray-600">
                Enter your target area and instantly scan for potential
                opportunities.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <FaMapMarkedAlt className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Analyze</h3>
              <p className="mt-2 text-gray-600">
                Our AI crunches maps, demographics, and competitor data to give
                you clarity.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <FaChartLine className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Decide</h3>
              <p className="mt-2 text-gray-600">
                Confidently select the location with maximum revenue potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to find your next winning location?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join businesses leveraging AI-powered insights to grow faster and
          smarter.
        </p>
        <button className="mt-8 px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition">
          Start Free Today
        </button>
      </section>
    </main>
  );
}
