import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  const [pokemon, setPokemon] = useState([]);

  // carregar pokemons
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = [];

      for (let i = 1; i <= 56; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemons.push(data);
      }
      setPokemon(pokemons);
    };

    fetchPokemons();
  }, []);


  return (
    <>
      <h1>Lista de Pokemons</h1>
      <div className="container">
        {pokemon.length > 0 && pokemon.map((poke) => (
          <div className="card" key={poke.id}>
            <img src={poke.sprites.front_default} alt="" />
            <strong className="nome" >Nome: {poke.name}</strong>
            <p>Tipo: {poke.types.map(type => type.type.name).join(', ')}</p>
            <strong>Id: {poke.id}</strong>
            <Link to={`/pokemon/${poke.id}`} >Mais Detalhes</Link>
          </div>
        ))}
      </div>
    </>

  )
}


export default Home