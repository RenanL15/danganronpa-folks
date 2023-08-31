import React from "react";
import { useState, useEffect } from "react";
import Warning from "./assets/imgs/warning.png";

// Components
import Card from "./components/Card/Card";
import FranchiseLogos from "./components/FranchiseLogos/FranchiseLogos";
import Buttons from "./components/Buttons/Buttons";
import Footer from "./components/Footer/Footer";

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
    {
      name: "Chihiri Fujisaki",
      ultimate: "Ultimate Programmer",
      isDead: true,
      icon: Chihiri,
    },
    {
      name: "Toko Fuwaka",
      ultimate: "Ultimate Writing Prodigy",
      isDead: false,
      icon: Toko,
    },
    {
      name: "Kyoko Kirigiri",
      ultimate: "Ultimate Detective",
      isDead: false,
      icon: Kirigiri,
    },
    {
      name: "Kiyotaka Ishimaru",
      ultimate: "Ultimate Moral Compass",
      isDead: true,
      icon: Taka,
    },
    {
      name: "Leon Kuwata",
      ultimate: "Ultimate Baseball Star",
      isDead: true,
      icon: Leon,
    },
    {
      name: "Celestia Ludenberg",
      ultimate: "Ultimate Gambler",
      isDead: true,
      icon: Celeste,
    },
    {
      name: "Naegi Makoto",
      ultimate: "Ultimate Lucky Student",
      isDead: false,
      icon: Naegi,
    },
    {
      name: "Sakuna Ogami",
      ultimate: "Ultimate Martial Artist",
      isDead: true,
      icon: Sakuna,
    },
    {
      name: "Mondo Owada",
      ultimate: "Ultimate Biker Gang",
      isDead: true,
      icon: Mondo,
    },
    {
      name: "Genocide Jack",
      ultimate: "Ultimate Murderous Fiend",
      isDead: false,
      icon: Jack,
    },
    {
      name: "Hifumi Yamada",
      ultimate: "Ultimate Fanfic Creator",
      isDead: true,
      icon: Hifumi,
    },
    {
      name: "Junko Enoshima",
      ultimate: "Ultimate Fashionista",
      isDead: true,
      icon: Junko,
    },
    {
      name: "Aoi Asahina",
      ultimate: "Ultimate Swimmer Pro",
      isDead: false,
      icon: Aoi,
    },
    {
      name: "Byakuya Togami",
      ultimate: "Ultimate Affluent Progeny",
      isDead: false,
      icon: Byakuya,
    },
    {
      name: "Yasuhiro Hagakute",
      ultimate: "Ultimate Clairvoyant",
      isDead: false,
      icon: Yasuhiro,
    },
    {
      name: "Sayaka Maizono",
      ultimate: "Ultimate Pop Sensation",
      isDead: true,
      icon: Sayaka,
    },
  ]);

  const [gdCharactersInfo, setGd] = useState([
    {
      name: "Sonia Nevermind",
      ultimate: "Ultimate ",
      isDead: false,
      icon: Sonia,
    },
    {
      name: "Gundham Tanaka",
      ultimate: "Ultimate Breeder",
      isDead: false,
      icon: Gundham,
    },
    {
      name: "Peko Pekoyama",
      ultimate: "Ultimate Swordswoman",
      isDead: true,
      icon: Peko,
    },
    { name: "Akane Owana", ultimate: "Ultimate ", isDead: false, icon: Akane },
    {
      name: "Chiaki Nanami",
      ultimate: "Ultimate Gamer",
      isDead: false,
      icon: Chiaki,
    },
    {
      name: "Fuyuhiko Kuruzyu",
      ultimate: "Ultimate Yakuza",
      isDead: false,
      icon: Fuyuhiko,
    },
    {
      name: "Ibuki Mioda",
      ultimate: "Ultimate Musician",
      isDead: true,
      icon: Ibuki,
    },
    {
      name: "Mikan Tsumiki",
      ultimate: "Ultimate Nurse",
      isDead: false,
      icon: Mikan,
    },
    {
      name: "Teruteru Hanamura",
      ultimate: "Ultimate Cook",
      isDead: true,
      icon: Teruteru,
    },
    { name: "Kazuichi Soda", ultimate: "Ultimate ", isDead: false, icon: Soda },
    {
      name: "Byakuya Togami",
      ultimate: "Ultimate Affluent Progeny (?)",
      isDead: true,
      icon: ByakuyaGD,
    },
    {
      name: "Hajime Hinata",
      ultimate: "Ultimate ???",
      isDead: false,
      icon: Hajime,
    },
    {
      name: "Mahiru Koizumi",
      ultimate: "Ultimate Photographer",
      isDead: true,
      icon: Mahiru,
    },
    {
      name: "Nagito Komaeda",
      ultimate: "Ultimate Lucky Student",
      isDead: false,
      icon: Nagito,
    },
    {
      name: "Hiyoko Saijoni",
      ultimate: "Ultimate Traditional Dancer",
      isDead: true,
      icon: Hiyoko,
    },
    {
      name: "Nekomaru Nidai",
      ultimate: "Ultimate ",
      isDead: false,
      icon: Nekomaru,
    },
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
      <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-[rgba(0,0,0,0.9)] max-md:bg-[rgba(0,0,0,0.8)]">
        <FranchiseLogos
          franchise={franchise}
          setFranchise={setFranchise}
          setSpoilers={setSpoilers}
          setSort={setSort}
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
                  chUltimate={character.ultimate}
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
                  chUltimate={character.ultimate}
                  showSpoilers={spoilers}
                />
              ))
            : null}
        </div>
        {franchise === "kh" ? (
          <div className="flex items-center justify-center gap-2 p-12 mt-16 text-white bg-gray-800 rounded-2xl ">
            <img className="w-10" src={Warning} />
            <div className="px-3 text-center">
              <h1 className="text-xl font-bold">WORKING ON IT!! </h1>
              <span className="text-xl font-normal opacity-20">
                (still haven't played lol...)
              </span>
            </div>
            <img className="w-10" src={Warning} />
          </div>
        ) : null}
      </div>
      <Footer />
    </main>
  );
}
