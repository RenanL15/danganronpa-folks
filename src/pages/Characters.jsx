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
import Angie from "../assets/imgs/khCharacters/angie.png";
import Kaede from "../assets/imgs/khCharacters/kaede.png";

export default function Characters() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    ultimate: "",
    history: [],
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
      history: [
        `At the hospital where Toko was born, a baby born at the same time died in a medical accident. It was unclear which mother's child was the dead baby. Both mothers refused to test their blood, as they both wanted their child to die. Around the child's accidental death, it became clear that the two women slept with the same man.`,
        `Toko lived with one father and two mothers. Though the circumstances are a bit unclear, it's been confirmed that she was mistreated as a child. She was once locked into a closet and forced to stay there for three days without food. This traumatic experience resulted in her developing a pathological fear of the dark. She experienced severe psychological pressure and at some point turned to novels for comfort, but her negative feelings were too strong. This childhood trauma caused her to form Dissociative Identity Disorder (DID), with one alter named Genocide Jack. Jack was a serial killer who murdered several young men; the people on the internet, unaware of her gender, started to call her Genocide Jack. Toko blamed her mothers for Genocide Jack's creation.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Toko,
    },
    {
      id: "3",
      name: "Kyoko Kirigiri",
      ultimate: "Ultimate Detective",
      history: [
        `Some time afterward, Jin married a woman from Uzuchi family and they had Kyoko. It appears that when she was very young, she and her father spent some time with Jin's close friend Koichi Kizakura. After learning about her existence, Fuhito invited Jin back to the family solely because he wanted to make the girl his heir. He began strict training to make Kyoko a true detective, though Jin still very much disliked his father. When Kyoko was only 7 years old, her mother turned ill and was hospitalized when Kyoko and Fuhito were doing detective work abroad. Jin tried to contact them, but Fuhito refused to aid his family and didn't even let Kyoko see her dying mother, because to Fuhito being a detective was more important than anything else.`,
        `Kyoko's mother then died, with Kyoko's last memories of her being "a white face floating above a hospital bed". Absolutely furious with his father, Jin left the family, and Fuhito encouraged Kyoko to hate him by claiming that Jin only used her mother's death as an excuse to leave the family and pursue his own dreams.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Kirigiri,
    },
    {
      id: "4",
      name: "Kiyotaka Ishimaru",
      ultimate: "Ultimate Moral Compass",
      history: [
        `During Kiyotaka's early life, his grandfather, Toranosuke Ishimaru, was once Prime Minister of Japan; a title Kiyotaka believed he gained through his own natural genius rather than any hard work. After only a few months in office, the public opinion of Toranosuke changed from high praise to widespread criticism due to a disastrous scandal, and he was forced to step down. After that, his business collapsed and the Ishimaru Family was left mistrusted and in huge debts which Kiyotaka has stated “Still have not been paid off, and continue to trouble my family to this day” and “My family is middle-class... No, we are below even that...” His family name shamed, Kiyotaka's grandfather allegedly spent the last years of his life in shamed silence.`,
        `Kiyotaka gained a deep resentment for his grandfather and the label of “genius” that was associated with him, though he simultaneously seemed to feel sorry for him and believed that his grandfather's tragedy was an important lesson for him. He swore to restore honor to his family name by gaining his success through hard work rather than natural talent, sacrificing hobbies, and most of his social interactions for study sessions and good grades, even going as far to tell Makoto he never played video games or watched TV due to his dedication. Because of this, his social skills suffered and he didn't have any friends. He was a model student in his middle school, known for participating in its morals committee (disciplinary committee in the original Japanese game).`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Taka,
    },
    {
      id: "5",
      name: "Leon Kuwata",
      ultimate: "Ultimate Baseball Star",
      history: [
        `Leon was very close to his cousin, Kanon Nakajima, since they were very young. Leon's father was the older brother of Kanon's father. Kanon was in love with Leon throughout their childhood and repeatedly tried to get him to notice her feelings for him, although he only ever saw her as a little sister. In middle school, Leon became a very skilled baseball player, and Kanon became the manager of his baseball team so she could watch him play. He was an ace in his position as the fourth batter at his school. However, Leon himself claimed that due to his exceptional natural talent for baseball, he was practically forced to play by other people since young age. Leon later attended LL Academy high school. To win the heart of a girl that he happened to meet at the hair salon, he became determined to change his title to Ultimate Musician. His hair and clothing style changed completely.`,
        `During the Tragedy, Jin Kirigiri, the Headmaster of Hope's Peak Academy, planned to seal the school building and let the students live forever inside the Academy in order to protect them from the destruction. The class agreed to his plan, and they sealed the building together. Leon helped his classmates seal up the windows. The students lived peacefully inside the school building for a year without knowing that the Ultimate Despair members were already in their midst.`,
      ],
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
      history: [
        `Makoto lived a normal life with his parents and little sister, Komaru. They also had a dog during his childhood. Although sometimes he didn't get along with his sister, he had a close relationship with Komaru. The two watched TV and shared thoughts on manga together.`,
        `In middle school, Makoto went to Blackroot Junior High with Sayaka Maizono, however he was in class 2 while Sayaka was in class 4. He found a lost crane and rescued it; this act of kindness caught her attention, and that was how she remembers him even years later. It's implied that Makoto had a crush on her, but they never talked due to them being in different social standards. Later, he went to Dusk High School.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Naegi,
    },
    {
      id: "8",
      name: "Sakura Ogami",
      ultimate: "Ultimate Martial Artist",
      history: [
        `The Ogami family had maintained their dojo for over three centuries. They lived close to nature and had an old-fashioned life style. Sakura was the only daughter born into her clan in her generation, and so was compelled to become even stronger than her male family members in order to prove her worth. As a child, Sakura trained at her family's dojo every day with her father. She fought champions of many disciplines until slowly overtime she was able to defeat everyone she fought. She was strong despite her slim and fair build. She surpassed her own father at the age of 14 after beating him in a grappling match, never losing to him again after that day. Her goal was to become the Strongest Human Alive.`,
        `Sakura's first love and lifelong rival was a man named Kenshiro, a street fighter that she could not defeat, and the then-current Strongest Human Alive. While Sakura considered such feelings extremely embarrassing for a fighter like her and didn't want anyone to know about them, Kenshiro supported her by stating that she doesn't have to be "manly" nor a man to become the strongest person in the world. However, Kenshiro then developed a terminal illness with a prognosis of only six months to live. Sakura visited him soon after his diagnosis, and his condition had deteriorated quickly, becoming emaciated. Kenshiro gave Sakura his title of Strongest Human Alive, but she vowed she would earn the title herself by fighting him again after he had defeated his disease. This inspired her to begin building up her physical strength even further.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Sakura,
    },
    {
      id: "9",
      name: "Mondo Owada",
      ultimate: "Ultimate Biker Gang",
      history: [
        `Mondo grew up with his older brother, Daiya Owada. He owned a Maltese dog named Chuck who he loved deeply. Chuck used to bring in the newspaper every morning when it was delivered to Mondo's home and would always beg Mondo for walks each day but died at the age of nine sometime during Mondo's childhood. He was raised by his brother to become strong and mentioned that his mother would kill him if he were ever to hit a woman.`,
        `He became dedicated to biking when he was young, being first allowed to ride with The Crazy Diamonds through his older brother Daiya Owada who invited him into the gang. Mondo was inspired by his older brother to take up biking and helped continue to transform The Crazy Diamonds into a well-known biker gang. From then on both brothers were known as The Diamond Brothers, a well-known name across Japan. Mondo constantly lived in Daiya's shadow. When he first began riding he ended up at the back of the group which ended in him being caught by the police, causing a scuffle. Despite this Mondo was still able to rise through the ranks with perseverance and patience.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Mondo,
    },
    {
      id: "10",
      name: "Genocide Jack",
      ultimate: "Ultimate Murderous Fiend",
      history: [
        `Genocide Jack is a murderous fiend who killed any man she found handsome. She murdered all of her victims by crucifying them with her Genoscissors. Her calling card is writing the word "Bloodlust" in the victim's blood on a nearby wall ("Bloodbath Fever" in original Japanese). Her victims were also written about in the Genocide Jack's secret book. In one of her free time events, she revealed that her very first victim was her and Toko's first love, one of her elementary school classmates who pinned the love letter she wrote him on the bulletin board as a way of mocking her. Genocide Jack reacted by following the boy to Shikoku and killing him. By the time Toko went to Hope's Peak, she killed 37 people.`,
        `She states Toko's life in a repressed modern society caused her to develop Dissociative Identity Disorder, which created Jack as an expression of Toko's repressed emotions. In Danganronpa Another Episode, Toko revealed that Genocide Jack was the result of her rough and often neglectful home life.`,
      ],
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
      history: [
        `Much of Junko's early life is unknown. As children, Junko and her twin sister Mukuro lived in abject conditions and were even homeless at one point. As she puts it, she regretted the moment of her own birth, feeling that her birth into the world was a mistake. Due to her analytical skills allowing her to predict the outcome of events, she became bored with the world. Because of that, she took an interest in despair, which she believes is unpredictable and exciting, at a very young age.`,
        `As a child, she was close with Yasuke Matsuda, as they didn't have any other friends. One particular moment between the two when they were elementary school students was when Junko spent a month building a sand sculpture modeled after the Sagrada Familia church at the public park, and she even used very advanced techniques for her age. The sculpture got closer to completion and many people from around the neighborhood came over just to watch her work.`,
      ],
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
      history: [
        `Yasuhiro lived alone with his mother, Hiroko Hagakure, who loves him dearly despite his many flaws. Very little is known about his father, though his father apparently lived with them at some point, as Yasuhiro once mentioned their house burning down because his father fell asleep with a burning cigarette. According to his mother, there was some sort of trouble between them because she did something and let it go on too long, causing them to break up. Yasuhiro himself had several problems with women and money, and he was also held back about four times in middle and high school. He used to attend Kiiwatetsu Commerce High School.`,
        `Yasuhiro saved up a small fortune by offering his services as a Fortune-Teller. Whilst his predictions rate alone netted him on most clients, it is also implied that he scammed much more. He claims to have spent the money on rare artifacts of mystical origins, such as a 100-million-yen crystal ball that was allegedly owned by Napoleon Bonaparte and George Washington. These were invariably proved to be forgeries.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: false,
      icon: Yasuhiro,
    },
    {
      id: "16",
      name: "Sayaka Maizono",
      ultimate: "Ultimate Pop Sensation",
      history: [
        `Sayaka was raised solely by her father, as her mother had passed away. Because her father worked long hours every day, Sayaka spent a lot of time alone at home. The only thing that kept her from feeling lonely was the idol live show she watched on television. The idol girls' smiles were a source of strength for her, and she became determined to become an idol herself so that she could give that same strength to others. However, it is noted that she was so determined to achieve her dream that she made multiple sacrifices and did bad things to follow through and do so.`,
        `Sayaka and Makoto Naegi both went to Sixth Black Root Middle School, though were unaware of each other's character because they weren't in the same classes and social groups. On one occasion, Sayaka saw Makoto nurse an injured crane back to health after it got lost and stuck in the school pool. This action touched Sayaka, and, after that incident, she wanted to get to know Makoto more. Unfortunately, they ended up graduating middle school without interacting with each other, and then went to different high schools.`,
      ],
      description: `When Chihiro was a child, he became the subject of harassment and bullying.`,
      isDead: true,
      icon: Sayaka,
    },
    {
      id: "17",
      name: "Sonia Nevermind",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Princess",
      isDead: false,
      icon: Sonia,
    },
    {
      id: "18",
      name: "Gundham Tanaka",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Breeder",
      isDead: false,
      icon: Gundham,
    },
    {
      id: "19",
      name: "Peko Pekoyama",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Swordswoman",
      isDead: true,
      icon: Peko,
    },
    {
      id: "20",
      name: "Akane Owana",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Gymnast",
      isDead: false,
      icon: Akane,
    },
    {
      id: "21",
      name: "Chiaki Nanami",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Gamer",
      isDead: false,
      icon: Chiaki,
    },
    {
      id: "22",
      name: "Fuyuhiko Kuruzyu",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Yakuza",
      isDead: false,
      icon: Fuyuhiko,
    },
    {
      id: "23",
      name: "Ibuki Mioda",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Musician",
      isDead: true,
      icon: Ibuki,
    },
    {
      id: "24",
      name: "Mikan Tsumiki",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Nurse",
      isDead: true,
      icon: Mikan,
    },
    {
      id: "25",
      name: "Teruteru Hanamura",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Cook",
      isDead: true,
      icon: Teruteru,
    },
    {
      id: "26",
      name: "Kazuichi Soda",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Mechanic",
      isDead: false,
      icon: Soda,
    },
    {
      id: "27",
      name: "Byakuya Togami",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Affluent Progeny (?)",
      isDead: true,
      icon: ByakuyaGD,
    },
    {
      id: "28",
      name: "Hajime Hinata",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate ???",
      isDead: false,
      icon: Hajime,
    },
    {
      id: "29",
      name: "Mahiru Koizumi",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Photographer",
      isDead: true,
      icon: Mahiru,
    },
    {
      id: "30",
      name: "Nagito Komaeda",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Lucky Student",
      isDead: false,
      icon: Nagito,
    },
    {
      id: "31",
      name: "Hiyoko Saijoni",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Traditional Dancer",
      isDead: true,
      icon: Hiyoko,
    },
    {
      id: "32",
      name: "Nekomaru Nidai",
      history: [`to be done...`, `to be done...`],
      ultimate: "Ultimate Team Manager",
      isDead: false,
      icon: Nekomaru,
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
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-3 px-10 py-2 cursor-pointer text-white bg-slate-800 rounded-xl absolute top-4 left-4"
      >
        <i className="fa-solid fa-caret-left"></i>
        <span className="font-['PT_Sans']">Back to characters</span>
      </div>
      <div className="flex justify-center bg-[rgba(255,255,255,0.85)] min-h-screen">
        <div className="flex justify-center items-center text-xl font-['PT_Sans'] max-xl:flex-col-reverse max-md:text-lg">
          <img
            className="w-80 left-28 p-5"
            src={character.icon}
            alt={character.name + " icon"}
          />
          <div className="flex flex-col justify-center items-center gap-8 px-24 py-28 max-lg:px-5">
            <div className="gap-4 table overflow-hidden bg-slate-100 shadow-2xl rounded-2xl shadow-[rgba(0,0,0,0.3)]">
              <h1 className="text-3xl text-center p-5 text-yellow-500 bg-slate-950">
                {character.name}
              </h1>
              <div className="p-10 m-auto flex items-center max-w-5xl md:max-w-">
                <i
                  onClick={() => setHistory(getCharacters().history[0])}
                  className="text-3xl mr-12 cursor-pointer fa-solid fa-chevron-left max-lg:hidden"
                ></i>
                <div>
                  <h2 className="text-yellow-700 border-b-2 border-yellow-700 pb-1 inline-block">
                    {character.ultimate}
                  </h2>
                  <p className="font-serif leading-[3rem] mt-2 text-justify max-md:text-left transition-all duration-200">
                    {history}
                  </p>
                </div>
                <i
                  onClick={() => setHistory(getCharacters().history[1])}
                  className="text-3xl ml-12 cursor-pointer fa-solid fa-chevron-right max-lg:hidden"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
