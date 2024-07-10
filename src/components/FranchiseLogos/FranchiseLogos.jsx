import React from "react";
import thhLogo from "../../assets/imgs/danganronpa-thh-logo.png";
import gdLogo from "../../assets/imgs/danganronpa-gd-logo.png";
import khLogo from "../../assets/imgs/danganronpa-kh-logo.png";

export default function FranchiseLogos({
  franchise,
  setFranchise,
  setSpoilers,
  setSort,
}) {
  return (
    <div className="flex items-center justify-center gap-32 max-lg:flex-col max-xl:gap-12">
      {/* Trigger Happy Havoc Logo */}
      <img
        onClick={() => {
          setFranchise("thh");
          setSpoilers(false);
          setSort("");
        }}
        className={`mt-10 max-2xl:w-72 transition duration-200 ease-in-out cursor-pointer ${
          franchise === "thh"
            ? "opacity-100 scale-110"
            : "opacity-20 hover:opacity-100 hover:scale-110"
        }`}
        src={thhLogo}
        width={350}
      />

      {/* Goodbye Despair Logo */}
      <img
        onClick={() => {
          setFranchise("gd");
          setSpoilers(false);
          setSort("");
        }}
        className={`mt-10 max-2xl:w-72 transition duration-200 ease-in-out cursor-pointer ${
          franchise === "gd"
            ? "opacity-100 scale-110"
            : "opacity-20 hover:opacity-100 hover:scale-110"
        }`}
        src={gdLogo}
        width={350}
      />

      {/* Killing Harmony Logo */}
      <img
        onClick={() => {
          setFranchise("kh");
          setSpoilers(false);
          setSort("");
        }}
        className={`mt-10 max-2xl:w-72 transition duration-200 ease-in-out cursor-pointer ${
          franchise === "kh"
            ? "opacity-100 scale-110"
            : "opacity-20 hover:opacity-100 hover:scale-110"
        }`}
        src={khLogo}
        width={350}
      />
    </div>
  );
}
