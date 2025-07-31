import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div onClick={() => navigate(`/pokemon/${pokemon.name}`)} className="flex flex-col text-center w-1/5 rounded-xl bg-[#C8E6E0] p-2">
      <div className="bg-[#F5F5F5] flex flex-col items-center rounded-xl">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full h-full"/>
      </div>
      <h1>No. {pokemon.id}</h1>
      <h1>{pokemon.name}</h1>
    </div>
  );
}