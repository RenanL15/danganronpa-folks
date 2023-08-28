import React from "react";
import thhLogo from "../../assets/imgs/danganronpa-thh-logo.png";
import gdLogo from "../../assets/imgs/danganronpa-gd-logo.png";
import khLogo from "../../assets/imgs/danganronpa-kh-logo.png";

export default function FranchiseLogos({
  franchise,
  setFranchise,
  setSpoilers,
}) {
  return (
    <div className="flex justify-center items-center gap-32 max-lg:flex-col max-xl:gap-12">
      {/* Trigger Happy Havoc Logo */}
      <img
        onClick={() => {
          setFranchise("thh");
          setSpoilers(false);
        }}
        className={`mt-10 max-2xl:w-72 transition duration-200 ease-in-out cursor-pointer ${
          franchise === "thh"
            ? "opacity-100 scale-110"
            : "opacity-20 hover:opacity-100 hover:scale-110"
        } w-96`}
        src={thhLogo}
      />

      {/* Goodbye Despair Logo */}
      <img
        onClick={() => {
          setFranchise("gd");
          setSpoilers(false);
        }}
        className={`mt-10 max-2xl:w-72 transition duration-200 ease-in-out cursor-pointer ${
          franchise === "gd"
            ? "opacity-100 scale-110"
            : "opacity-20 hover:opacity-100 hover:scale-110"
        } w-[28rem]`}
        src={gdLogo}
      />

      {/* Killing Harmony Logo */}
      <img
        onClick={() => {
          setFranchise("kh");
          setSpoilers(false);
        }}
        className={`mt-10 max-2xl:w-72 transition duration-200 ease-in-out cursor-pointer ${
          franchise === "kh"
            ? "opacity-100 scale-110"
            : "opacity-20 hover:opacity-100 hover:scale-110"
        } w-[28rem]`}
        src={khLogo}
      />
    </div>
  );
}
