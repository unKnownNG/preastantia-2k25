/* eslint-disable @next/next/no-img-element */
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
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700 hover:scale-[1.02] transition-transform">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-3">
            <FaRegLightbulb className="text-yellow-500 text-2xl" /> Round 1 – Abstract Submission
          </h3>
          <p className="text-base text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            Teams kick off their journey by submitting an abstract showcasing
            their innovative idea. This is your gateway to the finals 🚀.
          </p>
          <ul className="space-y-3 text-base text-neutral-800 dark:text-neutral-300">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 text-lg" />
              <span>Submit via official website or Google Form.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCodeBranch className="text-blue-500 mt-1 text-lg" />
              <span>Evaluation: Innovation, feasibility, SDG alignment & clarity.</span>
            </li>
          </ul>
          <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/40 p-4 rounded-xl text-sm text-indigo-700 dark:text-indigo-300 font-semibold border-l-4 border-indigo-400 dark:border-indigo-600">
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
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700 hover:scale-[1.02] transition-transform">
          <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4 flex items-center gap-3">
            <FaUsers className="text-blue-500 text-2xl" /> Round 1 Results 🎉
          </h3>
          <p className="text-base text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            The suspense ends! Shortlisted teams are revealed — only the best
            ideas make it to the finals.
          </p>
          <ul className="space-y-3 text-base text-neutral-800 dark:text-neutral-300">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 text-lg" />
              <span>Submission closes at <strong>12:09 AM IST</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaTrophy className="text-yellow-500 mt-1 text-lg" />
              <span>Results announced by <strong>10:59 PM IST</strong>.</span>
            </li>
          </ul>
          <div className="mt-6 bg-pink-50 dark:bg-pink-900/30 p-4 rounded-xl text-sm text-pink-700 dark:text-pink-300 font-semibold border-l-4 border-pink-400 dark:border-pink-600">
            🎯 Tip: If not shortlisted, don’t stop! You’ll still receive feedback for growth.
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
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700 hover:scale-[1.02] transition-transform">
          <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4 flex items-center gap-3">
            <FaLaptopCode className="text-indigo-500 text-2xl" /> Round 2 – On-Site Hackathon (6 Hrs)
          </h3>
          <p className="text-base text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            The ultimate challenge begins at{" "}
            <span className="font-semibold">Sri Sai Ram Institute of Technology, Chennai</span>.
          </p>
          <ul className="space-y-3 text-base text-neutral-800 dark:text-neutral-300">
            <li className="flex items-start gap-3">
              <FaLaptopCode className="text-indigo-500 mt-1 text-lg" />
              <span><strong>Stage 1 – Project Presentation:</strong> 5–7 min pitch per team.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaUsers className="text-purple-500 mt-1 text-lg" />
              <span><strong>Stage 2 – Improvisation:</strong> Teams refine & build prototype (3–3.5 hrs).</span>
            </li>
            <li className="flex items-start gap-3">
              <FaRegLightbulb className="text-yellow-500 mt-1 text-lg" />
              <span><strong>Stage 3 – Business Pitch:</strong> Market feasibility & SDG alignment.</span>
            </li>
          </ul>
          <div className="mt-6 bg-teal-50 dark:bg-teal-900/40 p-4 rounded-xl text-sm text-teal-700 dark:text-teal-300 font-semibold border-l-4 border-teal-400 dark:border-teal-600">
            🏆 Prizes worth ₹50,000 + incubation support for top teams!
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-20">
      {/* 🔮 Background gradient + floating blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-60 right-1/3 w-40 h-40 bg-pink-300/30 dark:bg-pink-700/20 rounded-full blur-2xl animate-bounce" />

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <h2 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-16 drop-shadow-xl">
          ECE Hackathon Journey
        </h2>

        <Timeline data={data} />
      </div>
    </div>
  );
}