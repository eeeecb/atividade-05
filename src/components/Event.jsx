import React from 'react'

const Event = () => {
   
    // Evento com função
    const handleClick = (e) => {
        console.log(e);
        alert("Evento com função!")
    }

    const callNames = () => {
        alert("Testando")
    }
           
    return (
        <div>
            <h2>Componente Event</h2>
            <div className="button-container">
                <button onClick={() => alert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
                    Clique Aqui
                </button>
                <button onClick={handleClick}>Clique com Função</button>
                <button onClick={callNames}>Clique com Função</button>
            </div>
        </div>
    )
}

export default Event