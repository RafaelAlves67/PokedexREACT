import React from 'react'
import './Nav.css'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Nav = () => {

  const [valor, setValor] = useState("")
  const Navigate = useNavigate("")
  const [error, setError] = useState(null)

  const [pokemon, setPokemon] = useState([])


 
  const handleSubmit = (e) => {
     e.preventDefault()
    if (!valor) {
      return (alert("Campo de pesquisa vazio!"))
    }
      fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(res => {
              if (res.ok) {
                Navigate(`/pesquisa?q=${valor}`);
                setValor("");
                console.log("REQUISIÇÃO ACEITA")
                
              } else {
                console.log("REQUISIÇÃO FALHOU")
                Navigate('*')
                setValor("");
              }
            })   
  }

    

  return (
    <nav>
        <h2>Pokedex Online</h2>
      
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite o nome do pokemon' value={valor} onChange={(e) => setValor(e.target.value)}/>
            <button>Pesquisar</button>
        </form>

        <div className='barra-menu'>
          <Link to='/'>Home</Link>
          <Link to='/About'>Sobre</Link>
        </div>
    </nav>
  )
}

export default Nav

