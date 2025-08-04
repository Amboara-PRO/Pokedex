import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="flex flex-col w-full h-full items-center pr-5 pl-5 bg-[#1c1c1e]">
      <section className="flex flex-col items-center w-full relative">
        <Link
          to="/"
          className="group absolute left-4 top-4 flex items-center gap-2 bg-transparent px-4 py-3 rounded-2xl border border-b-white hover:bg-white transition"
        >
          <span className="text-white text-xl group-hover:text-black">←</span>
          <span className="text-white group-hover:text-black">
            Retour à l’accueil
          </span>
        </Link>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-1/4"
        />
      </section>
      <section className="flex flex-col items-center w-full bg-[#162F50] rounded-t-2xl justify-between h-full">
        <div className="flex flex-row w-11/12 h-1/2 border-b-[#D3D3D3] border-b-2 pt-10 pb-10 justify-between">
          <div className="flex flex-col justify-between gap-5">
            <h1 className="text-xl text-gray-400">No. {pokemon.id}</h1>
            <h1 className="text-4xl text-black-50 font-semibold">
              {pokemon.name}
            </h1>
          </div>
          <div>
            <p className="text-xl">
              {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full 1/2 text-[#F8F8F8]">
          <section className="w-11/12 pt-5 flex flex-col justify-between gap-5 pb-10">
            <nav className="">
              <div>
                <h1 className="text-xl">Stats</h1>
              </div>
            </nav>
            <div className="flex flex-col gap-1 ">
              <p>
                <strong>HP :</strong>{" "}
                {pokemon.stats.find((s) => s.stat.name === "hp").base_stat}
              </p>
              <p>
                <strong>Attaque :</strong>{" "}
                {pokemon.stats.find((s) => s.stat.name === "attack").base_stat}
              </p>
              <p>
                <strong>Vitesse :</strong>{" "}
                {pokemon.stats.find((s) => s.stat.name === "speed").base_stat}
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
