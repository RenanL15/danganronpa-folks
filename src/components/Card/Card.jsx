import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

export default function Card({
  chID,
  chName,
  chImage,
  isDead,
  showSpoilers,
  chUltimate,
}) {
  const navigate = useNavigate();
  const [ultimate, setUltimate] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-10">
      <div
        onMouseOver={() => setUltimate(true)}
        onMouseLeave={() => setUltimate(false)}
        onClick={() => navigate(`/characters/${chID}`)}
        className="relative mx-10 text-center text-white duration-300 bg-[rgb(35,35,35)] shadow-xl rounded-2xl hover:text-yellow-500 hover:bg-yellow-500 group">
        <h1
          className={`${
            isDead && showSpoilers
              ? "z-10 font-['Rubik_Iso'] scale-[5] -rotate-12 top-36 left-36 absolute font-bold select-none text-red-700"
              : "hidden"
          }`}>
          DEAD
        </h1>
        <img
          className={`m-auto ${
            isDead && showSpoilers ? "grayscale hover:grayscale-0" : null
          } duration-300 scale-110 cursor-pointer group-hover:scale-[1.18]`}
          src={chImage}
          width={350}
        />
        <div className="bg-[rgb(20,20,20)] relative max-w-2xl p-5 rounded-b-[.8rem] cursor-pointer">
          <span className="text-3xl m-auto text-center font-['PT_Sans'] inline-block">
            {chName}
          </span>
        </div>
      </div>
      <span
        className={`text-2xl text-yellow-500 duration-[400ms] font-['PT_Sans'] ${
          ultimate ? "opacity-1" : "opacity-0 select-none"
        }`}>
        {chUltimate}
      </span>
    </div>
  );
}
