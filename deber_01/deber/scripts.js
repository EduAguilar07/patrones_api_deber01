const API = 'https://swapi.dev/api/people/'

function personaje(texto,id) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let h2_texto = document.createTextNode(API +id)
    h1.appendChild(h1_texto)
    h2.appendChild(h2_texto)
    div.appendChild(h1)
    div.appendChild(h2)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

async function obtener_personaje(id) {
    try {
        let response = await fetch(`${API}${id}`)
        return personaje( await response.json(), id )
    } catch(error) {
        console.error(`[error]: ${error}`)
    }
}
async function cargar_personajes(){
    for (let i=1; i<=80; i++) {
        await obtener_personaje(i)    
}
}

cargar_personajes()




