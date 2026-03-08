"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800">
      {/* NAVBAR */}

      <div className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
        <h1 className="text-xl font-semibold">Healthcare AI</h1>

        <Link
          href="/predict"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Try Predictor
        </Link>
      </div>

      {/* HERO SECTION */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            AI-Powered Healthcare Predictions
          </h2>

          <p className="text-gray-600 mb-8">
            Predict treatment outcomes, estimated billing, and hospital stay
            using machine learning models trained on healthcare datasets.
          </p>

          <Link
            href="/predict"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Start Prediction
          </Link>
        </div>

        <div>
          <img
            src="/doctor-ai.png"
            alt="Healthcare AI"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* FEATURES */}

      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-10">
          <h3 className="text-2xl font-semibold mb-10">Platform Features</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">
                Treatment Outcome Prediction
              </h4>
              <p className="text-sm text-gray-600">
                Predict patient recovery outcomes using Random Forest
                classification models.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Hospital Stay Estimation</h4>
              <p className="text-sm text-gray-600">
                Estimate patient hospital stay duration using trained ML
                regression models.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Billing Forecast</h4>
              <p className="text-sm text-gray-600">
                Predict estimated healthcare costs for better hospital planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold mb-4">Try the AI Predictor</h3>

        <p className="text-gray-600 mb-8">
          Enter patient data and get instant predictions powered by machine
          learning.
        </p>

        <Link
          href="/predict"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Launch Predictor
        </Link>
      </div>

      {/* FOOTER */}

      <div className="text-center text-sm text-gray-500 pb-10">
        Healthcare AI Predictor • ML + FastAPI + Next.js
      </div>
    </div>
  );
}
