import { useState, useEffect } from 'react'
import './outrosProjetos.css'

const OutrosProjetos = () => {
    const[repositories, setRepositories] = useState([])

    useEffect(() => {
        async function getData(){
            const response = await fetch('https://api.github.com/users/assueria/repos')
            const data = await response.json()

            setRepositories(data)
        }
        getData()
    },[])

    return(
        <>
            <div className='container'>
            <h1 className='titulo'>Outros projetos e estudos meus</h1>
                <div className='container-cartao'>
                    {repositories.map(repo=>
                        <div className='cartao'>
                            <h3 key={repo.id}>{repo.name}</h3>
                            <p>{repo.description}</p>

                        </div>
                        )}

                </div>

            </div>
        </>
    )
}

export default OutrosProjetos