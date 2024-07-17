import React from "react";
import { useState } from "react";
import Warning from "../assets/imgs/warning.png";

// Components
import Card from "../components/Card/Card";
import FranchiseLogos from "../components/FranchiseLogos/FranchiseLogos";
import Buttons from "../components/Buttons/Buttons";
import Footer from "../components/Footer/Footer";

// Trigger Happy Havoc characters
import Aoi from "../assets/imgs/thhCharacters/aoi.png";
import Byakuya from "../assets/imgs/thhCharacters/byakuya.png";
import Celeste from "../assets/imgs/thhCharacters/celestia.png";
import Chihiro from "../assets/imgs/thhCharacters/chihiro.png";
import Hifumi from "../assets/imgs/thhCharacters/hifumi.png";
import Jack from "../assets/imgs/thhCharacters/jack.png";
import Junko from "../assets/imgs/thhCharacters/junko.png";
import Kirigiri from "../assets/imgs/thhCharacters/kyoko.png";
import Leon from "../assets/imgs/thhCharacters/leon.png";
import Mondo from "../assets/imgs/thhCharacters/mondo.png";
import Naegi from "../assets/imgs/thhCharacters/naegi.png";
import Sakura from "../assets/imgs/thhCharacters/sakura.png";
import Sayaka from "../assets/imgs/thhCharacters/sayaka.png";
import Taka from "../assets/imgs/thhCharacters/taka.png";
import Toko from "../assets/imgs/thhCharacters/toko.png";
import Yasuhiro from "../assets/imgs/thhCharacters/yasuhiro.png";

// Goodbye Despair characters
import Ibuki from "../assets/imgs/gdCharacters/ibuki.png";
import Mahiru from "../assets/imgs/gdCharacters/mahiru.png";
import Chiaki from "../assets/imgs/gdCharacters/chiaki.png";
import Peko from "../assets/imgs/gdCharacters/peko.png";
import Nagito from "../assets/imgs/gdCharacters/nagito.png";
import Soda from "../assets/imgs/gdCharacters/soda.png";
import Hajime from "../assets/imgs/gdCharacters/hajime.png";
import Fuyuhiko from "../assets/imgs/gdCharacters/fuyuhiko.png";
import Sonia from "../assets/imgs/gdCharacters/sonia.png";
import Hiyoko from "../assets/imgs/gdCharacters/hiyoko.png";
import Nekomaru from "../assets/imgs/gdCharacters/nekomaru.png";
import Mikan from "../assets/imgs/gdCharacters/mikan.png";
import Teruteru from "../assets/imgs/gdCharacters/teruteru.png";
import Akane from "../assets/imgs/gdCharacters/akane.png";
import Gundham from "../assets/imgs/gdCharacters/gundham.png";
import ByakuyaGD from "../assets/imgs/gdCharacters/byakuya.png";

// Killing Harmony
import Kaede from "../assets/imgs/khCharacters/kaede.png";
import Angie from "../assets/imgs/khCharacters/angie.png";
import Gonta from "../assets/imgs/khCharacters/gonta.png";
import Himiko from "../assets/imgs/khCharacters/himiko.png";
import Keebo from "../assets/imgs/khCharacters/keebo.png";
import Kaito from "../assets/imgs/khCharacters/kaito.png";
import Kirumi from "../assets/imgs/khCharacters/kirumi.png";
import Kokichi from "../assets/imgs/khCharacters/kokichi.png";
import Korekiyo from "../assets/imgs/khCharacters/korekiyo.png";
import Maki from "../assets/imgs/khCharacters/maki.png";
import Shuichi from "../assets/imgs/khCharacters/shuichi.png";
import Miu from "../assets/imgs/khCharacters/miu.png";
import Tsumugi from "../assets/imgs/khCharacters/tsumugi.png";
import Ryoma from "../assets/imgs/khCharacters/ryoma.png";
import Rantaro from "../assets/imgs/khCharacters/rantaro.png";
import Tenko from "../assets/imgs/khCharacters/tenko.png";

export default function Home() {
  const [franchise, setFranchise] = useState("thh");
  const [spoilers, setSpoilers] = useState(false);
  const [thhCharactersInfo, setThh] = useState([
    {
      id: "1",
      name: "Chihiro Fujisaki",
      ultimate: "Ultimate Programmer",
      isDead: true,
      icon: Chihiro,
    },
    {
      id: "2",
      name: "Toko Fuwaka",
      ultimate: "Ultimate Writing Prodigy",
      isDead: false,
      icon: Toko,
    },
    {
      id: "3",
      name: "Kyoko Kirigiri",
      ultimate: "Ultimate Detective",
      isDead: false,
      icon: Kirigiri,
    },
    {
      id: "4",
      name: "Kiyotaka Ishimaru",
      ultimate: "Ultimate Moral Compass",
      isDead: true,
      icon: Taka,
    },
    {
      id: "5",
      name: "Leon Kuwata",
      ultimate: "Ultimate Baseball Star",
      isDead: true,
      icon: Leon,
    },
    {
      id: "6",
      name: "Celestia Ludenberg",
      ultimate: "Ultimate Gambler",
      isDead: true,
      icon: Celeste,
    },
    {
      id: "7",
      name: "Naegi Makoto",
      ultimate: "Ultimate Lucky Student",
      isDead: false,
      icon: Naegi,
    },
    {
      id: "8",
      name: "Sakura Ogami",
      ultimate: "Ultimate Martial Artist",
      isDead: true,
      icon: Sakura,
    },
    {
      id: "9",
      name: "Mondo Owada",
      ultimate: "Ultimate Biker Gang",
      isDead: true,
      icon: Mondo,
    },
    {
      id: "10",
      name: "Genocide Jack",
      ultimate: "Ultimate Murderous Fiend",
      isDead: false,
      icon: Jack,
    },
    {
      id: "11",
      name: "Hifumi Yamada",
      ultimate: "Ultimate Fanfic Creator",
      isDead: true,
      icon: Hifumi,
    },
    {
      id: "12",
      name: "Junko Enoshima",
      ultimate: "Ultimate Fashionista",
      isDead: true,
      icon: Junko,
    },
    {
      id: "13",
      name: "Aoi Asahina",
      ultimate: "Ultimate Swimmer Pro",
      isDead: false,
      icon: Aoi,
    },
    {
      id: "14",
      name: "Byakuya Togami",
      ultimate: "Ultimate Affluent Progeny",
      isDead: false,
      icon: Byakuya,
    },
    {
      id: "15",
      name: "Yasuhiro Hagakute",
      ultimate: "Ultimate Clairvoyant",
      isDead: false,
      icon: Yasuhiro,
    },
    {
      id: "16",
      name: "Sayaka Maizono",
      ultimate: "Ultimate Pop Sensation",
      isDead: true,
      icon: Sayaka,
    },
  ]);

  const [khCharactersInfo, setKh] = useState([
    {
      id: "33",
      name: "Kaede Akamatsu",
      ultimate: "Ultimate Pianist",
      isDead: true,
      icon: Kaede,
    },
    {
      id: "34",
      name: "Angie Yonaga",
      ultimate: "Ultimate Artist",
      isDead: true,
      icon: Angie,
    },
    {
      id: "35",
      name: "Gonta Gokuhara",
      ultimate: "Ultimate Entomologist",
      isDead: true,
      icon: Gonta,
    },
    {
      id: "36",
      name: "Himiko Yumeno",
      ultimate: "Ultimate Magician",
      isDead: false,
      icon: Himiko,
    },
    {
      id: "37",
      name: "K1-B0",
      ultimate: "Ultimate Robot",
      isDead: true,
      icon: Keebo,
    },
    {
      id: "38",
      name: "Kaito",
      ultimate: "Ultimate Astronaut",
      isDead: true,
      icon: Kaito,
    },
    {
      id: "39",
      name: "Kirumi",
      ultimate: "Ultimate Maid",
      isDead: true,
      icon: Kirumi,
    },
    {
      id: "40",
      name: "Kokichi",
      ultimate: "Ultimate Supreme Leader",
      isDead: true,
      icon: Kokichi,
    },
    {
      id: "41",
      name: "Korekiyo",
      ultimate: "Ultimate Anthropologist",
      isDead: true,
      icon: Korekiyo,
    },
    {
      id: "42",
      name: "Maki",
      ultimate: "Ultimate Child Caregiver",
      isDead: false,
      icon: Maki,
    },
    {
      id: "43",
      name: "Shuichi Saihara",
      ultimate: "Ultimate Detective",
      isDead: false,
      icon: Shuichi,
    },
    {
      id: "44",
      name: "Miu Iruma",
      ultimate: "Ultimate Inventor",
      isDead: true,
      icon: Miu,
    },
    {
      id: "45",
      name: "Ryoma Hoshi",
      ultimate: "Ultimate Tennis Pro",
      isDead: true,
      icon: Ryoma,
    },
    {
      id: "46",
      name: "Tsumugi Shirogane",
      ultimate: "Ultimate Child Caregiver",
      isDead: true,
      icon: Tsumugi,
    },
    {
      id: "47",
      name: "Rantaro",
      ultimate: "Ultimate ???",
      isDead: true,
      icon: Rantaro,
    },
    {
      id: "48",
      name: "Tenko Chabashira",
      ultimate: "Ultimate Aikido",
      isDead: true,
      icon: Tenko,
    },
  ]);
  const [gdCharactersInfo, setGd] = useState([
    {
      id: "17",
      name: "Sonia Nevermind",
      ultimate: "Ultimate Princess",
      isDead: false,
      icon: Sonia,
    },
    {
      id: "18",
      name: "Gundham Tanaka",
      ultimate: "Ultimate Breeder",
      isDead: true,
      icon: Gundham,
    },
    {
      id: "19",
      name: "Peko Pekoyama",
      ultimate: "Ultimate Swordswoman",
      isDead: true,
      icon: Peko,
    },
    {
      id: "20",
      name: "Akane Owana",
      ultimate: "Ultimate Gymnast",
      isDead: false,
      icon: Akane,
    },
    {
      id: "21",
      name: "Chiaki Nanami",
      ultimate: "Ultimate Gamer",
      isDead: true,
      icon: Chiaki,
    },
    {
      id: "22",
      name: "Fuyuhiko Kuruzyu",
      ultimate: "Ultimate Yakuza",
      isDead: false,
      icon: Fuyuhiko,
    },
    {
      id: "23",
      name: "Ibuki Mioda",
      ultimate: "Ultimate Musician",
      isDead: true,
      icon: Ibuki,
    },
    {
      id: "24",
      name: "Mikan Tsumiki",
      ultimate: "Ultimate Nurse",
      isDead: true,
      icon: Mikan,
    },
    {
      id: "25",
      name: "Teruteru Hanamura",
      ultimate: "Ultimate Cook",
      isDead: true,
      icon: Teruteru,
    },
    {
      id: "26",
      name: "Kazuichi Soda",
      ultimate: "Ultimate Mechanic",
      isDead: false,
      icon: Soda,
    },
    {
      id: "27",
      name: "Byakuya Togami",
      ultimate: "Ultimate Affluent Progeny (?)",
      isDead: true,
      icon: ByakuyaGD,
    },
    {
      id: "28",
      name: "Hajime Hinata",
      ultimate: "Ultimate ???",
      isDead: false,
      icon: Hajime,
    },
    {
      id: "29",
      name: "Mahiru Koizumi",
      ultimate: "Ultimate Photographer",
      isDead: true,
      icon: Mahiru,
    },
    {
      id: "30",
      name: "Nagito Komaeda",
      ultimate: "Ultimate Lucky Student",
      isDead: true,
      icon: Nagito,
    },
    {
      id: "31",
      name: "Hiyoko Saijoni",
      ultimate: "Ultimate Traditional Dancer",
      isDead: true,
      icon: Hiyoko,
    },
    {
      id: "32",
      name: "Nekomaru Nidai",
      ultimate: "Ultimate Team Manager",
      isDead: true,
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
        if (franchise === "gd") {
          gdCharactersInfo.sort((b, a) => a.name.localeCompare(b.name));
          setGd([...gdCharactersInfo]);
        } else {
          khCharactersInfo.sort((b, a) => a.name.localeCompare(b.name));
          setKh([...khCharactersInfo]);
        }
      }
      setSort("AZ");
    } else {
      if (franchise === "thh") {
        thhCharactersInfo.sort((b, a) => b.name.localeCompare(a.name));
        setThh([...thhCharactersInfo]);
      } else {
        if (franchise === "gd") {
          gdCharactersInfo.sort((b, a) => b.name.localeCompare(a.name));
          setGd([...gdCharactersInfo]);
        } else {
          khCharactersInfo.sort((b, a) => b.name.localeCompare(a.name));
          setKh([...khCharactersInfo]);
        }
      }
      setSort("ZA");
    }
  };
  return (
    <main className={`bg-[url("./assets/imgs/thhBanner.png")]`}>
      <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-[rgba(0,0,0,0.9)] max-md:bg-[rgba(0,0,0,0.85)]">
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
        <div className="flex flex-wrap justify-center">
          {franchise === "thh"
            ? thhCharactersInfo.map((character, index) => (
                <Card
                  key={index}
                  chID={character.id}
                  chName={character.name}
                  chImage={character.icon}
                  isDead={character.isDead}
                  chUltimate={character.ultimate}
                  showSpoilers={spoilers}
                />
              ))
            : null}
          {franchise === "gd"
            ? gdCharactersInfo.map((character, index) => (
                <Card
                  key={index}
                  chID={character.id}
                  chName={character.name}
                  chImage={character.icon}
                  isDead={character.isDead}
                  chUltimate={character.ultimate}
                  showSpoilers={spoilers}
                />
              ))
            : null}
          {franchise === "kh"
            ? khCharactersInfo.map((character, index) => (
                <Card
                  key={index}
                  chID={character.id}
                  chName={character.name}
                  chImage={character.icon}
                  isDead={character.isDead}
                  chUltimate={character.ultimate}
                  showSpoilers={spoilers}
                />
              ))
            : null}
        </div>
      </div>
      <Footer />
    </main>
  );
}
