/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function Events() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center font-LogoFont m-8">
        EVENTS
      </h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={960}
                  height={860}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 m-8">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-yellow-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-60 md:max-h-60 pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-80 md:w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 m-8">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-800 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={960}
                  height={360}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-80  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
{
  description: "Ironclad Ideas",
  title: "Paper Presentation",
  src: "/img/events/paper.jpg",
  ctaText: "Register",
  ctaLink: "https://forms.gle/Zo18ubobYpqfMHxE8",
  content: () => {
    return (
      <p>
        📄 <strong>Event Description:</strong>
        <br />
        Ironclad Ideas is a platform for aspiring innovators to showcase their impactful and original
        ideas. 💡 Teams will first submit their abstracts, and shortlisted participants will present
        their work through a professional PowerPoint presentation before a panel of judges. With
        strong communication, technical depth, and creative delivery, only the most ironclad
        ideas will emerge victorious 🏆. 
        <br />
        <br />
        <strong>👥 Participation</strong>
        <br />
        Team Size: Minimum of 3 members and maximum of 4 members per team.
        <br />
        <br />
        <strong>🔄 Event Format</strong>
        <br />
        <strong>Stage 1: Abstract Submission</strong> ✍️
        <br />
        - Teams submit an abstract of their work via the official Google Form. <br />
        - Abstracts will be screened based on originality, clarity, and relevance. <br />
        <br />
        <strong>Stage 2: Paper Presentation (Final Round)</strong> 🎤
        <br />
        - 25 shortlisted teams will advance. <br />
        - Teams are divided into two panels for the final round. <br />
        - Each team gets 6 minutes for their PPT presentation, followed by a short Q&A. <br />
        - Evaluation criteria: technical content, clarity, innovation, and presentation skills. <br />
        <br />
        <strong>📜 Rules:</strong>
        <br />
        1. Team size: 3–4 members. <br />
        2. Abstracts must be submitted within the deadline. ⏳ <br />
        3. Presentation time strictly limited to 6 minutes ⏱️. <br />
        4. PPTs should be clear, concise, and well-structured. <br />
        5. Plagiarism will lead to immediate disqualification 🚫. <br />
        6. Judges’/Organizers’ decision is final. ⚖️ <br />
        <br />
        <strong>📞 Event Coordinators:</strong>
        <br />
        Jeevesh H - 9791150386 <br />
        Gnanasoundari R - 7200461570 <br />
        <br />
        <br />
        <br />
      </p>
    );
  },
}
,
  {
  description: "Ferum Fact",
  title: "Technical Quiz",
  src: "/img/events/quiz.jpg",
  ctaText: "Register",
  ctaLink: "https://forms.gle/Zo18ubobYpqfMHxE8",
  content: () => {
    return (
      <p>
        🧠 <strong>Event Description:</strong>
        <br />
        Ferum Fact is an electrifying technical quiz designed to test knowledge across diverse
        engineering disciplines ⚙️. It challenges participants’ problem-solving skills, speed,
        and logical thinking under pressure, making it the ultimate test of engineering acumen. ⚡
        <br />
        <br />
        <strong>👥 Participation</strong>
        <br />
        Team Size: Minimum of 3 members and maximum of 4 members per team.
        <br />
        <br />
        <strong>🔄 Event Format</strong>
        <br />
        <strong>Round 1: Card of Confidence (Eliminatory Round) 🃏</strong>
        <br />
        - Each team receives two cards: ❤️ (Red Heart) & ♠️ (Black Spade). <br />
        - Confident participants raise ❤️ for answers they know, and ♠️ for guesses. <br />
        - No card = no attempt. <br />
        - Scoring: ❤️ = 4 points, ♠️ = 2 points, no negative marks. <br />
        <br />
        <strong>Round 2: Suspense Round 🔮</strong>
        <br />
        - Shortlisted teams face high-level technical questions. <br />
        - This round focuses on depth of knowledge, reasoning, and quick responses. <br />
        <br />
        <strong>📜 Rules:</strong>
        <br />
        1. Team size: 3–4 members. <br />
        2. Use of mobile phones or electronic gadgets is strictly prohibited 🚫📱. <br />
        3. Any malpractice leads to instant disqualification ⚠️. <br />
        4. Judges’/Organizers’ decision is final ⚖️. <br />
        <br />
        <strong>📞 Event Coordinators:</strong>
        <br />
        Jeevesh H - 9791150386 <br />
        Gnanasoundari R - 7200461570 <br />
        <br />
        <br />
        <br />
      </p>
    );
  },
}
,
{
  description: "Mind Steel",
  title: "Sherlock Holmes Challenge",
  src: "/img/events/sher.jpg",
  ctaText: "Register",
  ctaLink: "https://forms.gle/Zo18ubobYpqfMHxE8",
  content: () => {
    return (
      <p>
        🕵️‍♂️ <strong>Event Description:</strong>
        <br />
        Step into the shoes of Sherlock Holmes in <strong>Mind Steel</strong> 🔍 — a thrilling
        detective-themed mystery challenge. Across two exciting rounds, participants will
        face riddles, puzzles, and a final case investigation filled with hidden clues and
        tricky suspects. With logic, observation, and determination, only those with true
        iron resolve will crack the mystery and claim victory 🏆.
        <br />
        <br />
        <strong>👥 Participation</strong>
        <br />
        Team Size: Minimum of 3 members per team.
        <br />
        <br />
        <strong>🔄 Event Format</strong>
        <br />
        <strong>Round 1: Mind Maze (Riddles & Puzzles) 🧩</strong>
        <br />
        - Teams solve tricky riddles, logic puzzles, and coded clues. <br />
        - Purpose: Elimination round to test quick thinking and problem-solving ⚡. <br />
        <br />
        <strong>Round 2: The Final Case (Mystery Investigation) 🔎</strong>
        <br />
        - A full detective case with suspects, evidence, and misleading clues. <br />
        - Teams must carefully analyze everything and identify the culprit with solid reasoning. <br />
        <br />
        <strong>📜 Rules:</strong>
        <br />
        1. Each team must have a minimum of 3 members 👥. <br />
        2. Mobile phones or external help are strictly prohibited 🚫📱. <br />
        3. Each round will have a fixed time limit ⏳. <br />
        4. Teams must submit final answers in the required format 📝. <br />
        5. Judges’/Organizers’ decision will be final and binding ⚖️. <br />
        <br />
        <strong>📞 Event Coordinators:</strong>
        <br />
        Jeevesh H - 9791150386 <br />
        Gnanasoundari R - 7200461570 <br />
        <br />
        <br />
        <br />
      </p>
    );
  },
}
,
  {
  description: "EPL Auction",
  title: "IPL Auction Challenge",
  src: "/img/events/epl.jpg",
  ctaText: "Register",
  ctaLink: "https://forms.gle/Zo18ubobYpqfMHxE8",
  content: () => {
    return (
      <p>
        🏏 <strong>Event Description:</strong>
        <br />
        Get ready for a thrilling game of bidding and strategy as our department hosts the
        ultimate <strong>EPL – IPL Auction</strong> 🎉. Step into the shoes of franchise owners, manage
        your virtual budget 💰, and build your dream IPL squad. Experience the adrenaline rush
        of a real auction right here on campus! ⚡
        <br />
        <br />
        <strong>👥 Participation</strong>
        <br />
        Team Size: Minimum of 3 members per team.
        <br />
        <br />
        <strong>🔄 Event Format</strong>
        <br />
        <strong>Round 1: Player Bidding 💸</strong>
        <br />
        - Each team receives a virtual budget to bid on marquee players. <br />
        - Auction proceeds in rounds with player lists revealed one by one. <br />
        - Teams must make smart financial and strategic choices. <br />
        <br />
        <strong>Round 2: Team Formation 🏆</strong>
        <br />
        - Teams must form a balanced squad with batsmen, bowlers, and all-rounders. <br />
        - Objective: Build the strongest possible team to dominate the virtual IPL league. <br />
        - Bonus points for strategy, budget management, and creativity. <br />
        <br />
        <strong>📜 Rules:</strong>
        <br />
        1. Each team must consist of at least 3 members 👥. <br />
        2. Use of mobile phones or external help is strictly prohibited 🚫📱. <br />
        3. Each round has a fixed time limit ⏳. <br />
        4. Teams must submit their final squad in the required format 📝. <br />
        5. Judges’/Organizers’ decision will be final and binding ⚖️. <br />
        <br />
        <strong>📞 Event Coordinators:</strong>
        <br />
        Jeevesh H - 9791150386 <br />
        Gnanasoundari R - 7200461570 <br />
        <br />
        <br />
        <br />
      </p>
    );
  },
},
];