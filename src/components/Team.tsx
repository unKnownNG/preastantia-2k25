"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ✅ Team Members Data (unchanged)
const teamMembers = {
  keyPersons: [
    { name: "Dr. Sai Prakash Leo Muthu", designation: "CEO", image: "/img/members/ceo.jpg" },
    { name: "Dr. K. Palanikumar", designation: "Principal", image: "/img/members/princi.png" },
  ],
  hod: [
    {
      name: "Dr. G. THAMARAI SELVI",
      designation: "Head Of The Department",
      image: "/img/members/hod.jpg",
      linkedin: "https://www.linkedin.com/in/thamarai-selvi-g-b8b2b684/",
    },
  ],
  staffCoordinators: [
    {
      name: "Dr. S. DEIVANAYAGI ",
      designation: "Associate Professor",
      image: "/img/members/deivanayagi.jpg",
      linkedin: "https://www.linkedin.com/in/subashini-123456/",
    },
    {
      name: "Dr. G. VALARMATHI",
      designation: "Associate Professor",
      image: "/img/members/valar.jpg",
      linkedin: "https://www.linkedin.com/in/valarmathi-g-b97b2ba1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  officeBearers: [
    {
      name: "Mr. SASIRAM S",
      designation: "President",
      image: "/img/members/pres.jpg",
      linkedin: "https://www.linkedin.com/in/sasirams/",
    },
    {
      name: "Ms. VISHWAPRIYA V",
      designation: "Vice President",
      image: "/img/members/vicepres.jpg",
      linkedin:
        "https://www.linkedin.com/in/vishwa-priya-v-03313b27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mr. RANJITHVEL M",
      designation: "Secretary",
      image: "/img/members/sec.jpg",
      linkedin:
        "https://www.linkedin.com/in/ranjith-vel-159047292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ms. SRINITHI A",
      designation: "Joint Secretary",
      image: "/img/members/joinsec.jpg",
      linkedin:
        "https://www.linkedin.com/in/srinithi-a-b98a7a325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ms. SRI HARSINI K",
      designation: "Treasurer",
      image: "/img/members/tres.jpg",
      linkedin:
        "https://www.linkedin.com/in/sriharsini-k-b1337a350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mr. KOSILARAJAN R",
      designation: "Joint Treasurer",
      image: "/img/members/jointres.jpg",
      linkedin:
        "https://www.linkedin.com/in/kosilarajan-ramanathan-76b917327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  mediaTeam: [
    {
      name: "Mr. SIVAN MUTHU K",
      designation: "Graphic Designer/Video Editor",
      image: "/img/members/mediateam.jpg",
      linkedin:
        "https://www.linkedin.com/in/k-sivan-muthu-5799692b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  devs: [
    {
      name: "Mr. MOHAMMED DAIYAAN",
      designation: "Developer",
      image: "/img/members/mrx.jpeg",
      github: "https://github.com/unknownng",
      linkedin: "hhttps://www.linkedin.com/in/mohammed-daiyaan-6791a7276/",
    },
    {
      name: "Mr. MANOJ R",
      designation: "Frontend Developer",
      image: "/img/members/dev2.jpg",
      github: "https://github.com/Manoj-R19/",
      linkedin:
        "https://www.linkedin.com/in/manoj-r-8a3a03292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mr. KOUSHIK C",
      designation: "Frontend Developer",
      image: "/img/members/dev3.jpg",
      github: "https://github.com/devthree",
      linkedin:
        "https://www.linkedin.com/in/koushik-c-997859295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
};

// ✅ Glassmorphism Enhanced TeamCard
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TeamCard = ({ member }: any) => (
  <div className="flex flex-col items-center bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-lg p-6 rounded-2xl w-64 sm:w-72 relative transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_6px_rgba(255,215,0,0.6)]">
    {/* Profile Image */}
    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 relative border border-white/30 shadow-[0_0_12px_rgba(255,215,0,0.6)]">
      <Image src={member.image} alt={member.name} fill className="object-cover" />
    </div>
    {/* Name & Designation */}
    <p className="text-lg font-semibold text-center text-white drop-shadow-md">
      {member.name}
    </p>
    <p className="text-sm sm:text-base text-gray-300 text-center">{member.designation}</p>
    {/* Social Links */}
    <div className="flex justify-center mt-3 space-x-3">
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-400 text-xl hover:text-blue-500 transition" />
        </a>
      )}
      {member.github && (
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-300 text-xl hover:text-white transition" />
        </a>
      )}
    </div>
  </div>
);

// ✅ Main Team Component
export default function Team() {
  return (
    <div className="py-10 px-2 sm:px-4 space-y-16 bg-black/40 min-h-screen">
      {/* KEY PERSONS */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-yellow-400">
          KEY PERSONS
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.keyPersons.map((m, idx) => (
            <TeamCard key={idx} member={m} />
          ))}
        </div>
      </section>

      {/* MEET MY TEAM (HOD) */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-yellow-400">
          HOD
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {teamMembers.hod.map((m, idx) => (
            <TeamCard key={idx} member={m} />
          ))}
        </div>
      </section>

      {/* STAFF COORDINATORS */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-yellow-400">
          Staff Coordinators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-3xl mx-auto">
          {teamMembers.staffCoordinators.map((m, idx) => (
            <TeamCard key={idx} member={m} />
          ))}
        </div>
      </section>

      {/* OFFICE BEARERS */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-yellow-400">
          Office Bearers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
          {teamMembers.officeBearers.map((m, idx) => (
            <TeamCard key={idx} member={m} />
          ))}
        </div>
      </section>

      {/* MEDIA TEAM */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-yellow-400">
          Media Team
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          {teamMembers.mediaTeam.map((m, idx) => (
            <TeamCard key={idx} member={m} />
          ))}
        </div>
      </section>

      {/* MEET THE DEVS */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-yellow-400">
          Developers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
          {teamMembers.devs.map((m, idx) => (
            <div
              key={idx}
              className={idx === 2 ? "sm:col-span-2 sm:justify-self-center lg:col-span-1" : ""}
            >
              <TeamCard member={m} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
