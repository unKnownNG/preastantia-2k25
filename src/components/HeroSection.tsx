"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const CountDown = dynamic(() => import("../components/CountDown"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Fullscreen Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/img/bg/bg1.png"
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen px-4 text-center">
        {/* First Logo */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
          <Image
            src="/logo/logo2.png"
            alt="Logo 1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Optional text */}
        <div className="text-primaryColor font-bold text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mt-6 text-center">
          Proudly Presents
        </div>

        {/* Second Logo */}
        <div className="flex-shrink-0 relative w-72 h-44 md:w-96 md:h-52 lg:w-[34rem] lg:h-72 mt-6">
          <Image
            src="/logo/logo.png"
            alt="Logo 2"
            fill
            className="animate-float"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="relative">
          <CountDown launchDate="2025-09-23T10:00:00" />
        </div>

        {/* Main Text */}
        <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mt-6 drop-shadow-lg">
          DEPARTMENT OF <br />
          ELECTRONICS AND COMMUNICATION ENGINEERING
        </p>

        {/* Inspiring Quote */}
        <div className="mt-6 max-w-2xl">
          <p className="text-white/90 italic text-sm md:text-base">
            &quot;Innovation distinguishes between a leader and a follower.&quot;
          </p>
        </div>
      </div>

      {/* Enhanced Sections with Descriptions */}
      <section className="relative z-20 w-full px-4 py-16 md:py-20 lg:py-24 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl text-white">
          
          {/* About Department */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              About the <span className="text-primaryColor">Department</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/90 max-w-4xl mx-auto justify-center">
               Department of Electronics and Communication Engineering was started in the year 2008 with an intake of 60. Subsequently, the intake was increased to 90 in 2009-2010 and 120 from the year 2010-11. The department is certified by ISO 9001:2015 and accredited for three years by NBA expert team. The department has well qualified, experienced teaching faculty and supporting faculty, to impart knowledge and skills.
            </p>
            <blockquote className="mt-6 text-white/80 italic text-sm md:text-base">
              &quot;Engineering is the art of directing the great sources of power in nature for the use and convenience of man.&quot; — Thomas Tredgold
            </blockquote>
          </div>

          {/* Events Section */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-primaryColor">Exciting</span> Events
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 max-w-4xl mx-auto">
                Dive into a world of technical competitions, workshops, and seminars designed to challenge your skills and expand your knowledge. From coding marathons to hardware hackathons, our events bridge the gap between theoretical learning and practical application.
              </p>
              <p className="text-white/80 text-sm italic mb-6">
                &quot;The future belongs to those who prepare for it today.&quot;
              </p>
              <Link
                href="/event"
                className="inline-flex items-center rounded-lg bg-primaryColor px-6 py-3 text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primaryColor/50 shadow-lg"
              >
                Explore Events
              </Link>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Meet Our <span className="text-primaryColor">Team</span>
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 max-w-4xl mx-auto">
                Behind every successful event is a dedicated team of passionate individuals. Get to know the brilliant minds, creative visionaries, and technical experts who work tirelessly to bring innovation and excellence to our department.
              </p>
              <p className="text-white/80 text-sm italic mb-6">
                &quot;Teamwork makes the dream work.&quot;
              </p>
              <Link
                href="/team"
                className="inline-flex items-center rounded-lg border-2 border-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-lg"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our <span className="text-primaryColor">Sponsors</span>
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 max-w-4xl mx-auto">
                We&apos;re proud to collaborate with industry leaders and innovative companies who share our vision of technological advancement. These partnerships enable us to provide cutting-edge resources, real-world exposure, and exciting opportunities for our students.
              </p>
              <p className="text-white/80 text-sm italic mb-6">
                &quot;Great things in business are never done by one person. They&apos;re done by a team of people.&quot;
              </p>
              <Link
                href="/sponsor"
                className="inline-flex items-center rounded-lg border-2 border-primaryColor px-6 py-3 text-primaryColor font-semibold hover:bg-primaryColor hover:text-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primaryColor/50 shadow-lg"
              >
                Our Sponsors
              </Link>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="mt-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-primaryColor">Gallery</span> Highlights
              </h3>
              <Link
                href="/gallery"
                className="text-sm md:text-base text-primaryColor hover:underline transition-all duration-200 hover:text-white"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-6 justify-items-center">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="relative aspect-[4/3] w-full max-w-xs overflow-hidden rounded-lg ring-1 ring-white/20 hover:ring-primaryColor/50 transition-all duration-200 hover:scale-105">
                  <Image
                    src={`/gallery/g${n}.jpg`}
                    alt={`Gallery ${n}`}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                    style={{ objectFit: "cover" }}
                    placeholder="empty"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-black font-semibold hover:bg-white/90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              >
                View Complete Gallery
              </Link>
            </div>
          </div>

          {/* Final Inspirational Section */}
          <div className="mt-16 text-center">
            <blockquote className="text-lg md:text-xl text-white/90 italic max-w-3xl mx-auto">
              &quot;The best way to predict the future is to create it.&quot;
            </blockquote>
            <p className="text-primaryColor font-semibold mt-2">— Peter Drucker</p>
            <p className="text-white/80 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              Join us in shaping tomorrow&apos;s technology today. Where innovation meets excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
