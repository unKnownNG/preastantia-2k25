"use client";
import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const CountDown = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);

  return (
    <div className="h-[10rem] mb-20 bg-black z-20">
      <div className="flex flex-col justify-center items-center text-yellow-400 text-2xl md:text-4xl font-bold subheading">
        EVENT COUNTDOWN
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-3 z-10">
  <span className="flex flex-col justify-center p-4 text-center bg-yellow-500/30 backdrop-blur-sm text-yellow-400 text-xl md:text-3xl lg:text-5xl w-28 md:w-36 shadow-lg rounded-2xl border-solid border-yellow-400 border-2">
    {timeLeft.days}
    <small className="text-xs md:text-sm uppercase font-semibold text-yellow-400">
      Days
    </small>
  </span>
  <span className="flex flex-col justify-center p-4 text-center bg-yellow-500/30 backdrop-blur-sm text-yellow-400 text-xl md:text-3xl lg:text-5xl w-28 md:w-36 shadow-sm rounded-2xl border-solid border-yellow-400 border-2">
    {timeLeft.hours}
    <small className="text-xs md:text-sm uppercase font-semibold text-yellow-400">
      Hours
    </small>
  </span>
  <span className="flex flex-col justify-center p-4 text-center bg-yellow-500/30 backdrop-blur-sm text-yellow-400 rounded-2xl border-solid border-yellow-400 border-2 text-xl md:text-3xl lg:text-5xl w-28 md:w-36 shadow-lg">
    {timeLeft.minutes}
    <small className="text-xs md:text-sm uppercase font-semibold text-yellow-400">
      Minutes
    </small>
  </span>
  <span className="flex flex-col justify-center p-4 text-center bg-yellow-500/30 backdrop-blur-sm text-yellow-400 rounded-2xl border-solid border-yellow-400 border-2 text-xl md:text-3xl lg:text-5xl w-28 md:w-36 shadow-lg">
    {timeLeft.seconds}
    <small className="text-xs md:text-sm uppercase font-semibold text-yellow-400">
      Seconds
    </small>
  </span>
</div>

    </div>
  );
};

export default CountDown;
