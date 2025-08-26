/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "24 Aug 2025",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Abstract Round (Eliminatory) begins.
          </p>
          <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            Teams must submit their abstract through the official website or the provided Google Form.  
            <br />
            Evaluation will be based on innovation, feasibility, SDG alignment, and clarity.
          </p>
        </div>
      ),
    },
    {
      title: "31 Aug 2025",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Abstract Round Ends & Results Declared.
          </p>
          <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            Abstract submission closes at 12:09 AM IST.  
            Shortlisted teams will be announced by 10:59 PM IST.
          </p>
        </div>
      ),
    },
    {
      title: "23 Sep 2025",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Final On-Site Hackathon (6 Hours)
          </p>
          <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            Shortlisted teams participate in a 6-hour hackathon at{" "}
            <span className="font-medium">Sri Sai Ram Institute of Technology, Chennai</span>.
          </p>
          <ul className="list-disc ml-5 mt-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              <strong>Stage 1 – Project Presentation:</strong> 5–7 min per team.
            </li>
            <li>
              <strong>Stage 2 – Improvisation Round:</strong> Teams refine and build prototypes (3–3.5 hrs).
            </li>
            <li>
              <strong>Stage 3 – Business Pitch:</strong> Market feasibility & SDG alignment (5–7 min).
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
