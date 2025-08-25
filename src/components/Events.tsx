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
    description: "Electronics Spark Carnival Excitement",
    title: "Flicker Frenzy",
    src: "/flickerFrenzy.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/Zo18ubobYpqfMHxE8",
    content: () => {
      return (
        <p>
          <p>
            Blink to Win, Code to Conquer!
            <br />
            Welcome to the Circuit Carnival! 🎪 Step right up to test your
            skills in the most electrifying event of the season! With circuits
            buzzing and code flying, it’s time to show who’s the master of both
            the ring and the relay!
            <br />
            <br />
            <strong>Round 1: The Blazing LED Bonanza 🔥</strong>
            <br />
            Challenge: Teams are handed a bag of circuit goodies, and the goal
            is to bring your LED to life! The moment your LED starts to twinkle
            like the brightest star in the carnival, the timer starts ticking!
            <br />
            Relay Race: One member begins with the code while the other stands
            ready at the booth. After 5 minutes, participants will swap
            positions. The team must complete the code within the given time to
            move on.
            <br />
            <br />
            <strong>Round 2: The Electrifying Finals ⚡</strong>
            <br />
            Who Qualifies?: The brightest minds who aced the blinking LED
            challenge!
            <br />
            The Showdown: The final act begins with more circuit fun—teams are
            given even more dazzling components to wire up! Only the top 3
            teams, who connect with the fastest, smartest, and most magical
            hands, will be crowned Carnival Champions!
            <br />
            <br />
            <strong>Rules:</strong>
            <br />
            1. Each team must consist of 2 members.
            <br />
            2. The use of mobile phones and AI tools is strictly prohibited.
            <br />
            3. No communication with other teams is allowed.
            <br />
            4. Teams must complete the task within the given time.
            <br />
            5. Teams will be judged based on speed, accuracy, creativity, and
            completion time.
            <br />
            6. Components must be handled with care. Damage to the components is
            not encouraged.
            <br />
            <strong>Event Coordinators:</strong>
            <br />
            Jeevesh H - 9791150386
            <br />
            Gnanasoundari R - 7200461570
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </p>
      );
    },
  },
  {
    description: "Unveil Ideas, Master Innovation!",
    title: "Mind Masquerade",
    src: "/img2.webp",
    ctaText: "Register",
    ctaLink: "https://forms.gle/Arzooiji89DK6i2o7",
    content: () => {
      return (
        <p>
          Step into the world of innovation and technology, where the brightest
          minds from every discipline converge to showcase their groundbreaking
          ideas. Mind Masquerade invites participants to present visionary
          solutions that transcend the ordinary, in domains ranging from
          Agriculture to Artificial Intelligence and Drones.
          <br />
          <br />
          This is not just a competition—it’s a stage for the thinkers,
          dreamers, and innovators. Whether you're tackling real-world problems
          or pushing the limits of technology, Mind Masquerade is your platform
          to shine. With an electrifying blend of intellect and creativity, only
          the teams with the most compelling ideas will make it to the top.
          <br />
          <br />
          Each team will present a comprehensive solution, supported by
          research, innovative problem-solving, and a 'creative business model'
          that sets them apart. Your journey through the event will be guided by
          a well-structured presentation format designed to highlight the most
          critical aspects of your work.
          <br />
          <br />
          <strong>Rules:</strong>
          <br />
          1. Teams must consist of a minimum of 2 members and a maximum of 4,
          from any department.
          <br />
          2. An abstract submission via Gform registration is mandatory.
          <br />
          3. PowerPoint presentations must follow the given format but use your
          own template for creativity.
          <br />
          <br />
          <strong>Idea Domains:</strong>
          <br />
          1. IoT
          <br />
          2. Antenna
          <br />
          3. Artificial Intelligence
          <br />
          4. VLSI
          <br />
          5. Robotics
          <br />
          6. Wireless Communication
          <br />
          7. Others
          <br />
          <br />
          <strong>PPT Format:</strong>
          <br />
          1. Problem Statement
          <br />
          2. Proposed Solution
          <br />
          3. Flowchart/Block Diagram
          <br />
          4. Showstopper/Dependencies
          <br />
          5. Comparison
          <br />
          6. Creative Business Model
          <br />
          7. Conclusion
          <br />
          <br />
          <strong>Event Coordinators:</strong>
          <br />
          Anisha P – 8778823101
          <br />
          Aswin Kumar B - 6383093225
          <br />
          Sriharshini S - 9042496792
          <br />
          <br />
          <br />
          <br />
        </p>
      );
    },
  },

  {
    description: "The Ultimate Carnival Trivia Showdown",
    title: "Brain-o-Val Conquer",
    src: "/brainOVal.jpg",
    ctaText: "Register",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScsFsffPBtEUAlL5App3HUAtvhLWg0cYTr8aalNu2j_piSM8g/viewform?usp=sf_link",
    content: () => {
      return (
        <p>
          Event Description:
          <br />
          Step right up to Brain-O-Val Conquere, where the thrill of a carnival
          meets the excitement of trivia! Teams will compete in a lively,
          action-packed contest where knowledge, speed, and strategy take center
          stage. With carnival-inspired challenges and a festive atmosphere, get
          ready to stack, build, and block your way to victory in two
          electrifying rounds of technical trivia!
          <br />
          <br />
          <strong>PARTICIPATION</strong>
          <br />
          Team Size: Maximum of 3 members and minimum of 2 members per team.
          <br />
          <br />
          <strong>ROUNDS</strong>
          <br />
          <strong>Round 1: Stack & Answer Spectacle</strong>
          <br />
          Challenge: In this carnival-style showdown, teams will face a series
          of trivia questions displayed on the screen. But there’s a
          twist—before answering, teams must stack cups in a specific pattern,
          just like a carnival game challenge! The pattern will be displayed
          before each question for 15 sec. The team should memorize the pattern
          in the given time and try to replicate it. The first team to
          successfully stack the cups in the correct pattern earns the chance to
          answer the question.
          <br />
          Advancement: The teams with the most points will advance to the grand
          finale.
          <br />
          Objective: Stack your cups, be the first to buzz in, and score big
          points!
          <br />
          <br />
          <strong>Round 2: Build or Bust Bonanza</strong>
          <br />
          Challenge: The top 4 teams advance to this thrilling final round. In
          this round, answering questions correctly allows teams to build their
          own carnival blocks. If answered wrong, the team has to step one block
          down from their tower. But the fun doesn’t stop there—teams can also
          use their points to destroy an opponent’s blocks, adding a strategic
          twist to the carnival chaos! Every correct answer either builds your
          structure or knocks down your rivals’ towers.
          <br />
          Objective: Be the first team to build all four blocks and stand
          victorious as the champions of the Brain-o-Val!
          <br />
          <br />
          <strong>Event Rules:</strong>
          <br />
          - Teams must consist of up to 2-3 members.
          <br />
          - In Round 1, teams must stack cups according to the carnival-inspired
          pattern shown on the screen before each trivia question.
          <br />
          - In Round 2, correct answers will allow teams to either build their
          blocks or bust their opponents’ blocks. A wrong answer will destroy
          their own block.
          <br />
          - The first team to complete the stacking pattern gets the first
          opportunity to answer.
          <br />
          - The decisions of the quizmaster and event coordinators are final;
          arguments are strictly prohibited. If violated, immediate
          disqualification of the respective team will be executed!
          <br />
          - Tiebreaker: In case of a tie, the first team to answer correctly
          will take home the grand prize.
          <br />
          <br />
          <strong>Event Coordinators:</strong>
          <br />
          Mohamed Daanish R - 9789844909
          <br />
          Murali Karthik K - 9944040767
          <br />
          <br />
          <br />
          <br />
        </p>
      );
    },
  },
  {
    description: "Strike a Deal",
    title: "Stadium Wonders",
    src: "/stadiumWonders.jpg",
    ctaText: "Register",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScPMQ-kahrignSc7C79aVZ2IDJDIR4FiNlEu07GmqogGShnqw/viewform?usp=sf_link",
    content: () => {
      return (
        <p>
          <div>
            <h1>Stadium Wonders - Strike a Deal</h1>
            <p>
              "Bid, build, and battle! Create your dream team in this exciting
              IPL mock auction."
            </p>
            <br />
            <p>
              Experience the thrill of the IPL auction! Bid on your favorite
              cricketers and create your dream team in this exciting mock
              auction.
            </p>
            <br />
            <strong>RULES :</strong>
            <br />
            <p>1. 10 teams of min 2 members or max 3 members are allowed.</p>
            <p>
              2. The 10 teams are randomly assigned with 10 IPL teams by random
              draw.
            </p>
            <p>3. Each team will receive an IPL team according to the draw.</p>
            <p>
              4. Teams will receive a virtual budget to bid on their favorite
              IPL players and the teams can retain a min of 1 capped or uncapped
              or maximum of 6 players of 4 capped and 2 uncapped or 5 capped or
              1 uncapped.
            </p>
            <p>
              5. Teams will receive Right to Match cards based on their
              retentions.
            </p>
            <p>
              6. The auction will be conducted in a fast-paced, competitive
              environment with multiple rounds based on Marquee list of players.
            </p>
            <p>
              7. The goal is to create a balanced team that can dominate the
              virtual IPL league.
            </p>
            <br />
            <br />
            <strong>Event Coordinators:</strong>
            <br />
            Suhanthee R - 9626403845
            <br />
            Nithiyarasan T - 9042031009
            <br />
            <br />
            <br />
            <br />
          </div>
        </p>
      );
    },
  },
];