import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";

// Trigger Happy Havoc characters
import Aoi from "../assets/imgs/thhCharacters/full/aoi.png";
import Byakuya from "../assets/imgs/thhCharacters/full/byakuya.png";
import Celeste from "../assets/imgs/thhCharacters/full/celestia.png";
import Chihiro from "../assets/imgs/thhCharacters/full/chihiro.png";
import Hifumi from "../assets/imgs/thhCharacters/full/hifumi.png";
import Jack from "../assets/imgs/thhCharacters/full/jack.png";
import Junko from "../assets/imgs/thhCharacters/full/junko.png";
import Kirigiri from "../assets/imgs/thhCharacters/full/kyoko.png";
import Leon from "../assets/imgs/thhCharacters/full/leon.png";
import Mondo from "../assets/imgs/thhCharacters/full/mondo.png";
import Naegi from "../assets/imgs/thhCharacters/full/naegi.png";
import Sakura from "../assets/imgs/thhCharacters/full/sakura.png";
import Sayaka from "../assets/imgs/thhCharacters/full/sayaka.png";
import Taka from "../assets/imgs/thhCharacters/full/taka.png";
import Toko from "../assets/imgs/thhCharacters/full/toko.png";
import Yasuhiro from "../assets/imgs/thhCharacters/full/yasuhiro.png";

export default function Characters() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    ultimate: "",
    history: [``, ``],
    description: "",
    icon: "",
  });
  const charactersInfo = [
    {
      id: "1",
      name: "Chihiro Fujisaki",
      ultimate: "Ultimate Programmer",
      description: `Chihiro Fujisaki (不二咲 千尋), is a student in Hope's Peak Academy's Class 78th, and a participant of the Killing School Life featured in Danganronpa: Trigger Happy Havoc. Chihiro's title is the Ultimate Programmer.`,
      history: [
        `When Chihiro was a child, he became the subject of harassment and bullying. He was always told to "be a man" and that he was "so weak despite being a boy", and because of that, Chihiro slowly but surely began to develop a "weakness complex". In order to escape the bullying, Chihiro began to dress as a girl so that people wouldn't bully him as a weak boy. This only served to worsen his complex, as it wasn't addressing the root of his problems, and he would get bullied even more if the truth was found out.`,
        `Because he was too weak to play outside with his friends, Chihiro spent most of his time on the computer. His father, Taichi Fujisaki, was a software engineer that developed many major computer programs, and while using his computer Chihiro found an incomplete information retrieval system that utilized voice input. This led to him creating his own modifications to it, and he soon realized that he could write programs by himself. Chihiro's father praised him for his work and, as he finally found something he could take pride in, he became absorbed in programming.`,
      ],
      isDead: true,
      icon: Chihiro,
    },
    {
      id: "2",
      name: "Toko Fuwaka",
      ultimate: "Ultimate Writing Prodigy",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Toko,
    },
    {
      id: "3",
      name: "Kyoko Kirigiri",
      ultimate: "Ultimate Detective",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Kirigiri,
    },
    {
      id: "4",
      name: "Kiyotaka Ishimaru",
      ultimate: "Ultimate Moral Compass",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Taka,
    },
    {
      id: "5",
      name: "Leon Kuwata",
      ultimate: "Ultimate Baseball Star",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Leon,
    },
    {
      id: "6",
      name: "Celestia Ludenberg",
      ultimate: "Ultimate Gambler",
      history: [
        `Celestia was a notorious liar - to the point of earning the nickname "Queen of Liars" - and so it is difficult to determine what, if any, of her self-reported life prior to the Killing Game is fact. By all accounts, it seems she was given the given name Taeko Yasuhiro and born into a likely working-class family in the capital of Tochigi Prefecture, Utsunomiya where she came to love its most famous food, gyoza. As mentioned in Danganronpa Kirigiri, Celestia had been a gambler for at least 4 years before becoming a student in Hope's Peak Academy.`,
        `She has defeated many known gamblers including Ryou Ooba (a former gambler), which caused him to completely give it up. Ryou described her as crushing him in no time at all, and leaving as quickly as she came. Celestia had a cat named Grand Bois Chéri Ludenberg whom she spoiled and loved dearly. She taught him to enjoy eating gyoza and made it his favorite food, an example of their close bond. Grand Bois became a captive for Monokuma's first motive during the Killing School Life, which revealed that he meant more to Celestia than any possible living relatives.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Celeste,
    },
    {
      id: "7",
      name: "Naegi Makoto",
      ultimate: "Ultimate Lucky Student",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Naegi,
    },
    {
      id: "8",
      name: "Sakura Ogami",
      ultimate: "Ultimate Martial Artist",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Sakura,
    },
    {
      id: "9",
      name: "Mondo Owada",
      ultimate: "Ultimate Biker Gang",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Mondo,
    },
    {
      id: "10",
      name: "Genocide Jack",
      ultimate: "Ultimate Murderous Fiend",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Jack,
    },
    {
      id: "11",
      name: "Hifumi Yamada",
      ultimate: "Ultimate Fanfic Creator",
      history: [
        `Presumably, as a young child, Hifumi described himself as a "mild-mannered boy who liked to draw" and "without a single friend". He apparently did not believe when people, mostly women, were genuinely kind to him. So much so, he would yell at them to leave whenever they attempted to talk to him and enjoyed doing so.`,
        `At an unknown part in his early life, Hifumi watched an episode of the anime Demon Angel☆Pretty Pudgy Princess starring Princess Piggles. He didn't care at the time, saying it was just another "magical girl anime", but later he claimed Piggles came to him in a dream and that he fell in love with her when on a date. He then began to purchase all the Princess Piggles merchandise he could find and to draw nothing but her since he couldn't show his love any other way.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Hifumi,
    },
    {
      id: "12",
      name: "Junko Enoshima",
      ultimate: "Ultimate Fashionista",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Junko,
    },
    {
      id: "13",
      name: "Aoi Asahina",
      ultimate: "Ultimate Swimmer Pro",
      history: [
        `Aoi was always an extremely sporty person who loved to exercise, and participated in many team sports during her school career, including track, basketball, softball, volleyball, tennis, and her favorite sport: competitive swimming. Since elementary school, she broke records in every swimming contest she entered, and was chosen to become an Olympic cadet. Her younger brother Yuta was also a competitive and talented swimmer, but not - by his own admission - as talented as Aoi.`,
        `During the Tragedy, Jin Kirigiri, the Headmaster of Hope's Peak Academy, planned to seal the school building and let the students live forever inside the Academy in order to protect them from the destruction. The class agreed to his plan, and they sealed the building together. The students lived peacefully inside the school building for a year without knowing that the Ultimate Despair members were already in their midst.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Aoi,
    },
    {
      id: "14",
      name: "Byakuya Togami",
      ultimate: "Ultimate Affluent Progeny",
      history: [
        `Byakuya is the heir to the worldwide financial conglomerate that is the Togami family. The Togami family has a "peculiar inheritance system", in which the male head of the family does not take a wife, but instead couples with exceptional women from around the world, in order to bear as many children as possible. As such, Byakuya had fifteen half-siblings, all potential heirs to the Togami family and fortune.`,
        `Byakuya and his siblings were forced to battle against one another to become the next head of the family, and Byakuya was the last one standing, the first time in the history of the Togami family that the youngest male had won. The siblings who lost the battle were exiled from the family, considered "unfit for the name of Togami", and given a commoner life. Byakuya akins it to being killed, because being exiled is like death.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Byakuya,
    },
    {
      id: "15",
      name: "Yasuhiro Hagakute",
      ultimate: "Ultimate Clairvoyant",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Yasuhiro,
    },
    {
      id: "16",
      name: "Sayaka Maizono",
      ultimate: "Ultimate Pop Sensation",
      history: [``, ``],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
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
    setHistory(getCharacters().history[0]);
  }, []);

  const [history, setHistory] = useState(character.history[0]);

  console.log(history);

  return (
    <div className="bg-[url(../src/assets/imgs/thhBanner.png)]">
      <div className="flex justify-center bg-[rgba(30,30,31,0.95)] min-h-screen">
        <div className="flex justify-center items-center text-3xl font-['PT_Sans'] overflow-hidden">
          <img
            className="w-72 absolute left-40 w-64"
            src={character.icon}
            alt={character.name + " icon"}
          />
          <div className="flex flex-col justify-center items-center gap-8 px-24 py-8 ">
            <div className="gap-4 w-screen table overflow-hidden bg-slate-100 shadow-2xl">
              <h1 className="text-6xl text-center p-5 text-yellow-500 bg-slate-950">
                {character.name}
              </h1>
              <div className="p-10">
                <div className=" ml-[30rem] flex items-center w-[60rem]">
                  <i
                    onClick={() => setHistory(getCharacters().history[0])}
                    className="text-6xl mr-12 cursor-pointer fa-solid fa-chevron-left"></i>
                  <div>
                    <h2 className="text-yellow-700">{character.ultimate}</h2>
                    <p className="font-serif leading-[3rem] mt-5 text-justify transition-all duration-200">
                      {history}
                    </p>
                  </div>
                  <i
                    onClick={() => setHistory(getCharacters().history[1])}
                    className="text-6xl ml-12 cursor-pointer fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 px-10 py-2 cursor-pointer bg-yellow-600 rounded-xl">
              <i className="fa-solid fa-caret-left"></i>
              <span className="">Back to characters</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
