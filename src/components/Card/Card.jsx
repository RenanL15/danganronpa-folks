import React from "react";
import "../../index.css";

export default function Card({ chName, chImage, isDead, showSpoilers }) {
  return (
    <div className="mx-10 text-center text-white transition duration-300 ease-in-out bg-[rgb(35,35,35)] shadow-xl my-14 rounded-2xl hover:text-yellow-500 hover:bg-yellow-500">
      <h1
        className={`${
          isDead && showSpoilers
            ? "font-['Rubik_Iso'] scale-[5] translate-y-36 -translate-x-5 -rotate-12 inline-block absolute font-bold z-10 select-none text-red-700"
            : "hidden"
        }`}>
        DEAD
      </h1>
      <img
        className={`m-auto transition ${
          isDead && showSpoilers ? "grayscale hover:grayscale-0" : null
        } duration-300 ease-in-out scale-110 cursor-pointer hover:scale-[1.18]`}
        src={chImage}
      />
      <div className="bg-[rgb(20,20,20)] relative max-w-2xl p-5 rounded-b-[.8rem] cursor-pointer">
        <span className="text-3xl m-auto text-center font-['Electrolize'] inline-block">
          {chName}
        </span>
      </div>
    </div>
  );
}
