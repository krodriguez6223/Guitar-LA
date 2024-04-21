
import { useState } from "react"
import Guitar from "./Guitar"
import { db } from "../data/database"


export default function Main() {

    //State
    //console.log(db)

    const [ data, setData ] =  useState(db)

    data.forEach(element => {
        console.log(element.id)
    });

    return (

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
             
                <Guitar></Guitar>
              
            </div>
        </main>
    )
} 