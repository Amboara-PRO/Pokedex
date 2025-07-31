import React, { useEffect, useState } from "react";

function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Chargement...</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p>HP: {pokemon.stats.find(s => s.stat.name === "hp").base_stat}</p>
    </div>
  );
}

export default PokemonCard;
