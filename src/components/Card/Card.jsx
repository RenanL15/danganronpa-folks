import React, { useState } from "react";
import "../../index.css";

export default function Card({
  chName,
  chImage,
  isDead,
  showSpoilers,
  chUltimate,
}) {
  const [ultimate, setUltimate] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-10">
      <div
        onMouseOver={() => setUltimate(true)}
        onMouseLeave={() => setUltimate(false)}
        className="mx-10 text-center text-white duration-300 bg-[rgb(35,35,35)] shadow-xl my- rounded-2xl hover:text-yellow-500 hover:bg-yellow-500">
        <h1
          className={`${
            isDead && showSpoilers
              ? "z-10 font-['Rubik_Iso'] scale-[5] translate-y-36 -translate-x-5 -rotate-12 inline-block absolute font-bold select-none text-red-700"
              : "hidden"
          }`}>
          DEAD
        </h1>
        <img
          className={`m-auto ${
            isDead && showSpoilers ? "grayscale hover:grayscale-0" : null
          } duration-300 scale-110 cursor-pointer hover:scale-[1.18]`}
          src={chImage}
        />
        <div className="bg-[rgb(20,20,20)] relative max-w-2xl p-5 rounded-b-[.8rem] cursor-pointer">
          <span className="text-3xl m-auto text-center font-['PT_Sans'] inline-block">
            {chName}
          </span>
        </div>
      </div>
      <span
        className={`text-2xl text-yellow-500 duration-[400ms] font-['PT_Sans'] ${
          ultimate ? "opacity-1" : "opacity-0"
        }`}>
        {chUltimate}
      </span>
    </div>
  );
}
