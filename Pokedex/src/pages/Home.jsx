import React from "react";
import PokemonCard from "../assets/pokemonCard";
import Navbar from "../assets/navbar";

export default function Home() {
  const pokemons = ["pikachu","Charmander","Squirtle","Bulbasaur","Charizard","Eevee","Jigglypuff","Meowth","Snorlax","Mewtwo","Gengar","Lapras"];

  return (
    <div>
      <Navbar></Navbar>
      <a className="cursor-pointer">
        {pokemons.map((name) => (
          <PokemonCard key={name} name={name}/>
        ))}
      </a>
    </div>
  );
}


