import React from "react";
import { useState, useEffect } from "react";
import Warning from "./assets/imgs/warning.png";

// Components
import Card from "./components/Card/Card";
import FranchiseLogos from "./components/FranchiseLogos/FranchiseLogos";
import Buttons from "./components/Buttons/Buttons";

// Trigger Happy Havoc characters
import Aoi from "./assets/imgs/thhCharacters/aoi.png";
import Byakuya from "./assets/imgs/thhCharacters/byakuya.png";
import Celeste from "./assets/imgs/thhCharacters/celestia.png";
import Chihiri from "./assets/imgs/thhCharacters/chihiri.png";
import Hifumi from "./assets/imgs/thhCharacters/hifumi.png";
import Jack from "./assets/imgs/thhCharacters/jack.png";
import Junko from "./assets/imgs/thhCharacters/junko.png";
import Kirigiri from "./assets/imgs/thhCharacters/kyoko.png";
import Leon from "./assets/imgs/thhCharacters/leon.png";
import Mondo from "./assets/imgs/thhCharacters/mondo.png";
import Naegi from "./assets/imgs/thhCharacters/naegi.png";
import Sakuna from "./assets/imgs/thhCharacters/sakuna.png";
import Sayaka from "./assets/imgs/thhCharacters/sayaka.png";
import Taka from "./assets/imgs/thhCharacters/taka.png";
import Toko from "./assets/imgs/thhCharacters/toko.png";
import Yasuhiro from "./assets/imgs/thhCharacters/yasuhiro.png";

// Goodbye Despair characters
import Ibuki from "./assets/imgs/gdCharacters/ibuki.png";
import Mahiru from "./assets/imgs/gdCharacters/mahiru.png";
import Chiaki from "./assets/imgs/gdCharacters/chiaki.png";
import Peko from "./assets/imgs/gdCharacters/peko.png";
import Nagito from "./assets/imgs/gdCharacters/nagito.png";
import Soda from "./assets/imgs/gdCharacters/soda.png";
import Hajime from "./assets/imgs/gdCharacters/hajime.png";
import Fuyuhiko from "./assets/imgs/gdCharacters/fuyuhiko.png";
import Sonia from "./assets/imgs/gdCharacters/sonia.png";
import Hiyoko from "./assets/imgs/gdCharacters/hiyoko.png";
import Nekomaru from "./assets/imgs/gdCharacters/nekomaru.png";
import Mikan from "./assets/imgs/gdCharacters/mikan.png";
import Teruteru from "./assets/imgs/gdCharacters/teruteru.png";
import Akane from "./assets/imgs/gdCharacters/akane.png";
import Gundham from "./assets/imgs/gdCharacters/gundham.png";
import ByakuyaGD from "./assets/imgs/gdCharacters/byakuya.png";

export default function App() {
  const [franchise, setFranchise] = useState("thh");
  const [spoilers, setSpoilers] = useState(false);
  const [thhCharactersInfo, setThh] = useState([
    { name: "Chihiri Fujisaki", isDead: true, icon: Chihiri },
    { name: "Toko Fuwaka", isDead: false, icon: Toko },
    { name: "Kyoko Kirigiri", isDead: false, icon: Kirigiri },
    { name: "Kiyotaka Ishimaru", isDead: true, icon: Taka },
    { name: "Leon Kuwata", isDead: true, icon: Leon },
    { name: "Celestia Ludenberg", isDead: true, icon: Celeste },
    { name: "Naegi Makoto", isDead: false, icon: Naegi },
    { name: "Sakuna Ogami", isDead: true, icon: Sakuna },
    { name: "Mondo Owada", isDead: true, icon: Mondo },
    { name: "Genocide Jack", isDead: false, icon: Jack },
    { name: "Hifumi Yamada", isDead: true, icon: Hifumi },
    { name: "Junko Enoshima", isDead: true, icon: Junko },
    { name: "Aoi Asahina", isDead: false, icon: Aoi },
    { name: "Byakuya Togami", isDead: false, icon: Byakuya },
    { name: "Yasuhiro Hagakute", isDead: false, icon: Yasuhiro },
    { name: "Sayaka Maizono", isDead: true, icon: Sayaka },
  ]);

  const [gdCharactersInfo, setGd] = useState([
    { name: "Sonia Nevermind", isDead: false, icon: Sonia },
    { name: "Gundham Tanaka", isDead: false, icon: Gundham },
    { name: "Peko Pekoyama", isDead: true, icon: Peko },
    { name: "Akane Owana", isDead: false, icon: Akane },
    { name: "Chiaki Nanami", isDead: false, icon: Chiaki },
    { name: "Fuyuhiko Kuruzyu", isDead: false, icon: Fuyuhiko },
    { name: "Ibuki Mioda", isDead: true, icon: Ibuki },
    { name: "Mikan Tsumiki", isDead: false, icon: Mikan },
    { name: "Teruteru Hanamura", isDead: true, icon: Teruteru },
    { name: "Kazuichi Soda", isDead: false, icon: Soda },
    { name: "Byakuya Togami", isDead: true, icon: ByakuyaGD },
    { name: "Hajime Hinata", isDead: false, icon: Hajime },
    { name: "Mahiru Koizumi", isDead: true, icon: Mahiru },
    { name: "Nagito Komaeda", isDead: false, icon: Nagito },
    { name: "Hiyoko Saijoni", isDead: true, icon: Hiyoko },
    { name: "Nekomaru Nidai", isDead: false, icon: Nekomaru },
  ]);
  const showSpoilers = () => {
    let cfSpoilers;
    if (!spoilers) {
      cfSpoilers = confirm("Are you sure you want to see spoilers?");
      cfSpoilers ? setSpoilers(true) : null;
    } else {
      setSpoilers(false);
    }
  };

  const [sort, setSort] = useState("");
  const sortByName = () => {
    if (sort === "ZA") {
      if (franchise === "thh") {
        thhCharactersInfo.sort((b, a) => a.name.localeCompare(b.name));
        setThh([...thhCharactersInfo]);
      } else {
        gdCharactersInfo.sort((b, a) => a.name.localeCompare(b.name));
        setGd([...gdCharactersInfo]);
      }
      setSort("AZ");
    } else {
      if (franchise === "thh") {
        thhCharactersInfo.sort((b, a) => b.name.localeCompare(a.name));
        setThh([...thhCharactersInfo]);
      } else {
        gdCharactersInfo.sort((b, a) => b.name.localeCompare(a.name));
        setGd([...gdCharactersInfo]);
      }
      setSort("ZA");
    }
    console.log(sort);
  };
  // console.log(spoilers);
  return (
    <main className={`bg-[url('./assets/imgs/thhBanner.png')] bg-local`}>
      <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-[rgba(0,0,0,0.9)]">
        <FranchiseLogos
          franchise={franchise}
          setFranchise={setFranchise}
          setSpoilers={setSpoilers}
        />
        <Buttons
          spoilers={spoilers}
          showSpoilers={showSpoilers}
          sort={sort}
          sortByName={sortByName}
        />
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 2xl:px-28">
          {franchise === "thh"
            ? thhCharactersInfo.map((character, index) => (
                <Card
                  key={index}
                  chName={character.name}
                  chImage={character.icon}
                  isDead={character.isDead}
                  showSpoilers={spoilers}
                />
              ))
            : null}
          {console.log(thhCharactersInfo)}
          {franchise === "gd"
            ? gdCharactersInfo.map((character, index) => (
                <Card
                  key={index}
                  chName={character.name}
                  chImage={character.icon}
                  isDead={character.isDead}
                  showSpoilers={spoilers}
                />
              ))
            : null}
        </div>
        {franchise === "kh" ? (
          <div className="p-12 mt-16 flex justify-center items-center gap-2 text-white bg-gray-800 rounded-2xl ">
            <img className="w-10" src={Warning} />
            <div className="text-center px-3">
              <h1 className="font-bold text-xl">WORKING ON IT!! </h1>
              <span className="font-normal text-xl opacity-20">
                (still haven't played lol...)
              </span>
            </div>
            <img className="w-10" src={Warning} />
          </div>
        ) : null}
      </div>
    </main>
  );
}
