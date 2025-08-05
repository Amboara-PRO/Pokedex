import React from "react";
import PokemonCard from "../assets/pokemonCard";
import Navbar from "../assets/navbar";
import { useState } from "react";

export default function Home() {

  const pokemons = [
    "pikachu", "Charmander", "Squirtle", "Bulbasaur", "Charizard",
    "Eevee", "Jigglypuff", "Meowth", "Snorlax", "Mewtwo", "Gengar", "Lapras"
  ];


  const [search, setSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    const results = pokemons.filter((p) =>
      p.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(results);
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 py-8">

        
        <div className="w-full max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Rechercher un Pokémon..."
            value={search}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((name) => (
              <PokemonCard key={name.toLowerCase()} name={name} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              Aucun Pokémon trouvé.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
