
import './style.css'
import React from '../../assets/react.svg'

function Home() {

  const users = [{ id: 1, nome: 'Lucas', idade: 20, email: 'lucas@example.com' },
  { id: 2, nome: 'Maria', idade: 25, email: 'maria@example.com' }]

  return (

    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name='nome' placeholder='Nome' type='text' />
        <input name='email' placeholder='Email' type='email' />
        <input name='senha' placeholder='Senha' type='password' />
        <button type='submit'>Cadastrar</button>
      </form>

      <div>
        <div>
          <p>Nome: {users[0].nome} </p>
          <p>Idade: {users[0].idade}</p>
          <p>Email: {users[0].email} </p>
        </div>

        <button>
          <image src={React} alt='Lixeira' />
        </button>

      </div>

    </div>


  )
}

export default Home
