import { useContext } from "react"
import { MemesContext } from "./MemesContext"

export default function MemesSeparator(){
    const memeData=useContext(MemesContext)
    return <h1>:)</h1>
}