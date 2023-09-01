import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function Characters() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    ultimate: "",
    description: "",
    icon: "",
  });
  useEffect(() => {
    fetch(`../src/assets/json/${name}.json`)
      .then((r) => r.json())
      .then((r) => {
        setCharacter({
          name: r.name,
          ultimate: r.ultimate,
          description: r.description,
          icon: r.icon,
        });
      });
  }, []);
  return (
    <div className="bg-[url(../src/assets/imgs/thhBanner.png)]">
      <div className="flex justify-center bg-[rgba(30,30,31,0.95)] min-h-screen">
        <div className="flex justify-center items-center text-white text-3xl font-['PT_Sans']">
          <img
            className="w-72"
            src={character.icon}
            alt={character.name + " icon"}
          />
          <div className="flex flex-col justify-center items-center gap-8 px-24 py-8 rounded-xl">
            <div className="flex flex-col items-center gap-4 max-w-xl rounded-3xl table overflow-hidden bg-slate-900 shadow-2xl">
              <h1 className="text-6xl text-center p-5 text-yellow-500 bg-slate-700">
                {character.name}
              </h1>
              <div className="p-10">
                <h2 className="text-yellow-400">{character.ultimate}</h2>
                <p className="font-['Barlow'] leading-10">
                  {character.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-10 py-2 bg-yellow-900 rounded-xl">
              Back to characters
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
