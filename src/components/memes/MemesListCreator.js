import {useContext} from "react";
import { MemesContext } from "../context/MemesContext";

export default function MemesListCreator(){
const memeData= useContext(MemesContext);
return(<div>
    <h1>{memeData[0].title}</h1>
</div>)
}