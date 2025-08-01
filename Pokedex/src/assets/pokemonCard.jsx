import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return null;

  return (
    <div
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
      className="cursor-pointer bg-[#2c2c2e] rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 p-4 flex flex-col items-center text-center"
    >
      <div className="w-36 h-36 bg-[#3a3a3c] rounded-full flex items-center justify-center mb-4">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-gray-400 text-sm mb-1">
        N° {pokemon.id.toString().padStart(3, "0")}
      </p>
      <h2 className="capitalize text-xl font-semibold text-white mb-2">
        {pokemon.name}
      </h2>
      <div className="flex flex-wrap justify-center gap-1">
        {pokemon.types.map((t) => (
          <span
            key={t.slot}
            className={`text-xs px-2 py-1 rounded-full ${getTypeColor(t.type.name)} text-white`}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function getTypeColor(type) {
  const colors = {
    grass: "bg-green-600",
    fire: "bg-red-600",
    water: "bg-blue-600",
    bug: "bg-lime-600",
    normal: "bg-gray-500",
    electric: "bg-yellow-400 text-black",
    poison: "bg-purple-600",
    ground: "bg-yellow-800",
    fairy: "bg-pink-500",
    psychic: "bg-pink-700",
    fighting: "bg-orange-700",
    rock: "bg-yellow-700",
    ghost: "bg-indigo-700",
    ice: "bg-cyan-500",
    dragon: "bg-indigo-800",
    dark: "bg-gray-900",
    steel: "bg-gray-600",
    flying: "bg-sky-600",
  };
  return colors[type] || "bg-gray-500";
}
