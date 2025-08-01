import React from "react"
export default function Navbar(){
    return(
        <div className="flex justify-around items-center bg-[#162F50]  mb-5 py-3">
            <img src="https://id.portal-pokemon.com/img/common/logo.png" alt="image indisponible" />
            <h1 className='text-center font-semibold text-5xl text-[#FECF00] '>Pokedex</h1>
        </div>
    );
}