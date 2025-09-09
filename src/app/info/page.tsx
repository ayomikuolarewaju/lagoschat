



"use client";

import React from "react";
import { AskBot, FormState } from "@/actions/action";
import { useActionState } from "react";

export default function Info() {
  const initialState: FormState = {
    error: {},
  };

  const [state, formAction, isPending] = useActionState(AskBot, initialState);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="pt-42 pb-10">
        
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
          Business Viability Checker
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Enter any <span className="font-semibold">Lagos area name</span> to
          instantly assess its business potential. Our AI will analyze the area
          and email your results.
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">
        <form className="flex flex-col gap-6" action={formAction}>
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition"
            />
            {state?.error.name && (
              <p className="text-red-500 text-sm mt-1">{state.error.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm font-semibold mb-2">
              Your Email
            </label>
            <input
              placeholder="Enter your email"
              type="text"
              name="email"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition"
            />
            {state?.error.email && (
              <p className="text-red-500 text-sm mt-1">{state.error.email}</p>
            )}
          </div>

          {/* Location Input */}
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm font-semibold mb-2">
              Location
            </label>
            <input
              placeholder="Enter a Lagos area (e.g., Ikeja, Lekki, Surulere)"
              type="text"
              name="location"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition"
            />
            {state?.error.location && (
              <p className="text-red-500 text-sm mt-1">
                {state.error.location}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition disabled:bg-blue-200 cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Analyzing..." : "Add Location"}
          </button>
        </form>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-gray-500 text-sm max-w-md">
        <p>
          ⚡ Our system analyzes <span className="font-medium">demographics, 
          competitor density, and foot traffic</span> to estimate the business
          viability of your selected area.
        </p>
      </div>
      </div>
    </div>
  );
}
