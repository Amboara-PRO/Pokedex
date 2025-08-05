import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTypeColor } from "../assets/pokemonCard";

export default function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon)
    return <p className="text-white text-center mt-10">Chargement...</p>;

  return (
    <div className="flex flex-col w-full min-h-screen items-center px-4 sm:px-8 bg-[#1c1c1e]">
      <section className="flex flex-col items-center w-full relative pt-6 sm:pt-10">
        <Link
          to="/"
          className="group absolute left-2 sm:left-4 top-4 flex items-center gap-2 bg-transparent px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border border-b-white hover:bg-white transition"
        >
          <span className="text-white text-xl group-hover:text-black">←</span>
          <span className="text-white group-hover:text-black">
            Retour à l’accueil
          </span>
        </Link>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mt-8"
        />
      </section>

      <section className="flex flex-col items-center w-full bg-[#162F50] rounded-t-2xl h-full pb-10 mt-6">
        <div className="flex flex-col sm:flex-row w-11/12 border-b-[#D3D3D3] border-b-2 pt-10 pb-10 justify-between gap-6">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-lg sm:text-xl text-gray-400">
              No. {pokemon.id}
            </h1>
            <h1 className="text-3xl sm:text-4xl text-white font-semibold capitalize">
              {pokemon.name}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {pokemon.types.map((t) => (
              <span
                key={t.slot}
                className={`text-base sm:text-xl px-3 py-1 rounded-full ${getTypeColor(
                  t.type.name
                )} text-white capitalize`}
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-full text-[#F8F8F8]">
          <section className="w-11/12 pt-5 flex flex-col justify-between gap-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold">Stats :</h1>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex justify-between w-full sm:w-1/4">
                  <strong>HP :</strong>
                  <span>
                    {pokemon.stats.find((s) => s.stat.name === "hp").base_stat}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${
                        (pokemon.stats.find((s) => s.stat.name === "hp")
                          .base_stat /
                          200) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex justify-between w-full sm:w-1/4">
                  <strong>Attaque :</strong>
                  <span>
                    {
                      pokemon.stats.find((s) => s.stat.name === "attack")
                        .base_stat
                    }
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${
                        (pokemon.stats.find((s) => s.stat.name === "attack")
                          .base_stat /
                          200) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex justify-between w-full sm:w-1/4">
                  <strong>Vitesse :</strong>
                  <span>
                    {
                      pokemon.stats.find((s) => s.stat.name === "speed")
                        .base_stat
                    }
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${
                        (pokemon.stats.find((s) => s.stat.name === "speed")
                          .base_stat /
                          200) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
