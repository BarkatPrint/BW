import React from 'react';
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";
import { RiAlarmWarningLine } from "react-icons/ri";

const cardData = [
  {
    id: 1,
    icon: <GrUserWorker size={40} className="text-[#92E3A9]" />,
    title: "2Cr+",
    description: "Local Skilled Workers"
  },
  {
    id: 2,
    icon: <MdOutlineOutlinedFlag size={40} className="text-[#92E3A9]" />,
    title: "500+",
    description: "Cities in India"
  },
  {
    id: 3,
    icon: <TbHeartHandshake size={40} className="text-[#92E3A9]" />,
    title: "1Cr+",
    description: "Workers Hired Instantly"
  },
  {
    id: 4,
    icon: <FaRegStar size={40} className="text-[#92E3A9]" />,
    title: "50L+",
    description: "Trusted by Millions"
  },
  {
    id: 5,
    icon: <PiArrowsCounterClockwiseFill size={40} className="text-[#92E3A9]" />,
    title: "5L+",
    description: "New Works & Jobs Daily"
  },
  {
    id: 6,
    icon: <RiAlarmWarningLine  size={40} className="text-[#92E3A9]" />, // Emergency Red Light Icon
    title: "1Cr+",
    description: "Emergency Work & Help"
  }
];

export default function CardGrid() {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="h-60 w-full bg-[#F5F5F5] flex flex-col justify-center items-center rounded-lg shadow-lg"
          >
            <div className="mb-4">
              {card.icon}
            </div>
            <h1 className="font-bold text-3xl text-[#189D0E]">{card.title}</h1>
            <p className="text-xl text-[#189D0E]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
