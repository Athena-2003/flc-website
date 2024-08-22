"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg";

import Marquee from "../magicui/marquee";

const benifits = [
  {
    icon: sampleImage,
    title: "Workshops",
    content:
      "The members get free access to all the events and workshops conducted by the Finite Loop club.",
  },
  {
    icon: sampleImage,
    title: "Internships",
    content: "Get a chance to grab internships and put your skills into use.",
  },
  {
    icon: sampleImage,
    title: "Peer to Peer Learning",
    content:
      "Explain your ideas to others and participate in activities through which you can learn from your peers.",
  },
  {
    icon: sampleImage,
    title: "Guest Lecture",
    content:
      "Get an opportunity to listen to some of the renowned experts, and engage in discussions.",
  },
  {
    icon: sampleImage,
    title: "Real-Time Projects",
    content:
      "Being in this club, you get to work on real time projects, which allows you to bring out your creative side.",
  },
  {
    icon: sampleImage,
    title: "Coding Contest",
    content:
      "We ensure to conduct biweekly coding contests, to improve your analytical and problem solving skills.",
  },
];

const firstRow = benifits.slice(0, benifits.length / 2);
const secondRow = benifits.slice(benifits.length / 2);

const ReviewCard = ({
  icon,
  title,
  content,
}: {
  icon: StaticImageData;
  title: string;
  content: string;
}) => {
  return (
    <figure className="relative w-80 cursor-pointer overflow-hidden rounded-xl border border-black bg-white p-6 hover:bg-slate-200 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-full"
          src={icon}
          alt={title}
          width={48}
          height={48}
          layout="intrinsic"
        />
        <div className="flex flex-col">
          <figcaption className="caption font-medium dark:text-white">
            {title}
          </figcaption>
        </div>
      </div>
      <blockquote className="caption mt-3">{content}</blockquote>
    </figure>
  );
};

export function Benifits() {
  return (
    <section className="relative z-50 mb-44 mt-20 flex h-[140vh] flex-col items-center justify-center px-4 font-sans sm:px-8  md:px-16 xl:px-36">
      <div className="line-break "></div>
      <div className="event-bg "></div>
      <p
        className=" absolute bottom-auto left-0 right-0 top-10 hidden text-center text-7xl text-transparent  lg:text-9xl xl:visible xl:block"
        style={{
          WebkitTextStroke: "1px #201E43",
        }}
      >
        What is in it for you?
      </p>
      <div className="mb-4 mt-32 flex  items-center justify-center sm:mb-24 sm:mt-0">
        <h1 className="events-heading z-10  py-2 pt-14 text-7xl sm:py-2 xl:text-8xl">
          Benefits.
        </h1>
      </div>
      <div className="z-1 grid h-full w-full grid-cols-2  grid-rows-10  gap-4 sm:grid-cols-4 sm:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4 ">
        <div className="grid_card relative col-span-1 col-start-1 row-span-1 row-start-1 row-end-2 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl   p-4 px-2 ">
          <p className="font-bebas-neue   text-xl  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:text-4xl lg:tracking-widest">
            {" "}
            Internships
          </p>
          <img
            src="grid_bg.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="grid_card relative col-span-1 col-start-1 row-span-1 row-start-2 row-end-3 flex items-center justify-center rounded-2xl  p-1 px-2 text-lg sm:col-start-2 sm:row-start-1 sm:row-end-1">
          <img src="logo.webp" alt="" />
          <img
            src="grid_bg_yellow.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="grid_card font-bebas-neue relative col-span-1 col-start-2 col-end-3 row-span-2 row-start-1 row-end-3 flex flex-col items-center justify-center gap-y-4 rounded-2xl px-2  text-xl tracking-widest sm:col-start-4 sm:col-end-5 sm:row-start-3  sm:row-end-5 sm:text-2xl sm:tracking-wide md:gap-y-8 md:text-3xl  md:tracking-wider lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:text-4xl lg:tracking-widest">
          <p>Real</p>
          <p>Time</p>
          <p>Projects</p>

          <img
            src="grid_bg_right.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="grid_card font-bebas-neue relative col-span-2 col-start-1 col-end-3 row-span-1 row-start-3 row-end-4 flex items-center justify-center rounded-2xl px-2  text-xl tracking-widest sm:col-start-3  sm:col-end-5  sm:row-start-1 sm:row-end-1 sm:text-2xl  sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-4 lg:col-end-6 lg:text-4xl lg:tracking-widest">
          <p> Guest Lectures</p>{" "}
          <img
            src="grid_bg_topdown.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="grid_card  relative col-span-2 row-span-2 flex flex-col items-center justify-center rounded-2xl  px-2 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-4 sm:py-2 md:py-4">
          <h1 className="font-bebas-neue text-xl font-extrabold  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:text-4xl lg:tracking-widest">
            What is HackFest?
          </h1>
          <p className="lg:text-md m-2 text-justify font-sans text-xs font-normal sm:m-4 sm:text-sm xl:text-lg">
            NMAM Institute of Technology presents a three-day National Tech Fest
            featuring a 36-hour hackathon, tech conferences, and networking. Our
            vision is to bring together 60 teams from leading Indian engineering
            colleges, fostering innovation. The event spans 50 hours, including
            a 36-hour hackathon, providing a platform for participants to
            showcase their skills.
          </p>
          <img
            src="grid_bg_topdown.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="grid_card font-bebas-neue relative col-span-1 row-span-1 flex items-center justify-center rounded-2xl  px-2 text-xl  tracking-widest  sm:col-start-3 sm:col-end-4 sm:text-2xl sm:tracking-wide md:text-3xl  md:tracking-wider lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3 lg:text-4xl lg:tracking-widest">
          <p> Digital hunt</p>
          <img
            src="grid_bg_topdown.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="font-bebas-neue grid_card relative col-span-1 row-span-1 flex items-center justify-center rounded-2xl px-2 text-xl  tracking-widest sm:col-start-4  sm:col-end-5 sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 lg:text-4xl lg:tracking-widest">
          <p> Tech advent</p>
          <img
            src="grid_bg_topdown.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="font-bebas-neue grid_card relative col-span-2 row-span-1 flex items-center justify-center rounded-2xl px-2 text-center text-xl  tracking-widest sm:col-start-2 sm:col-end-4  sm:row-start-4  sm:row-end-5 sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:text-4xl lg:tracking-widest">
          <p> HackLoop & HackXpo</p>
          <img
            src="grid_bg.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="font-bebas-neue grid_card col-span- relative row-span-2  row-start-8 row-end-10 flex flex-col items-center justify-center gap-y-4 rounded-2xl px-2  text-center  text-xl  tracking-widest sm:col-start-1 sm:col-end-2  sm:row-start-4 sm:row-end-6 sm:text-2xl sm:tracking-wide md:text-3xl  md:tracking-wider lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-5 lg:text-4xl lg:tracking-widest">
          <p>Peer</p>
          <p>To</p>
          <p>Peer</p>
          <p>Learning</p>
          <img
            src="grid_bg_right.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="font-bebas-neue grid_card relative col-span-2 row-span-1 flex items-center justify-center rounded-2xl px-2 text-xl  tracking-widest sm:col-start-2 sm:col-end-4  sm:row-start-5  sm:row-end-6 sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5 lg:text-4xl lg:tracking-widest">
          <p> Coding Contests</p>
          <img
            src="grid_bg_topdown.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="grid_card relative col-span-1 row-span-1 row-start-8 row-end-9 flex items-center justify-center rounded-2xl  px-2 text-lg sm:row-start-3 sm:row-end-4 lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5">
          <p className=" font-bebas-neue text-center text-xl  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:text-4xl lg:tracking-widest">
            {" "}
            WORKSHOPS
          </p>
          <img
            src="grid_bg.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
        <div className="grid_card relative col-span-1 row-span-1 row-start-9 row-end-10 flex items-center justify-center overflow-hidden rounded-2xl  px-2 text-lg sm:row-start-5 sm:row-end-6 lg:col-start-4 lg:col-end-5 lg:row-start-4 lg:row-end-5">
          <div className="relative h-[70%] w-[95%] sm:h-[40%] sm:w-[85%]">
            {" "}
            <Image src="/flc_logo.webp" alt="" fill />
          </div>
          <img
            src="grid_bg_yellow.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full opacity-50"
          />
        </div>
      </div>
    </section>
  );
}

export default Benifits;
