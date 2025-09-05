"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  FaCheckCircle,
  FaRegLightbulb,
  FaLaptopCode,
  FaUsers,
  FaTrophy,
  FaCodeBranch,
  FaBusinessTime,
} from "react-icons/fa";

export default function TimelineDemo() {
  const data = [
    {
      title: (
        <span className="text-yellow-300 font-semibold drop-shadow-md">
          24 Aug 2025
        </span>
      ),
      content: (
        <div className="bg-black/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-yellow-400 hover:scale-[1.02] transition-transform">
          <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-3">
            <FaRegLightbulb className="text-yellow-400 text-2xl" /> Round 1 – Abstract Submission
          </h3>
          <p className="text-base text-neutral-200 mb-6 leading-relaxed">
            Teams must submit an abstract of their proposed solution in advance.
          </p>
          <ul className="space-y-3 text-base text-neutral-200">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 text-lg" />
              <span>Abstract should clearly define the problem and proposed solution.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCodeBranch className="text-blue-400 mt-1 text-lg" />
              <span>
                Evaluation based on <strong>innovation, feasibility, SDG alignment, and clarity</strong>.
              </span>
            </li>
          </ul>
          <div className="mt-6 bg-indigo-400/10 p-4 rounded-xl text-sm text-indigo-300 font-semibold border-l-4 border-indigo-400/50">
            💡 Pro Tip: Keep your abstract crisp (max 300 words) and problem-focused.
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="text-yellow-300 font-semibold drop-shadow-md">
          31 Aug 2025
        </span>
      ),
      content: (
        <div className="bg-black/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-yellow-400 hover:scale-[1.02] transition-transform">
          <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-3">
            <FaUsers className="text-blue-400 text-2xl" /> Round 1 Results 🎉
          </h3>
          <p className="text-base text-neutral-200 mb-6 leading-relaxed">
            Only shortlisted teams will qualify for the on-site hackathon.
          </p>
          <ul className="space-y-3 text-base text-neutral-200">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 text-lg" />
              <span>Teams evaluated on abstract submissions.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaTrophy className="text-yellow-400 mt-1 text-lg" />
              <span>Selected teams proceed to the 6-hour on-site hackathon.</span>
            </li>
          </ul>
          <div className="mt-6 bg-pink-400/10 p-4 rounded-xl text-sm text-pink-300 font-semibold border-l-4 border-pink-400/50">
            🎯 Tip: Even if not shortlisted, valuable feedback will be provided for growth.
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="text-yellow-300 font-semibold drop-shadow-md">
          23 Sep 2025
        </span>
      ),
      content: (
        <div className="bg-black/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-yellow-400 hover:scale-[1.02] transition-transform">
          <h3 className="text-2xl font-bold text-teal-400 mb-4 flex items-center gap-3">
            <FaLaptopCode className="text-indigo-400 text-2xl" /> Round 2 – On-Site Hackathon (6 Hours)
          </h3>
          <p className="text-base text-neutral-200 mb-6 leading-relaxed">
            The shortlisted teams will compete at{" "}
            <span className="font-semibold">Sri Sai Ram Institute of Technology, Chennai</span>.
          </p>
          <ul className="space-y-3 text-base text-neutral-200">
            <li className="flex items-start gap-3">
              <FaLaptopCode className="text-indigo-400 mt-1 text-lg" />
              <span>
                <strong>Stage 1 – Project Presentation:</strong> 5–7 min pitch per team.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaUsers className="text-purple-400 mt-1 text-lg" />
              <span>
                <strong>Stage 2 – Improvisation Round:</strong> Refine & build prototypes (3–3.5 hrs).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaBusinessTime className="text-yellow-400 mt-1 text-lg" />
              <span>
                <strong>Stage 3 – Business Pitch:</strong> Market feasibility, scalability, and SDG alignment.
              </span>
            </li>
          </ul>
          <div className="mt-6 bg-teal-400/10 p-4 rounded-xl text-sm text-teal-300 font-semibold border-l-4 border-teal-400/50">
            🏆 Prizes worth ₹50,000 + incubation support for top-performing teams!
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full py-20">
      <div className="relative container mx-auto px-6">
        <h2 className="text-center text-5xl font-extrabold text-indigo-400 mb-16">
          PRAEST-Hack 2k25
        </h2>

        {/* Timeline Section */}
        <Timeline data={data} />

        {/* 🔹 Separated Register Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://forms.gle/V7L39o5z3uGxyej36"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-xl font-bold text-black bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.8)] hover:bg-yellow-500 hover:scale-105 transition-transform border-2 border-yellow-300"
          >
            Register Now 🚀
          </a>
        </div>
      </div>
    </div>
  );
}
