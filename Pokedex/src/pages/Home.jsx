import React, { useState } from "react";
import PokemonCard from "../assets/pokemonCard";
import Navbar from "../assets/navbar";

export default function Home() {
  const pokemons = [
    { id: 25, name: "Pikachu" },
    { id: 4, name: "Charmander" },
    { id: 7, name: "Squirtle" },
    { id: 1, name: "Bulbasaur" },
    { id: 6, name: "Charizard" },
    { id: 133, name: "Eevee" },
    { id: 39, name: "Jigglypuff" },
    { id: 52, name: "Meowth" },
    { id: 143, name: "Snorlax" },
    { id: 150, name: "Mewtwo" },
    { id: 94, name: "Gengar" },
    { id: 131, name: "Lapras" },
  ];

  const [search, setSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setLoading(true);
    setTimeout(() => {
      const results = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query) ||
        pokemon.id.toString() === query
      );
      setFilteredPokemons(results);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="w-full max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Rechercher un Pokémon par nom ou ID..."
            value={search}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-[#2c2c2e]"
          />
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredPokemons.length > 0 ? (
              filteredPokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} name={pokemon.name} id={pokemon.id} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400">
                Aucun Pokémon trouvé.
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
