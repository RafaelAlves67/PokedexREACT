import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Search.css'


const Pesquisa = () => {

    const [searchParams] = useSearchParams()

    const nome = searchParams.get("q")
    const [type, setType] = useState("")
    const [itemID, setItemID] = useState("");
    const [img, setImg] = useState("")

    // erro
    const [error, setError] = useState(false)

    
    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
            const data = await response.json();
            setType(data.types.map(type => type.type.name).join(', '))
            setImg(data.sprites.front_default)
            setItemID(data.id)
        };

        fetchPokemons();
    }, []);


  





    return (
        <div>
            <h1>Pokemon encontrado!</h1>

            <div className='container'>
                <div className='card'>
                    <img src={img} alt="" />
                    <h2 className="nome" >Nome: {nome}</h2>
                    <p>tipo: {type}</p>
                    <strong>Id: {itemID}</strong>
                </div>
            </div>
        </div>           
    )
}

export default Pesquisa