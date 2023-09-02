import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";

// Trigger Happy Havoc characters
import Aoi from "../assets/imgs/thhCharacters/aoi.png";
import Byakuya from "../assets/imgs/thhCharacters/byakuya.png";
import Celeste from "../assets/imgs/thhCharacters/celestia.png";
import Chihiri from "../assets/imgs/thhCharacters/chihiri.png";
import Hifumi from "../assets/imgs/thhCharacters/hifumi.png";
import Jack from "../assets/imgs/thhCharacters/jack.png";
import Junko from "../assets/imgs/thhCharacters/junko.png";
import Kirigiri from "../assets/imgs/thhCharacters/kyoko.png";
import Leon from "../assets/imgs/thhCharacters/leon.png";
import Mondo from "../assets/imgs/thhCharacters/mondo.png";
import Naegi from "../assets/imgs/thhCharacters/naegi.png";
import Sakuna from "../assets/imgs/thhCharacters/sakuna.png";
import Sayaka from "../assets/imgs/thhCharacters/sayaka.png";
import Taka from "../assets/imgs/thhCharacters/taka.png";
import Toko from "../assets/imgs/thhCharacters/toko.png";
import Yasuhiro from "../assets/imgs/thhCharacters/yasuhiro.png";

export default function Characters() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    ultimate: "",
    description: "",
    icon: "",
  });
  const charactersInfo = [
    {
      id: "1",
      name: "Chihiri Fujisaki",
      ultimate: "Ultimate Programmer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Chihiri,
    },
    {
      id: "2",
      name: "Toko Fuwaka",
      ultimate: "Ultimate Writing Prodigy",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: false,
      icon: Toko,
    },
    {
      id: "3",
      name: "Kyoko Kirigiri",
      ultimate: "Ultimate Detective",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: false,
      icon: Kirigiri,
    },
    {
      id: "4",
      name: "Kiyotaka Ishimaru",
      ultimate: "Ultimate Moral Compass",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Taka,
    },
    {
      id: "5",
      name: "Leon Kuwata",
      ultimate: "Ultimate Baseball Star",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Leon,
    },
    {
      id: "6",
      name: "Celestia Ludenberg",
      ultimate: "Ultimate Gambler",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Celeste,
    },
    {
      id: "7",
      name: "Naegi Makoto",
      ultimate: "Ultimate Lucky Student",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: false,
      icon: Naegi,
    },
    {
      id: "8",
      name: "Sakuna Ogami",
      ultimate: "Ultimate Martial Artist",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Sakuna,
    },
    {
      id: "9",
      name: "Mondo Owada",
      ultimate: "Ultimate Biker Gang",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Mondo,
    },
    {
      id: "10",
      name: "Genocide Jack",
      ultimate: "Ultimate Murderous Fiend",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: false,
      icon: Jack,
    },
    {
      id: "11",
      name: "Hifumi Yamada",
      ultimate: "Ultimate Fanfic Creator",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Hifumi,
    },
    {
      id: "12",
      name: "Junko Enoshima",
      ultimate: "Ultimate Fashionista",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Junko,
    },
    {
      id: "13",
      name: "Aoi Asahina",
      ultimate: "Ultimate Swimmer Pro",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: false,
      icon: Aoi,
    },
    {
      id: "14",
      name: "Byakuya Togami",
      ultimate: "Ultimate Affluent Progeny",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: false,
      icon: Byakuya,
    },
    {
      id: "15",
      name: "Yasuhiro Hagakute",
      ultimate: "Ultimate Clairvoyant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: false,
      icon: Yasuhiro,
    },
    {
      id: "16",
      name: "Sayaka Maizono",
      ultimate: "Ultimate Pop Sensation",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod explicabo velit ex unde aspernatur ratione, sunt nobis eos vitae non ut quibusdam impedit excepturi doloremque rem? Officiis, architecto neque!",
      isDead: true,
      icon: Sayaka,
    },
  ];
  function getCharacters() {
    return charactersInfo.find((e) => e.id === id);
  }
  console.log(id);

  useEffect(() => {
    setCharacter(getCharacters());
  }, []);

  return (
    <div className="bg-[url(../src/assets/imgs/thhBanner.png)]">
      <div className="flex justify-center bg-[rgba(30,30,31,0.95)] min-h-screen">
        <div className="flex justify-center items-center text-3xl font-['PT_Sans'] overflow-hidden">
          <img
            className="w-72 absolute left-40"
            src={character.icon}
            alt={character.name + " icon"}
          />
          <div className="flex flex-col justify-center items-center gap-8 px-24 py-8 ">
            <div className="gap-4 w-screen table overflow-hidden bg-slate-100 shadow-2xl">
              <h1 className="text-6xl text-center p-5 text-yellow-500 bg-slate-950">
                {character.name}
              </h1>
              <div className="flex justify-center p-10">
                <div className="w-[40rem]">
                  <h2 className="text-yellow-700">{character.ultimate}</h2>
                  <p className="font-['Barlow'] leading-10">
                    {character.description}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-10 py-2 bg-yellow-600 rounded-xl">
              Back to characters
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
