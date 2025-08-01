import React from "react";
import PokemonCard from "../assets/pokemonCard";
import Navbar from "../assets/navbar";

export default function Home() {
  const pokemons = [
    "pikachu", "Charmander", "Squirtle", "Bulbasaur", "Charizard",
    "Eevee", "Jigglypuff", "Meowth", "Snorlax", "Mewtwo", "Gengar", "Lapras"
  ];

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pokemons.map((name) => (
            <PokemonCard key={name.toLowerCase()} name={name} />
          ))}
        </div>
      </section>
    </div>
  );
}
