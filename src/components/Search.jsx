import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Search.css'

const Search = () => {

    const {id} = useParams()

    // hooks para o card
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [itemID, setItemID] = useState(id);
    const [img, setImg] = useState("")

    useEffect(() => {
        const fetchPokemons = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${itemID}`)
        const data = await res.json();
              setName(data.name)
              setType(data.types.map(type => type.type.name).join(', '))
              setItemID(data.id)
              setImg(data.sprites.front_default)
        }
        fetchPokemons();
    }, [])


  return (
    <div className='container'>
      <div className='card'>     
              <img src={img} alt="" />
              <h2 className="nome" >Nome: {name}</h2>
              <p>tipo: {type}</p>
              <strong>Id: {itemID}</strong>      
      </div>
    </div>
  )
}

export default Search