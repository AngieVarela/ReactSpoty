export async function consumiraAPI(){

    const URI='https://api.spotify.com/v1/artists/3e7awlrlDSwF3iM0WBjGMp/top-tracks?market=US'

    const TOKEN= 'Bearer BQAucLDeWG8dp2DlasP6oviKe3mZgxmgN7Q10w71U0c44T0T5Ypacc8rATpcjWSxFUmIuUOF88t7yfEs9lOfhZxrSOQl4BQCFbo4odM41z07Jda7-SpEYPQ3x3ivynVa6BMdsrNCiCs6lICxnS2KZ4Y2_H0MGqF7cJGc4_mKcj3QnVSxkZgFnoZH8bISoLRp'

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
    }

    //CONSUMIENDO EL SERVICIO
    let respuesta=await fetch(URI, PETICION)
    let datosServicio=await respuesta.json()

    return datosServicio
}